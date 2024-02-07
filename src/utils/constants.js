export const PROJECTS = [
  {
    leftSided: true,
    showImage: true,
    private: true,
    header: "Consulta DNI",
    imgs: ["reniec-query.png", "reniec-query2.jpg"],
    projectLink: "https://reniec-vue-git-master-wilder-s-projects.vercel.app/",
    codeLink: "https://github.com/wilderTorres18/cotization2023",
    desc: " 'Consulta DNI' es una aplicación básica que permite a los usuarios obtener información de RENIEC, como sus nombres completos, mediante el uso de la API de RENIEC.",
    technologies: ["JavaScript", "Vue", "HTML", "Tailwind"],
    customStyle: {
      background: "#f0e9ee",
      border: "0.5px solid #4b135d",
      btnColor: "#d12e26",
    },
  },
  {
    leftSided: false,
    showImage: true,
    private: false,
    header: "Cotización",
    imgs: ["cotization-process.png", "cotization-process2.jpg"],
    projectLink: "https://234123123.000webhostapp.com/",
    codeLink: "https://github.com/wilderTorres18/cotization2023",
    desc: "'Cotización' es un pequeño proyecto para agilizar el proceso de cotización de precios de banners y optimizar la gestión de costos y materiales en la empresa Publiarte. ",
    desc2:
      "En este proyecto, se empleó lógica de programación para calcular costos y perímetros, lo que resultó útil al integrarse en un E-commerce.",
    technologies: ["HTML", "Tailwind", "JavaScript", "PHP"],
    customStyle: {
      background: "#edf4e3",
      border: "0.5px solid #2e693b",
      btnColor: "#006b35",
    },
  },
  {
    leftSided: false,
    showImage: false,
    private: false,
    header: "My Portfolio",
    codeLink: "https://github.com/gdkimaiyo/portfolio",
    desc: "This website. A typical portfolio website where one can display information about themselves such as about section, the services they offer, showcase their projects, testimonials and how to get in touch to them.",
    desc2:
      "I designed this project using Vue Js. Code reusability and component reuse were the core concepts I learnt from designing this portfolio website.",
    technologies: ["Vue", "JavaScript", "HTML", "SCSS"],
    customStyle: {
      background: "#e9f0f4",
      border: "0.5px solid #1d4778",
      btnColor: "#007bff",
    },
  },
  {
    leftSided: false,
    showImage: true,
    private: false,
    header: "ShengBase",
    imgs: ["shengbase.png"],
    projectLink: "https://shengbase.maiyo.dev",
    codeLink: "https://github.com/gdkimaiyo/shengbase",
    desc: "ShengBase is a Sheng Dictionary. The dictionary is enriched with latest and old sheng words, which is is constantly updated by users.",
    desc2:
      "New users can easily create an account and earn points by adding new sheng words or updating existing words in the dictionary.",
    technologies: [
      "Vue",
      "JavaScript",
      "NodeJs",
      "ExpressJS",
      "HTML",
      "SCSS",
      "MongoDB",
    ],
    customStyle: {
      background: "#edf4e3",
      border: "0.5px solid #2e693b",
      btnColor: "#006b35",
    },
  },
  {
    leftSided: true,
    showImage: true,
    private: false,
    header: "TaskManager",
    imgs: ["task_manager.jpg"],
    codeLink: "https://github.com/gdkimaiyo/ci3_app",
    desc: "Project management app where users can create and manage a project and its related tasks. This project was designed with PHP's CodeIgniter3 Framework. Main Concepts I learnt are CRUD and MySQL.",
    technologies: ["PHP", "CodeIgniter 3", "Bootstrap", "HTML", "CSS", "MySQL"],
    customStyle: {
      background: "#eeeeee",
      border: "0.5px solid #000000",
      btnColor: "#000000",
    },
  },
];

export const SERVICES = [
  {
    title: "Desarrollo web a medida",
    desc: "Diseño hermosas aplicaciones web responsivas, que son lo más fáciles de usar posible. Construyo teniendo en cuenta sus objetivos, ya sea que desee un sitio web simple y flexible, una aplicación web personalizada o un producto SaaS.",
    icon: "fas fa-laptop-code",
  },
  {
    title: "Mantenimiento y soporte",
    desc: "Llevo a cabo el mantenimiento y gestiono los problemas que surjan en su sitio web. Su sitio web siempre está creciendo. Ya sea que esté agregando nuevas funciones o realizando mejoras, estoy aquí para ayudarlo. Siempre estaré disponible para responder cualquier pregunta que puedas tener.",
    icon: "fas fa-headset",
  },
  {
    title: "Testing",
    desc: "Realizo pruebas exhaustivas utilizando múltiples enfoques para garantizar la coherencia entre los navegadores, la capacidad de respuesta, etc. para garantizar la funcionalidad y que todo funcione como se espera.",
    icon: "fas fa-vial",
  },
  // {
  //   title: "Coding Tutor",
  //   desc: "I am a Coding Tutor. I teach computer programming languages such as JavaScript, Python, C/C++ and Web Development starting from the basics to advanced concepts. My target age groups are: 7 - 12 years and teenagers",
  //   icon: "fas fa-chalkboard-user",
  // },
];

export const SKILLS = [
  {
    category: "Interfaz de usuario",
    skills: [
      { language: "HTML", icon: "html5.png" },
      { language: "CSS", icon: "css.png" },
      { language: "Bootstrap", icon: "bootstrap.png" },
      { language: "Tailwind", icon: "tailwindcss.png" },
    ],
  },

  {
    category: "JavaScript",
    skills: [
      { language: "JavaScript", icon: "js.png" },
      { language: "Vue", icon: "vue.png" },
      // { language: "Angular", icon: "angular.png" },
      { language: "NodeJs", icon: "nodejs.png" },
      { language: "Quasar", icon: "quasar.png" },
      // { language: "ExpressJS", icon: "expressjs.png" },
    ],
  },

  {
    category: "Python",
    skills: [
      { language: "Python", icon: "python.png" },
      // { language: "Flask", icon: "flask.png" },
      //{ language: "dJango", icon: "django.png" },
    ],
  },

  {
    category: "PHP",
    skills: [
      { language: "PHP", icon: "php2.png" },
      { language: "Laravel", icon: "laravel.png" },
    ],
  },

  {
    category: "Base de datos",
    skills: [
      //{ language: "MongoBB", icon: "mongodb.png" },
      { language: "MySQL", icon: "mysql.png" },
      //{ language: "PostGreSQL", icon: "postgresql.png" },
    ],
  },

  {
    category: "Herramientas y plataformas",
    skills: [
      { language: "Git", icon: "git.png" },
      { language: "GitHub", icon: "github.png" },
      { language: "GitLab", icon: "gitlab.jpg" },
      { language: "GitKraken", icon: "gitkraken-logo.png" },
      { language: "AWS", icon: "aws.png" },
      { language: "Postman", icon: "postman-logo.png" },
      { language: "PhpStorm", icon: "PhpStorm_logo.png" },
      //{ language: "Docker", icon: "docker.png" },
      // { language: "Heroku", icon: "heroku.png" },
      { language: "Netlify", icon: "netlify.png" },
      { language: "vercel", icon: "vercel.jpg" },
      { language: "DigitalOcean", icon: "DigitalOcean_logo.png" },
      // { language: "C", icon: "c.png" },
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "Jhomar Chero Sosa",
    testimony:
      "Durante el tiempo que he estado con Wilder, he conocido que es una persona trabajadora que está dispuesta a hacer un esfuerzo adicional y más allá para realizar una tarea.",
    testimony2:
      "Es un buen jugador de equipo y asume roles de liderazgo cuando es necesario. Ha asumido el papel de director de proyectos, que desempeñó de forma ejemplar. Recomiendo con gusto a Wilder Torres para trabajar en cualquier organización creativa que valore estar al tanto de los proyectos y que esté buscando una persona altamente competente, decidida y trabajadora.",
    profession: "Software Engineer",
    initials: "JS",
  },
];

export const SOCIALS = [
  {
    name: "GitHub",
    logo: "fab fa-square-github",
    color: "rgba(38, 41, 46)",
    link: "https://github.com/wilderTorres18",
  },
  {
    name: "Medium",
    logo: "fab fa-medium",
    color: "rgba(0, 0, 0)",
    link: "https://medium.com/@wildercherotorres18",
  },
  {
    name: "LinkedIn",
    logo: "fab fa-linkedin",
    color: "rgba(46, 100, 188)",
    link: "https://www.linkedin.com/in/wilder-torres/",
  },
  /*   {
    name: "Twitter",
    logo: "fab fa-square-twitter",
    color: "rgba(74, 153, 233)",
    link: "https://twitter.com/gideonGDK",
  }, */
];
