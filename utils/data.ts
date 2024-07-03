export const socialsData = [
  {
    name: 'GitHub',
    link: 'https://github.com/druwan/',
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/christophervestman/',
  },
];

export const projectsData = [
  {
    id: 0,
    imageUrl: '/images/sinhala-quiz-app.webp',
    liveUrl: 'https://sinhalaquizapp.vercel.app/',
    repoUrl: 'https://github.com/druwan/sinhalaquizapp',
    shortSummary:
      'Simple web application in the form of a quiz to help an user (and me 😅) to learn Sinhala. It consists of different categories from which an user can select. The user then gets 5 different questions that needs to be answered. The user is informed both of how many questions are answered, and the current score by a simple progressbar.',
    stack: [
      { name: 'Chakra UI', url: 'https://chakra-ui.com/' },
      { name: 'Jest', url: 'https://jestjs.io/' },
      { name: 'NextJs', url: 'https://nextjs.org/' },
      { name: 'React', url: 'https://reactjs.org/' },
      { name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
    ],
    status: 'Complete',
    title: 'Sinhala Quiz App',
  },
  {
    id: 1,
    imageUrl: '/images/lunch-reservations.webp',
    liveUrl: null,
    repoUrl: 'https://github.com/druwan/lunch-reservations',
    shortSummary:
      'An application to allow customers to order Sri Lankan food and select a timeslot for their takeaway meal. This will help the customers and the kitchen to better plan out their day. Users who which to join their site (with OAuth2) will be able to see their order history.',
    stack: [
      { name: 'Auth0', url: 'https://auth0.com/' },
      { name: 'Chakra UI', url: 'https://chakra-ui.com/' },
      { name: 'Express', url: 'https://expressjs.com/' },
      { name: 'MongoDB', url: 'https://www.mongodb.com/' },
      { name: 'React', url: 'https://reactjs.org/' },
    ],
    status: 'Incomplete',
    title: 'Lunch Reservations',
  },
  {
    id: 2,
    imageUrl: '/images/tretton37.webp',
    liveUrl: 'https://cv-tretton37.herokuapp.com/',
    repoUrl: 'https://github.com/druwan/tretton37',
    shortSummary:
      'Code assignment to create a site to display all of the tretton37-colleagues according to some selected user stories.',
    stack: [
      { name: 'Cypress', url: 'https://www.cypress.io/' },
      { name: 'Jest', url: 'https://jestjs.io/' },
      { name: 'React', url: 'https://reactjs.org/' },
      { name: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
      { name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
    ],
    status: 'Complete',
    title: '_The Fellowship of 1337',
  },
  {
    id: 3,
    imageUrl: '/images/humans-vs-zombies.webp',
    liveUrl: 'https://se-java-hvz-frontend.netlify.app/',
    repoUrl: 'https://gitlab.com/druwan/se-java-hvz-frontend',
    shortSummary:
      'This group project is about creating a full stack application for the tag-like game Human vs Zombies. We were tasked with designing and implementing a system that will enable players to manage their own state in accordance with the rules of the game and leave the administrators free to focus on improving the game itself. I was responsible for the frontend.',
    stack: [
      { name: 'Angular', url: 'https://angular.io/' },
      { name: 'Bootstrap', url: 'https://getbootstrap.com/' },
      { name: 'Docker', url: 'https://www.docker.com/' },
      { name: 'Faker', url: 'https://fakerjs.dev/' },
      { name: 'Hibernate', url: 'https://hibernate.org/' },
      { name: 'Java', url: 'https://www.java.com/en/' },
      { name: 'Keycloak', url: 'https://www.keycloak.org/' },
      { name: 'Leaflet', url: 'https://leafletjs.com/' },
      { name: 'PostgreSQL', url: 'https://www.postgresql.org/' },
      { name: 'Spring Boot', url: 'https://spring.io/projects/spring-boot' },
    ],
    status: 'Complete',
    title: 'Humans vs. Zombies',
  },
];
