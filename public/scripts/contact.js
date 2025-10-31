// Contact form client script
(function(){
  function onReady(fn){
    if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }

    onReady(() => {
      const form = document.getElementById('contact-form');
      if(!form) return;
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn ? submitBtn.textContent : '';
      const originalBtnClass = submitBtn ? submitBtn.className : '';

      // Button state helpers (no alerts)
      function setButtonSuccess(sentLabel) {
        if (!submitBtn) return;
        submitBtn.disabled = true;
        submitBtn.textContent = sentLabel;
        // try to remove primary classes and add green success classes
        submitBtn.classList.remove('bg-primary-600', 'hover:bg-primary-700', 'dark:bg-primary-500', 'dark:hover:bg-primary-600');
        submitBtn.classList.add('bg-green-600', 'hover:bg-green-700', 'dark:bg-green-600');
      }

      function setButtonFailure() {
        if (!submitBtn) return;
        // briefly show failure color then revert
        submitBtn.classList.remove('bg-primary-600', 'hover:bg-primary-700', 'dark:bg-primary-500', 'dark:hover:bg-primary-600');
        submitBtn.classList.add('bg-red-600');
        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.textContent = originalBtnText;
          submitBtn.className = originalBtnClass;
        }, 2000);
      }

      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const isEn = location.pathname.startsWith('/en');
        const sendingLabel = isEn ? 'Sending...' : 'Enviando...';
        const sentLabel = isEn ? 'Message sent' : 'Enviado';
        const successAlert = isEn ? 'Message sent' : 'Enviado';
        const errorAlert = isEn ? 'Send failed' : 'Error al enviar';

        try {
          if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = sendingLabel;
          }

          const action = form.getAttribute('action') || window.location.href;
          const formData = new FormData(form);

          const res = await fetch(action, {
            method: 'POST',
            headers: {
              'Accept': 'application/json'
            },
            body: formData,
            mode: 'cors'
          });

          // Treat success if:
          // - response.ok (2xx),
          // - status in the 2xx-3xx range (some providers redirect),
          // - the request was redirected (res.redirected === true),
          // - or the response is opaque/opaqueredirect (CORS/providers that hide status)
          const isSuccess = res.ok || (res.status >= 200 && res.status < 400) || res.redirected || res.type === 'opaque' || res.type === 'opaqueredirect';

          if (isSuccess) {
            // wait a short delay so the user sees the sending state, then show success
            const successDelay = 2000; // ms
            setTimeout(() => {
              setButtonSuccess(sentLabel);
            }, successDelay);
            // keep form fields intact (do not reset)
          } else {
            // If it's not clearly successful, show failure on button and log response for debugging
            console.warn('Contact form submission returned non-success response', res);
            setButtonFailure();
          }
        } catch (err) {
          console.error('Contact form submission error', err);
          setButtonFailure();
        }
      });
    });
})();
