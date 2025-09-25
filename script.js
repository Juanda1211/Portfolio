// --- NAVIGATION MENU TOGGLE ---
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
  const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
  hamburger.setAttribute('aria-expanded', !expanded);
  navMenu.classList.toggle('active');
});

navLinks.forEach(link =>
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
  })
);

const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY + 80;
  sections.forEach(section => {
    if (
      scrollPos >= section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      navLinks.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(`.nav-link[href="#${section.id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
});

// --- DARK MODE TOGGLE ---
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

function setTheme(dark) {
  if (dark) {
    document.body.classList.add('dark-mode');
    themeIcon.textContent = '☀️';
  } else {
    document.body.classList.remove('dark-mode');
    themeIcon.textContent = '🌙';
  }
  localStorage.setItem('theme', dark ? 'dark' : 'light');
}

(function () {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme === 'dark') setTheme(true);
  else if (storedTheme === 'light') setTheme(false);
  else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark);
  }
})();

themeToggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-mode');
  themeIcon.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// --- GITHUB PROJECTS FILTERED BY SELECTED LIST ---
const selectedRepos = ['tempConverter', 'dailyTaskCalendar', 'calculator']; //selected repos to be shown
const githubUsername = 'juanda1211'; // Replace with your GitHub username

async function fetchGitHubRepos(username) {
  const apiUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error('GitHub API error');
    const repos = await response.json();
    return repos;
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
}

function renderSelectedProjects(allRepos, selectedNames, containerId = 'projects-container') {
  const container = document.getElementById(containerId);
  if (!container) return;

  const filteredRepos = selectedNames
    .map(name => allRepos.find(repo => repo.name.toLowerCase() === name.toLowerCase()))
    .filter(Boolean);

  if (filteredRepos.length === 0) {
    container.innerHTML = '<p>No selected projects found.</p>';
    return;
  }

  container.innerHTML = filteredRepos.map(repo => {
    return `
      <div class="project-card">
        <h3 class="project-title">${repo.name}</h3>
        <p class="project-description">${repo.description || ''}</p>
        <p><strong>Language:</strong> ${repo.language || 'Other'}</p>
        <div class="project-links">
          <a href="${repo.html_url}" target="_blank" class="project-link">Code info</a>
          ${repo.homepage ? `<a href="${repo.homepage}" target="_blank" class="project-link">Live Demo</a>` : ''}
        </div>
      </div>
    `;
  }).join('');
}

async function loadSelectedGitHubProjects() {
  const allRepos = await fetchGitHubRepos(githubUsername);
  renderSelectedProjects(allRepos, selectedRepos);
}

document.addEventListener('DOMContentLoaded', loadSelectedGitHubProjects);

// --- CONTACT FORM ---
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you for your message! (Form submission not configured)');
  contactForm.reset();
});
