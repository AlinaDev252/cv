const es = {
  'nav.experience': 'Experiencia',
  'nav.skills': 'Habilidades',
  'nav.education': 'Formación',
  'hero.status': 'Disponible solo para puestos en remoto',
  'hero.role': 'Desarrolladora Front-End | JavaScript y plataformas eCommerce',
  'hero.intro': 'Llevo cuatro años creando temas de tienda, landing pages y checkouts para una plataforma e-commerce. Antes trabajé casi diez años en operaciones y atención al cliente, por eso siempre pienso en la persona que usa la página, no solo en el código.',
  'hero.download': 'Descargar CV (PDF)',
  'hero.contact': 'Contactar',
  'about.title': 'Sobre mí',
  'about.body': `
    <p>No empecé en tecnología. Dirigí un equipo de atención al cliente en Bucarest y era la persona a la que todos acudían cuando el ERP fallaba. En 2020 aprendí front-end por mi cuenta y en 2022 entré en Marbill, donde hoy soy desarrolladora senior en un equipo de cuatro personas.</p>
    <p>Lo que más me gusta del e-commerce es lo rápido que se ve el resultado: un checkout más rápido o una página de campaña más clara se nota en los números casi al momento. Por eso disfruto trabajando codo con codo con marketing: suelo ser quien convierte sus ideas en páginas que se pueden publicar, y los números nos dicen a todos qué ha funcionado.</p>`,
  'stats.years': 'Años programando',
  'stats.themes': 'Temas de tienda',
  'stats.pages': 'Landing pages',
  'job1.title': 'Desarrolladora Front-End',
  'job1.dates': 'jun. 2022 – actualidad',
  'job1.body': `
    <li>Desarrollé y mantuve más de 10 temas de tienda a medida para una plataforma e-commerce de suscripción en crecimiento, con un alto volumen de pedidos mensuales.</li>
    <li>Convertí diseños de Figma en páginas limpias y rápidas con HTML, CSS, JavaScript, Bootstrap 5 y Twig (un lenguaje de plantillas parecido a Liquid de Shopify).</li>
    <li>Publiqué más de 60 landing pages y campañas promocionales con los equipos de diseño y marketing, a menudo con fechas de lanzamiento ajustadas.</li>
    <li>Maqueté las páginas de producto, carrito, checkout y suscripción para que fueran más fáciles de usar en móvil y se pudiera comprar en menos pasos.</li>
    <li>Mejoré la velocidad de carga y la versión móvil: imágenes más ligeras, menos saltos de diseño y mejores resultados en Core Web Vitals.</li>
    <li>Maqueté plantillas de email HTML responsive para pedidos, envíos y marketing.</li>
    <li>Creé pequeñas herramientas JavaScript que ayudan al equipo de contenido a traducir y revisar páginas en nuestras tiendas multi-idioma.</li>
    <li>Trabajé con marketing para convertir ideas de campaña en tareas de desarrollo claras y ayudé a planificar los sprints en Jira.</li>
    <li>Uso herramientas de IA (GitHub Copilot, Claude, Gemini, ChatGPT) para agilizar mi trabajo diario, sobre todo para código repetitivo, primeros borradores de tests y refactorizaciones rápidas.</li>`,
  'job2.title': 'Freelance / Proyectos propios',
  'job2.dates': 'ene. 2020 – may. 2022',
  'job2.note': 'Dos años aprendiendo front-end por mi cuenta, desde mi primera página HTML hasta aplicaciones completas en Vue.',
  'job2.body': `
    <li>Desarrollé y publiqué aplicaciones web responsive con Vue 3 (Composition API, Pinia, Vue Router), Tailwind CSS y Firebase.</li>
    <li>Configuré builds de Webpack a medida y resolví problemas de estilos entre navegadores.</li>
    <li>Completé el Nanodegree Front End Web Developer de Udacity y el programa Vue.js Developer de Zero To Mastery.</li>`,
  'job3.title': 'Responsable de Operaciones',
  'job3.dates': 'feb. 2011 – dic. 2019',
  'job3.note': 'Ascendida en 2012 tras un año como Especialista de Atención al Cliente.',
  'job3.body': `
    <li>Coordiné el equipo de atención al cliente: planificaba el trabajo diario, marcaba prioridades y resolvía incidencias sobre la marcha, algo muy parecido a trabajar por sprints.</li>
    <li>Usuaria clave de Microsoft Dynamics AX (ERP/CRM): participé en la implantación de una actualización del sistema, probé los nuevos flujos, redacté la documentación de procesos y formé a mis compañeros.</li>
    <li>Seguimiento de ventas y previsión de inventario con el Country Manager, con informes operativos semanales.</li>`,
  'skills.fe': 'Front-end',
  'skills.feExtra': 'diseño responsive, email HTML',
  'skills.cms': 'CMS y e-commerce',
  'skills.cmsBody': 'Desarrollo de temas, secciones reutilizables, landing pages, páginas de producto, carrito y checkout, sitios multi-idioma',
  'skills.ux': 'UX y calidad',
  'skills.uxBody': 'Usabilidad, accesibilidad, Core Web Vitals, HTML semántico, SEO técnico',
  'skills.tools': 'Herramientas',
  'skills.toolsBody': 'Git/GitHub, Figma, Webpack, Firebase, Jest, Jira, ClickUp, asistentes de IA para programar (GitHub Copilot, Claude, Gemini, ChatGPT)',
  'skills.lang': 'Idiomas',
  'skills.langBody': 'Rumano (nativo), español (C2), inglés (C1)',
  'edu.master': 'Máster en Marketing y Relaciones Públicas',
  'edu.bachelor': 'Grado en Administración de Empresas (Comercio)',
  'edu.school': 'Academia de Estudios Económicos, Bucarest',
  'certs.title': 'Certificaciones',
  'footer.built': 'Hecho con HTML y Tailwind CSS ·',
  'footer.source': 'Ver código',
};

const nodes = document.querySelectorAll('[data-i18n]');
nodes.forEach((el) => { el.dataset.en = el.innerHTML; });

function setLang(lang) {
  nodes.forEach((el) => {
    const key = el.dataset.i18n;
    el.innerHTML = lang === 'es' && es[key] ? es[key] : el.dataset.en;
  });
  document.documentElement.lang = lang;
  document.getElementById('cv-download').href = lang === 'es' ? 'assets/Alina_Goiea_CV_Desarrolladora_Frontend.pdf' : 'assets/Alina_Goiea_Frontend_Developer.pdf';
  document.querySelectorAll('[data-lang]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  try { localStorage.setItem('lang', lang); } catch (e) {}
}

document.querySelectorAll('[data-lang]').forEach((b) => b.addEventListener('click', () => setLang(b.dataset.lang)));

let saved = null;
try { saved = localStorage.getItem('lang'); } catch (e) {}
const initial = saved || (navigator.language.startsWith('es') ? 'es' : 'en');
if (initial === 'es') setLang('es');

document.getElementById('theme-toggle').addEventListener('click', () => {
  const dark = document.documentElement.classList.toggle('dark');
  try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) {}
});

document.getElementById('year').textContent = new Date().getFullYear();
