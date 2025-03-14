import { opply, burdaforward, ierp, freelance } from '../assets/images';
import {
  css,
  git,
  github,
  html,
  javascript,
  linkedin,
  react,
  vue,
  sass,
  tailwindcss,
  typescript,
  jest,
  agile,
  storybook,
  flutter,
  contact,
  portfolio,
  food,
  movie,
  invoice,
  monstr,
  business,
  pizzeria,
} from '../assets/icons';

export const skills = [
  {
    imageUrl: css,
    name: 'CSS',
    type: 'Frontend',
  },
  {
    imageUrl: git,
    name: 'Git',
    type: 'Version Control',
  },
  {
    imageUrl: github,
    name: 'GitHub',
    type: 'Version Control',
  },
  {
    imageUrl: html,
    name: 'HTML',
    type: 'Frontend',
  },
  {
    imageUrl: javascript,
    name: 'JavaScript',
    type: 'Frontend',
  },
  {
    imageUrl: vue,
    name: 'Vue',
    type: 'Frontend',
  },
  {
    imageUrl: flutter,
    name: 'Flutter',
    type: 'Frontend',
  },
  {
    imageUrl: react,
    name: 'React',
    type: 'Frontend',
  },
  {
    imageUrl: sass,
    name: 'Sass',
    type: 'Frontend',
  },
  {
    imageUrl: tailwindcss,
    name: 'Tailwind CSS',
    type: 'Frontend',
  },
  {
    imageUrl: typescript,
    name: 'TypeScript',
    type: 'Frontend',
  },
  {
    imageUrl: storybook,
    name: 'Storybook',
    type: 'Frontend',
  },
  {
    imageUrl: jest,
    name: 'Jest',
    type: 'Testing',
  },
  {
    imageUrl: agile,
    name: 'Agile',
    type: 'Methodology',
  },
];

export const experiences = [
  {
    title: 'Frontend Enginner',
    company_name: 'Opply',
    icon: opply,
    iconBg: '#8139FE',
    date: 'Dec 2023 - Dec 2024',
    points: [
      'Developed scalable, responsive apps using Vue 3, TypeScript, and styled with TailwindCSS, SASS, and BEM for maintainability.',
      'Worked with REST APIs on the frontend, making calls using Axios and utilizing Swagger for interactive API testing and debugging.',
      'Built and maintained reusable components in Storybook, collaborating via Zeplin.',
      'Worked as a product-developer in cross-functional teams, designing and implementing features.',
      'Participated in code reviews using GitHub, debugged effectively with Sentry, and collaborated seamlessly within SCRUM teams.',
      'Wrote unit tests with Jest and maintained thorough documentation.',
    ],
  },
  {
    title: 'Full-Stack Developer',
    company_name: 'BurdaForward',
    icon: burdaforward,
    iconBg: '#F29200',
    date: 'June 2022 - Sept 2023',
    points: [
      'Maintained Bunte.de website and built Moments (web & mobile app) from scratch, handling the entire end-to-end product development using Vue, TypeScript, and Flutter (Dart).',
      'Assisted with UX/UI by helping create mock-ups, prototypes using Figma, and participating in design sprints.',
      'Collaborated on backend development with Node.js and MongoDB, ensuring smooth data handling and integration.',
      'Worked with REST APIs on the frontend, making calls using Axios and utilizing Postman for thorough API testing and debugging.',
      'Conducted thorough unit testing & manual testing for both web and app with each new release.',
      'Participated in code reviews and collaborated with the team using Bitbucket and SCRUM.',
    ],
  },
  {
    title: 'Junior Frontend Developer',
    company_name: 'ierp.ai',
    icon: ierp,
    iconBg: '#861759',
    date: 'Dec 2021 - Jun 2022',
    points: [
      'Developed the user interface as part of the frontend team using React.js, TypeScript, and Ant Design for a clean and responsive design.',
      'Integrated GraphQL with Apollo Client to efficiently query and display data on the frontend.',
      'Collaborated within an Agile (Kanban) environment, participating in daily standups and ensuring efficient task completion.',
      'Worked closely with backend teams to ensure smooth data flow and integration between GraphQL and frontend components.',
      'Contributed to project management by helping track tasks and issues through GitHub for smooth collaboration.',
      'Embraced pair programming to improve code quality and knowledge sharing with senior team members.',
    ],
  },
  {
    title: 'Founder | SEO-Copywriter | WordPress Developer',
    company_name: 'freelance',
    icon: freelance,
    iconBg: '#ffff00',
    date: 'March 2018 - Oct 2021',
    points: [
      'Built and managed 70+ niche websites, implementing SEO-driven strategies to generate organic traffic and revenue.',
      'Authored and optimized 1,000+ articles, ensuring high-quality, structured, and conversion-focused content.',
      'Led a small team (3-5 people), overseeing content creation, SEO, and website development.',
      'Led a small team of copywriters, providing guidance and ensuring high-quality, customer-focused content production.',
      'Specialized in affiliate marketing, leveraging keyword research, on-page SEO, and conversion optimization to maximize earnings.',
      'Analyzed and optimized website performance using Google Analytics, Search Console, Ahrefs, Hotjar, and heatmaps to improve user experience and conversions.',
      'Developed WordPress-based websites with a focus on speed, responsiveness, and user-friendly design. ',
      'Applied data-driven decision-making and growth strategies, balancing speed, quality, and audience engagement.',
    ],
  },
];

export const socialLinks = [
  {
    name: 'Contact',
    iconUrl: contact,
    link: '/contact',
  },
  {
    name: 'GitHub',
    iconUrl: github,
    link: 'https://github.com/Elisa-cf',
  },
  {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/elisa-canyelles/',
  },
];

export const projects = [
  {
    iconUrl: portfolio,
    theme: 'btn-back-red',
    name: '3D Portfolio',
    description:
      'My portfolio website, built with React.js, Three.js, EmailJS, React Vertical Timeline Component, and TailwindCSS, showcases my skills and projects in a visually engaging way. Bringing ideas to life with interactive design! 🌟',
    link: 'https://github.com/Elisa-cf/3d-portfolio-react',
  },
  {
    iconUrl: food,
    theme: 'btn-back-green',
    name: 'Food Supply Platform',
    description:
      'Created a full-stack supply platform connecting consumer goods brands with food & beverage suppliers. Frontend in Vue 3, backend with Node, Express, and SQL, featuring token-based authentication for registration, login, and supplier/quote exploration with pagination. 🚀',
    link: 'https://github.com/Elisa-cf/full-stack-food-supply-platform',
  },
  {
    iconUrl: movie,
    theme: 'btn-back-blue',
    name: 'Film Hero',
    description:
      'Built a React.js web app that helps users find streaming, rental, or purchase options for films and TV shows based on their country with a carousel of popular movies on the home page. It also suggests similar movies when viewing details of a specific film. 📺',
    link: 'https://github.com/Elisa-cf/BTE-film-project',
  },
  {
    iconUrl: invoice,
    theme: 'btn-back-pink',
    name: 'Invoice Management App',
    description:
      'Developed a Vue.js Invoice Management website with a 3-step wizard form for easy data input and Firebase authentication for secure login. Users can create, preview, and filter invoices based on payment status, ensuring a seamless invoicing experience. 💼',
    link: 'https://github.com/Elisa-cf/invoice-app',
  },
  {
    iconUrl: monstr,
    theme: 'btn-back-black',
    name: 'Monstr: Monstruously Tinder!',
    description:
      'A Tinder for Monsters, built with Vue.js, featuring a search bar, category filters, sorting, and a favorites system to add or remove monsters. Find your perfect match, and build your ultimate monster lineup. Because even monsters need love! 🧛‍♂️❤️',
    link: 'https://github.com/Elisa-cf/monstr',
  },
  {
    iconUrl: pizzeria,
    theme: 'btn-back-yellow',
    name: 'Pizzeria Restaurant Website',
    description:
      'Created a pizzeria restaurant web using React.js with a contact page that includes Google Maps implementation, menu page with filters and interactive buttons, newsLetter subscription with Formspree, among others. 🍕',
    link: 'https://github.com/Elisa-cf/pizzeria-grande/tree/main',
  },
  {
    iconUrl: business,
    theme: 'btn-back-red',
    name: 'Founder, SEO-Copywriter & WordPress Developer',
    description:
      'I ran my own business, building and monetizing 70+ niche websites, authoring 1,000+ articles, and leading a team to drive SEO and revenue growth. I optimized performance using tools like Google Analytics and Ahrefs, focusing on speed, responsiveness, and user experience through WordPress. Feel free to contact me and check out my work in this field. 👩‍💻',
    link: '/contact',
  },
];
