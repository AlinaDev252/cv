const es = {
  'nav.experience': 'Experiencia',
  'nav.skills': 'Habilidades',
  'nav.education': 'Formación',
  'hero.status': 'Disponible para puestos en remoto · Desde Málaga',
  'hero.role': 'Desarrolladora Front-End · E-commerce y desarrollo de temas',
  'hero.intro': 'Hola, soy Alina. Construyo las partes de una tienda online que la gente realmente toca: páginas de producto, checkouts y la landing a la que llegas después de pinchar en una promo. Antes pasé casi diez años en operaciones y atención al cliente, así que sé lo que es ser quien responde cuando algo falla.',
  'hero.download': 'Descargar CV (PDF)',
  'hero.contact': 'Contactar',
  'about.title': 'Sobre mí',
  'about.body': `
    <p>No empecé en tecnología. Durante años dirigí un equipo de atención al cliente y logística en Bucarest, y era la persona a la que todos acudían cuando el ERP fallaba. En 2020 decidí convertir eso en mi trabajo: hice el Nanodegree Front End de Udacity, desarrollé proyectos con Vue y Tailwind y en 2022 entré en Marbill como desarrolladora front-end.</p>
    <p>Hoy soy desarrolladora senior en un equipo de cuatro personas, en una plataforma e-commerce de suscripción. Una semana normal es una nueva landing para una promo, un cambio en un tema o perseguir un layout shift en el checkout móvil. Me encanta el e-commerce porque el feedback es inmediato: cuando un checkout va más rápido o una página de campaña se entiende mejor, se nota en los números casi al momento.</p>
    <p>Suelo hacer de traductora entre marketing e ingeniería. Cojo un briefing poco claro, hago las preguntas incómodas al principio y lo convierto en algo que se puede publicar. También me gusta crear pequeñas herramientas que ahorran tiempo al equipo, como los scripts que usa el equipo de contenido para traducir páginas en bloque.</p>`,
  'stats.years': 'Años en front-end',
  'stats.themes': 'Temas de tienda publicados',
  'stats.pages': 'Landing pages publicadas',
  'job1.title': 'Desarrolladora Front-End',
  'job1.dates': 'jun. 2022 – actualidad',
  'job1.body': `
    <li>Desarrollé y mantuve más de 10 temas e interfaces a medida para una plataforma e-commerce de suscripción en pleno crecimiento, que procesa miles de transacciones de clientes al mes.</li>
    <li>Convertí diseños UI/UX complejos en código semántico y eficiente con HTML5, CSS3, JavaScript (ES6+), Bootstrap 5 y plantillas Twig (arquitectura similar a Shopify Liquid).</li>
    <li>Desarrollé y publiqué más de 60 landing pages y campañas promocionales de alta conversión, en estrecha colaboración con los equipos de diseño y marketing para cumplir plazos de lanzamiento ajustados.</li>
    <li>Maqueté páginas de producto, carrito, checkout y suscripción, con foco en la usabilidad móvil y en reducir los pasos hasta la compra.</li>
    <li>Audité y mejoré el rendimiento front-end, optimizando de forma sistemática la adaptación a móvil, las Core Web Vitals y los cambios de layout para reducir la tasa de rebote.</li>
    <li>Maqueté plantillas de email HTML responsive para pedidos, envíos y marketing.</li>
    <li>Di soporte a tiendas multi-idioma: maquetaciones que aguantan traducciones más largas y herramientas JavaScript que el equipo de contenido usa para traducir y revisar páginas en bloque.</li>
    <li>Actué como principal enlace técnico, convirtiendo briefings de marketing poco definidos en una arquitectura técnica concreta y gestionando los sprints en Jira.</li>
    <li>Uso herramientas de IA como GitHub Copilot, Gemini, Claude y ChatGPT para agilizar mi trabajo diario de desarrollo (sobre todo para código repetitivo, borradores de tests y refactorizaciones rápidas).</li>`,
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
    <li>Dirigí el equipo de atención al cliente y logística: operativa diaria, turnos y calidad del servicio.</li>
    <li>Usuaria clave de Microsoft Dynamics AX (ERP/CRM): actualización de datos, resolución de incidencias y formación de nuevos compañeros.</li>
    <li>Seguimiento de ventas y previsión de inventario con el Country Manager, con informes operativos semanales.</li>`,
  'skills.fe': 'Front-end',
  'skills.feExtra': 'diseño responsive, email HTML',
  'skills.cms': 'CMS y e-commerce',
  'skills.cmsBody': 'Desarrollo de temas, secciones reutilizables, landing pages, páginas de producto, carrito y checkout, sitios multi-idioma',
  'skills.ux': 'UX y calidad',
  'skills.uxBody': 'Usabilidad, accesibilidad, Core Web Vitals, HTML semántico, SEO técnico',
  'skills.tools': 'Herramientas',
  'skills.toolsBody': 'Git/GitHub, Figma, Webpack, Firebase, Jest, Jira, ClickUp, asistentes de IA para programar (GitHub Copilot, Claude)',
  'skills.lang': 'Idiomas',
  'skills.langBody': 'Rumano (nativo), español (C2), inglés (C1), alemán (básico)',
  'edu.master': 'Máster en Marketing y Relaciones Públicas',
  'edu.bachelor': 'Grado en Administración de Empresas (Comercio)',
  'edu.school': 'Academia de Estudios Económicos, Bucarest',
  'certs.title': 'Certificaciones',
  'footer.built': 'Diseñado y programado por mí, con HTML y Tailwind CSS.',
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
