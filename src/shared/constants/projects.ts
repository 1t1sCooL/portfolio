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
    id: "intro-signup-form",
    title: "Intro Component with Sign-up Form",
    description:
      "Адаптивная страница с формой регистрации и валидацией (обязательные поля + проверка e‑mail с понятными сообщениями об ошибках). Сделано на React + TypeScript (Vite), деплой — Vercel или Docker/Nginx.",
    image: "/projects/signup-form.png",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "CSS Modules",
      "Flexbox",
      "ESLint",
      "Prettier",
      "Stylelint",
      "Husky",
      "Docker",
      "Nginx",
      "Kubernetes",
      "Jenkins",
      "Vercel",
    ],
    link: "https://mmalabugin.ru/IntroComponentWithSignupForm/",
    github: "https://github.com/1t1sCooL/intro-component-with-signup-form",
  },
  {
    id: "base-apparel-coming-soon",
    title: "Base Apparel Coming Soon Page",
    description:
      "Целевая страница с асимметричным дизайном и фоновыми изображениями. Включает форму подписки с мгновенной валидацией email и кастомными иконками уведомления об ошибках. Построена на React, TypeScript и Vite.",
    image: "/projects/base-apparel.png",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "CSS Modules",
      "Flexbox",
      "Form Validation",
      "Docker",
      "Kubernetes",
    ],
    link: "https://mmalabugin.ru/BaseApparelComingSoon",
    github: "https://github.com/1t1sCooL/base-apparel-coming-soon",
  },
  {
    id: "huddle-intro-section",
    title: "Huddle Landing Page",
    description:
      "Лендинг с акцентом на типографику и работу с графическим контентом. Реализована сложная фоновая композиция и адаптивное распределение пространства между иллюстрацией и текстовым блоком.",
    image: "/projects/huddle-landing.png",
    stack: ["React", "CSS Grid", "Flexbox", "Custom Properties", "Vercel"],
    link: "https://mmalabugin.ru/HuddleLandingPageWithSingleIntroductorySection/",
    github:
      "https://github.com/1t1sCooL/HuddleLandingPageWithSingleIntroductorySection",
  },
  {
    id: "recipe-page",
    title: "Recipe Page",
    description:
      "Чистая и структурированная страница рецепта с акцентом на контент. Отработаны навыки семантической верстки сложных списков, стилизации таблиц пищевой ценности и адаптивной типографики для удобного чтения с любого устройства.",
    image: "/projects/recipe-page.png",
    stack: [
      "HTML5",
      "CSS Custom Properties",
      "Mobile-first",
      "Semantic Markup",
    ],
    link: "https://mmalabugin.ru/SimpleOmelleteRecipe",
    github: "https://github.com/1t1sCooL/SimpleOmelleteRecipe",
  },
  {
    id: "four-card-feature",
    title: "Four Card Feature Section",
    description:
      "Многоколонный блок преимуществ со сложной сеткой. Реализована кастомная раскладка карточек с использованием CSS Grid, где каждый элемент имеет уникальное позиционирование и акцентные цветовые границы.",
    image: "/projects/four-card.png",
    stack: ["React", "CSS Grid", "BEM", "Responsive Design", "Vercel"],
    link: "https://mmalabugin.ru/FourCardFeatureSection/",
    github: "https://github.com/1t1sCooL/FourCardFeatureSection",
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
    image: "/projects/ping-coming-soon.png",
    stack: ["React", "JavaScript", "Flexbox", "Semantic HTML5", "Vercel"],
    link: "https://mmalabugin.ru/PingComingSoonPage",
    github: "https://github.com/1t1sCooL/PingComingSoonPage",
  },
  {
    id: "article-preview",
    title: "Article Preview Component",
    description:
      "Компонент превью статьи с интерактивной панелью соцсетей. Реализована сложная логика переключения состояний Share-панели, которая адаптируется под размер экрана (tooltip на десктопе vs bottom bar на мобилках).",
    image: "/projects/article-preview.png",
    stack: ["React", "CSS Grid", "Flexbox", "UI States", "Vercel"],
    link: "https://mmalabugin.ru/ArticlePreviewComponent",
    github: "https://github.com/1t1sCooL/ArticlePreviewComponent",
  },
  {
    id: "single-price-grid",
    title: "Single Price Grid Component",
    description:
      "Адаптивный компонент тарифной сетки. Демонстрирует владение CSS Grid для создания сложных макетов, где элементы объединяются по горизонтали и вертикали, сохраняя идеальную читаемость.",
    image: "/projects/single-price.png",
    stack: ["React", "CSS Grid", "Flexbox", "Custom Properties", "Vercel"],
    link: "https://mmalabugin.ru/SinglePriceGridComponent/",
    github: "https://github.com/1t1sCooL/SinglePriceGridComponent",
  },
  {
    id: "social-proof-section",
    title: "Social Proof Section",
    description:
      "Маркетинговая секция с отзывами и рейтингом. Реализована сложная многоуровневая раскладка с каскадным смещением элементов (staggered layout) с помощью CSS Grid и Flexbox.",
    image: "/projects/social-proof.png",
    stack: ["React", "CSS Grid", "Flexbox", "Staggered Layout", "Vercel"],
    link: "https://mmalabugin.ru/SocialProofSection/",
    github: "https://github.com/1t1sCooL/SocialProofSection",
  },
  {
    id: "3-column-preview",
    title: "3-Column Preview Card",
    description:
      "Компонент выбора тарифов или категорий с четким разделением на цветовые зоны. Отработана гибкая верстка, которая трансформируется из горизонтального ряда в вертикальный список для мобильных устройств.",
    image: "/projects/3-column.png",
    stack: ["React", "CSS Grid", "Flexbox", "Semantic HTML5", "Vercel"],
    link: "https://mmalabugin.ru/3ColumnPreviewCardComponent",
    github: "https://github.com/1t1sCooL/3ColumnPreviewCardComponent",
  },
  {
    id: "profile-card",
    title: "Profile Card Component",
    description:
      "Элегантная карточка профиля со сложной фоновой композицией. В проекте отработано точное позиционирование декоративных элементов и создание адаптивного интерфейса с использованием CSS Grid для статистических данных.",
    image: "/projects/profile-card.png",
    stack: [
      "React",
      "CSS Grid",
      "Flexbox",
      "Background-Manipulation",
      "Vercel",
    ],
    link: "https://mmalabugin.ru/ProfileCardComponent/",
    github: "https://github.com/1t1sCooL/ProfileCardComponent",
  },
  {
    id: "stats-preview-card",
    title: "Stats Preview Card",
    description:
      "Карточка аналитики с продвинутой работой над изображениями. Применена техника цветового наложения (mix-blend-mode) для стилизации фото под общую палитру бренда и гибкая сетка для блока статистики.",
    image: "/projects/stats-preview.png",
    stack: ["React", "CSS Grid", "Flexbox", "Image Blending", "Vercel"],
    link: "https://mmalabugin.ru/StatsPreviewCardComponent",
    github: "https://github.com/1t1sCooL/StatsPreviewCardComponent",
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
    id: "order-summary-card",
    title: "Order Summary Component",
    description:
      "Компонент предпросмотра заказа для платежных систем. Включает в себя работу с вложенными Flex-контейнерами, стилизацию активных состояний кнопок и реализацию адаптивной карточки с мягкими тенями.",
    image: "/projects/order-summary.png",
    stack: ["React", "CSS Grid", "Flexbox", "UI/UX", "Vercel"],
    link: "https://mmalabugin.ru/OrderSummaryComponent",
    github: "https://github.com/1t1sCooL/OrderSummaryComponent",
  },
  {
    id: "nft-preview-card",
    title: "NFT Preview Card Component",
    description:
      "Стильная карточка NFT-актива с эффектом наложения при наведении. Проект демонстрирует работу с прозрачностью, кастомными иконками валют и создание многослойных интерактивных элементов на чистом CSS.",
    image: "/projects/nft-card.png",
    stack: ["React", "CSS Grid", "Flexbox", "Hover Effects", "Vercel"],
    link: "https://mmalabugin.ru/NFTPreviewCardComponent",
    github: "https://github.com/1t1sCooL/NFTPreviewCardComponent",
  },
  {
    id: "qr-code-component",
    title: "QR Code Component",
    description:
      "Лаконичный и оптимизированный компонент карточки с QR-кодом. Выполнен на Next.js с акцентом на чистоту кода, использование CSS-переменных и идеальное центрирование элементов в viewport.",
    image: "/projects/qr-code.png",
    stack: ["Next.js", "React", "Flexbox", "CSS Properties", "Vercel"],
    link: "https://mmalabugin.ru/QRCodeComponent/",
    github: "https://github.com/1t1sCooL/QRCodeComponent",
  },
  {
    id: "product-preview-card",
    title: "Product Preview Card",
    description:
      "Адаптивная карточка товара с использованием Mobile-first подхода. Реализована оптимизированная загрузка изображений под разные типы устройств и стильная типографика с акцентом на доступность.",
    image: "/projects/product-preview.png",
    stack: [
      "HTML5",
      "CSS Grid",
      "Flexbox",
      "Mobile-first",
      "Responsive Images",
    ],
    link: "https://mmalabugin.ru/ProductPreviewCardComponent/",
    github: "https://github.com/1t1sCooL/ProductPreviewCardComponent",
  },
  {
    id: "results-summary",
    title: "Results Summary Component",
    description:
      "Компонент итогов тестирования с акцентом на работу с градиентами и прозрачностью. Реализована адаптивная сетка, где левая панель плавно переходит из боковой в верхнюю, сохраняя визуальный баланс и читаемость данных.",
    image: "/projects/results-summary.png",
    stack: ["React", "CSS Grid", "Flexbox", "Gradients", "Vercel"],
    link: "https://mmalabugin.ru/ResultsSummaryComponent/",
    github: "https://github.com/1t1sCooL/ResultsSummaryComponent",
  },
  {
    id: "faq-accordion",
    title: "FAQ Accordion",
    description:
      "Интерактивный блок вопросов и ответов с фокусом на доступность. Реализовано плавное переключение контента, управление с клавиатуры и адаптивная верстка с кастомными декоративными элементами фона.",
    image: "/projects/faq-accordion.png",
    stack: [
      "HTML5",
      "CSS Custom Properties",
      "JavaScript",
      "Keyboard Navigation",
      "Vercel",
    ],
    link: "https://mmalabugin.ru/FAQAccordion/",
    github: "https://github.com/1t1sCooL/FAQAccordion",
  },
  {
    id: "interactive-rating",
    title: "Interactive Rating Component",
    description:
      "Интерактивный компонент оценки с динамической сменой состояний. Реализована обработка пользовательского выбора на чистом JS и плавный переход к экрану благодарности с отображением выбранного результата.",
    image: "/projects/interactive-rating.png",
    stack: [
      "HTML5",
      "CSS Custom Properties",
      "JavaScript",
      "DOM Manipulation",
      "Vercel",
    ],
    link: "https://mmalabugin.ru/InteractiveRatingComponent/",
    github: "https://github.com/1t1sCooL/InteractiveRatingComponent",
  },
  {
    id: "blog-preview-card",
    title: "Blog Preview Card",
    description:
      "Карточка превью статьи в стиле нео-брутализма. Отработаны навыки работы с жесткими тенями (box-shadow без размытия), кастомными шрифтами и семантической разметкой для контентных блоков.",
    image: "/projects/blog-preview.png",
    stack: ["HTML5", "CSS Grid", "Flexbox", "Mobile-first", "Vercel"],
    link: "https://mmalabugin.ru/BlogPreviewCard",
    github: "https://github.com/1t1sCooL/BlogPreviewCard",
  },
  {
    id: "kadikama-parser",
    title: "Kadikama Content Parser",
    description:
      "Автоматизированная система сбора данных на Node.js. Скрипт ежедневно сканирует ресурс, извлекает ссылки на контент и синхронизирует их с базой данных MongoDB. Процесс полностью автономен благодаря настройке Cron-задач.",
    image: "/projects/parser.jpg",
    stack: ["Node.js", "MongoDB", "Cron", "Axios", "Cheerio/Puppeteer"],
    link: "https://github.com/1t1sCooL/KadikamaParser",
    github: "https://github.com/1t1sCooL/KadikamaParser",
  },
  {
    id: "kadikama-deep-parser",
    title: "Fault-Tolerant Deep Parser",
    description:
      "Второй этап системы сбора данных: парсер глубокого сканирования. Реализована сложная архитектура с обработкой ошибок и сохранением промежуточного состояния. Система гарантирует целостность данных в MongoDB даже при сетевых сбоях.",
    image: "/projects/deep-parser.jpg",
    stack: ["Node.js", "MongoDB", "Error Handling", "Cron", "Data Integrity"],
    link: "https://github.com/1t1sCooL/KadikamaDeepParser",
    github: "https://github.com/1t1sCooL/KadikamaDeepParser",
  },
  {
    id: "kadikama-api-server",
    title: "Movies Discovery API",
    description:
      "RESTful API сервер для доступа к базе данных мультфильмов. Реализована гибкая система фильтрации, полнотекстовый поиск и эффективная пагинация через Query-параметры. Построена надежная архитектура взаимодействия с MongoDB.",
    image: "/projects/api-server.jpg",
    stack: ["Node.js", "Express", "MongoDB", "REST API", "Query Params"],
    link: "https://github.com/1t1sCooL/KadikamaAPI",
    github: "https://github.com/1t1sCooL/KadikamaAPI",
  },
  {
    id: "tg-cat-cron-bot",
    title: "Daily Cat Delivery Bot",
    description:
      "Интерактивный Telegram-бот с системой ежедневных подписок. Реализована интеграция с внешним API изображений, планировщик рассылок node-cron с учетом часовых поясов и алгоритм случайного срабатывания в групповых чатах.",
    image: "/projects/cat-bot.jpg",
    stack: [
      "Node.js",
      "Telegraf API",
      "node-cron",
      "External API",
      "Moscow Timezone",
    ],
    link: "https://github.com/1t1sCooL/TGCatCronBot",
    github: "https://github.com/1t1sCooL/TGCatCronBot",
  },
  {
    id: "tg-randomizer-bot",
    title: "Interactive Randomizer Bot",
    description:
      "Telegram-бот для генерации случайных чисел и подбрасывания монетки. Реализован сложный UX с использованием Reply и Inline кнопок, а также динамическое обновление сообщений через callback-запросы без создания новых записей в чате.",
    image: "/projects/randomizer-bot.jpg",
    stack: ["Node.js", "Telegraf API", "Inline Buttons", "Asynchronous UX"],
    link: "https://github.com/1t1sCooL/TGRandomizerBot",
    github: "https://github.com/1t1sCooL/TGRandomizerBot",
  },
  {
    id: "tg-multi-lang-hello",
    title: "Multi-language Hello Bot",
    description:
      "Telegram-бот с поддержкой интернациональных приветствий. Реализована обработка команд, текстовых паттернов и стандартный fallback-ответ для неподдерживаемых запросов. Чистый код с использованием Telegraf API.",
    image: "/projects/hello-bot.jpg",
    stack: ["Node.js", "Telegraf", "Pattern Matching", "Backend"],
    link: "https://github.com/1t1sCooL/TGHelloBot",
    github: "https://github.com/1t1sCooL/TGHelloBot",
  },
  {
    id: "tg-echo-bot-k8s",
    title: "Telegram K8s Debug Bot",
    description:
      "Технологичный Telegram-бот для отладки обновлений (updates), развернутый в кластере Kubernetes. Проект демонстрирует навыки работы с контейнеризацией Node.js приложений, управлением секретами через ENV и обработкой жизненного цикла процессов в облачной среде.",
    image: "/projects/tg-bot-k8s.jpg",
    stack: ["Node.js", "Telegraf", "Kubernetes", "Docker", "DevOps"],
    link: "https://github.com/1t1sCooL/TGBotK8s",
    github: "https://github.com/1t1sCooL/TGBotK8s",
  },
  {
    id: "react-todo-pagination",
    title: "React ToDo with Pagination",
    description:
      "Продвинутый менеджер задач с фокусом на оптимизацию производительности. Реализовано сохранение данных в LocalStorage, пагинация и глубокая оптимизация рендеринга с помощью мемоизации компонентов и функций.",
    image: "/projects/todo-list.png",
    stack: ["React", "LocalStorage", "useMemo", "React.memo", "Pagination"],
    link: "https://mmalabugin.ru/react-todo",
    github: "https://github.com/1t1sCooL/React-ToDo",
  },
  {
    id: "react-quiz",
    title: "React Quiz App",
    description:
      "Интерактивное приложение для тестирования по 4 различным темам. Использован React Router для навигации между категориями и SASS для продвинутой стилизации интерфейса. Реализована логика подсчета очков и динамическая смена экранов.",
    image: "/projects/quiz-app.png",
    stack: ["React", "Vite", "React Router", "SASS", "State Management"],
    link: "https://mmalabugin.ru/react-quiz",
    github: "https://github.com/1t1sCooL/ReactQuiz",
  },
  {
    id: "next-contact-book",
    title: "Contact Book (IndexedDB)",
    description:
      "Приложение для управления контактами на Next.js. Ключевая особенность — использование IndexedDB для надежного хранения структурированных данных на стороне клиента, что позволяет работать с базой данных внушительного объема прямо в браузере.",
    image: "/projects/contact-book.png",
    stack: ["Next.js", "TypeScript", "IndexedDB", "CRUD", "Tailwind CSS"],
    link: "https://mmalabugin.ru/ContactBook",
    github: "https://github.com/1t1sCooL/ContactBook",
  },
  {
    id: "github-repo-search",
    title: "GitHub Repo Searcher",
    description:
      "Полнофункциональное приложение для поиска репозиториев. Реализована сложная логика управления состоянием через Redux, работа с внешним API, обработка пагинации, лоадеров и сценариев пустых результатов.",
    image: "/projects/github-search.png",
    stack: ["React", "Redux Toolkit", "GitHub API", "Axios/Fetch", "Debounce"],
    link: "https://mmalabugin.ru/GithubRepoSearch",
    github: "https://github.com/1t1sCooL/GithubRepoSearch",
  },
  {
    id: "2",
    title: "Modal System",
    description:
      "Универсальный компонент модального окна с плавной анимацией и поддержкой порталов. Использован условный рендеринг для оптимизации DOM.",
    image: "/projects/modal.png",
    stack: ["React", "SCSS", "Vite", "Hooks"],
    link: "https://your-demo-link.com",
    github: "https://github.com/your-username/modal-react",
  },
  {
    id: "1",
    title: "День на Земле",
    description:
      "Интерактивная страница, вычисляющая точный возраст пользователя в днях, часах и минутах. Реализован динамический расчет данных в реальном времени.",
    image: "/projects/day-on-earth.png",
    stack: ["React", "Redux", "Vite", "CSS"],
    link: "https://your-demo-link.com",
    github: "https://github.com/your-username/day-on-earth",
  },
  {
    id: "3",
    title: "Counter App",
    description:
      "Визуально приятный счетчик с интуитивным интерфейсом. Проект сфокусирован на изучении управления состоянием и стилизации компонентов.",
    image: "/projects/counter.png",
    stack: ["React", "UseState", "SCSS", "Vite"],
    link: "https://your-demo-link.com",
    github: "https://github.com/your-username/counter",
  },
  {
    id: "4",
    title: "Сайт-портфолио",
    description:
      "Текущее портфолио: отзывчивое SPA с современной архитектурой FSD, анимациями и серверными компонентами Next.js.",
    image: "/projects/portfolio.png",
    stack: ["Next.js 15", "TypeScript", "FSD", "Framer Motion", "SCSS"],
    link: "#",
    github: "https://github.com/your-username/portfolio",
  },
];
