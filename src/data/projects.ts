export interface Project {
  name: string;
  description: string;
  technologies: string[];
  image?: string;
  imageAlt: string;
  liveUrl?: string;

}

export const projectsEs: Project[] = [
  {
    name: 'Caldero Caribe',
    description: 'Página estática para un restaurante, con diseño moderno y responsivo.',
    technologies: ['Astro', 'Tailwind CSS', 'JavaScript'],
    image: '/calderoCaribe.webp',
    imageAlt: 'Vista previa de la página del restaurante Caldero Caribe',
    liveUrl: 'https://calderocaribe.netlify.app',
  },
  {
    name: 'App de clima',
    description: 'Aplicación meteorológica que consume la API de Open-Meteo en tiempo real.',
    technologies: ['JavaScript', 'API', 'HTML', 'CSS'],
    image: '/appclima.webp',
    imageAlt: 'Vista previa de la aplicación del clima',
    liveUrl: 'https://juanda1211.github.io/ClimateWeb/',
  },
  {
    name: 'Web de Fórmula 1',
    description: 'Sitio con información de F1, hecho para practicar diseño adaptable a celulares, tablets y escritorio.',
    technologies: ['JavaScript', 'HTML', 'React', 'Tailwind CSS'],
    image: '/f1web.webp',
    imageAlt: 'Vista previa de la web de información de Fórmula 1',
    liveUrl: 'https://f1-web-3385c.firebaseapp.com/',
  },
  {
    name: 'Club de tenis de mesa Anbu TT',
    description: 'Página para dar a conocer el club, enfocada en la experiencia de usuario y el diseño responsivo.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    image: '/anbutt.webp',
    imageAlt: 'Vista previa de la página del club Anbu TT',
    liveUrl: 'https://anbutt.netlify.app/',
  },
  {
    name: 'Portal Académico',
    description: 'Proyecto universitario. Frontend con HTML, CSS y JavaScript y backend en Java con arquitectura por capas.',
    technologies: ['Java', 'HTML', 'CSS', 'JavaScript'],
    image: '/PortalAcademicoJava.webp',
    imageAlt: 'Vista previa del Portal Académico',
    liveUrl: 'https://portal-academico-demo.onrender.com/index.html',
  },
];

export const projectsEn: Project[] = [
  {
    name: 'Caldero Caribe',
    description: 'Static restaurant website with a modern, responsive design.',
    technologies: ['Astro', 'Tailwind CSS', 'JavaScript'],
    image: '/calderoCaribe.webp',
    imageAlt: 'Preview of the Caldero Caribe restaurant website',
    liveUrl: 'https://calderocaribe.netlify.app',
  },
  {
    name: 'Weather App',
    description: 'Weather app that fetches real-time data from the Open-Meteo API.',
    technologies: ['JavaScript', 'API', 'HTML', 'CSS'],
    image: '/appclima.webp',
    imageAlt: 'Preview of the weather app',
    liveUrl: 'https://juanda1211.github.io/ClimateWeb/',
  },
  {
    name: 'Formula 1 Website',
    description: 'F1 information site built to practice layouts that adapt to phones, tablets and desktop.',
    technologies: ['JavaScript', 'HTML', 'React', 'Tailwind CSS'],
    image: '/f1web.webp',
    imageAlt: 'Preview of the Formula 1 information website',
    liveUrl: 'https://f1-web-3385c.firebaseapp.com/',
  },
  {
    name: 'Anbu TT Table Tennis Club',
    description: 'Website to promote the club, focused on user experience and responsive design.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    image: '/anbutt.webp',
    imageAlt: 'Preview of the Anbu TT club website',
    liveUrl: 'https://anbutt.netlify.app/',
  },
  {
    name: 'Academic Portal',
    description: 'University project. Frontend with HTML, CSS and JavaScript and a Java backend with a layered architecture.',
    technologies: ['Java', 'HTML', 'CSS', 'JavaScript'],
    image: '/PortalAcademicoJava.webp',
    imageAlt: 'Preview of the Academic Portal',
    liveUrl: 'https://portal-academico-demo.onrender.com/index.html',
  },
];
