export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  stack: string[];
  link: string;
  github: string;
}

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "День на Земле",
    description:
      "Интерактивная страница, вычисляющая точный возраст пользователя в днях, часах и минутах. Реализован динамический расчет данных в реальном времени.",
    image: "/projects/day-on-earth.jpg", // Картинки положи в public/projects/
    stack: ["React", "Redux", "Vite", "CSS"],
    link: "https://your-demo-link.com",
    github: "https://github.com/your-username/day-on-earth",
  },
  {
    id: "saas-landing-page",
    title: "SaaS Landing Page",
    description:
      "Профессиональный лендинг для SaaS-сервиса, реализованный точно по макету из Figma. Фокус на Pixel Perfect верстке, семантике и адаптивности под разные разрешения мониторов.",
    image: "/projects/saas-landing.png",
    stack: ["HTML5", "CSS3", "Figma", "Pixel Perfect", "Responsive Design"],
    link: "https://mmalabugin.ru/SaasLandingPage",
    github: "https://github.com/1t1sCooL/SaasLandingPage",
  },
  {
    id: "ping-coming-soon",
    title: "Ping Coming Soon Page",
    description:
      "Landing-страница с продвинутой валидацией форм. Реализована проверка email на корректность формата и обработка пустых полей с выводом кастомных ошибок.",
    image: "/projects/ping-coming-soon.png", // Скриншот из твоего README
    stack: ["React", "JavaScript", "Flexbox", "Semantic HTML5", "Vercel"],
    link: "https://mmalabugin.ru/PingComingSoonPage",
    github: "https://github.com/1t1sCooL/PingComingSoonPage", // Подставил твой ник из README
  },
  {
    id: "social-links-profile",
    title: "Social Links Profile",
    description:
      "Компактная визитка-профиль с адаптивной версткой. Реализована с использованием Mobile-first подхода, CSS Grid и кастомных свойств для легкого управления темой.",
    image: "/projects/social-links.png",
    stack: ["HTML5", "CSS Grid", "Flexbox", "Mobile-first", "Vercel"],
    link: "https://mmalabugin.ru/SocialLinksProfile/",
    github: "https://github.com/1t1sCooL/SocialLinksProfile",
  },
  {
    id: "2",
    title: "Modal System",
    description:
      "Универсальный компонент модального окна с плавной анимацией и поддержкой порталов. Использован условный рендеринг для оптимизации DOM.",
    image: "/projects/modal.jpg",
    stack: ["React", "SCSS", "Vite", "Hooks"],
    link: "https://your-demo-link.com",
    github: "https://github.com/your-username/modal-react",
  },
  {
    id: "3",
    title: "Counter App",
    description:
      "Визуально приятный счетчик с интуитивным интерфейсом. Проект сфокусирован на изучении управления состоянием и стилизации компонентов.",
    image: "/projects/counter.jpg",
    stack: ["React", "UseState", "SCSS", "Vite"],
    link: "https://your-demo-link.com",
    github: "https://github.com/your-username/counter",
  },
  {
    id: "4",
    title: "Сайт-портфолио",
    description:
      "Текущее портфолио: отзывчивое SPA с современной архитектурой FSD, анимациями и серверными компонентами Next.js.",
    image: "/projects/portfolio.jpg",
    stack: ["Next.js 15", "TypeScript", "FSD", "Framer Motion", "SCSS"],
    link: "#",
    github: "https://github.com/your-username/portfolio",
  },
];
