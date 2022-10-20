import type { NextApiRequest, NextApiResponse } from 'next';
import { IProject } from '../../../utils/interface';

const projects: IProject[] = [
  {
    id: 0,
    liveUrl: null,
    repoUrl: 'https://github.com/druwan/sinhalaquizapp',
    shortSummary:
      'Web application in the form of a quiz to help an user (and me 😅) to learn Sinhala.',
    stack: [
      { name: 'Chakra UI', url: 'https://chakra-ui.com/' },
      { name: 'Jest', url: 'https://jestjs.io/' },
      { name: 'NextJs', url: 'https://nextjs.org/' },
      { name: 'React', url: 'https://reactjs.org/' },
      { name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
    ],
    status: 'Incomplete',
    title: 'Sinhala Quiz App',
  },
  {
    id: 1,
    liveUrl: null,
    repoUrl: 'https://github.com/druwan/lunch-reservations',
    shortSummary:
      'An application to allow customers to select a timeslot for their takeaway meal. This will help the customers and the kitchen to better plan out their day.',
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
      { name: 'Leaflet', url: 'https://leafletjs.com/' },
      {
        name: 'Java/Spring Boot',
        url: 'https://spring.io/projects/spring-boot',
      },
      { name: 'Keycloak', url: 'https://www.keycloak.org/' },
      { name: 'PostgreSQL', url: 'https://www.postgresql.org/' },
    ],
    status: 'Complete',
    title: 'Humans vs. Zombies',
  },
  {
    id: 4,
    liveUrl: null,
    repoUrl: 'https://github.com/druwan/reddit',
    shortSummary:
      'Wanted to learn how to use an api and combine it with a discord webhook. Loop through all the saved wallpapers from a specific folder ID, that I have favorited and saves url and send a random post image to discord.',
    stack: [
      { name: 'Discord', url: 'https://discord.com/developers/docs/intro' },
      { name: 'Python', url: 'https://www.python.org/' },
      { name: 'Wallhaven Api', url: 'https://wallhaven.cc/help/api' },
    ],
    status: 'Complete',
    title: 'Reddit - My upvoted posts',
  },
  {
    id: 5,
    liveUrl: null,
    repoUrl: 'https://github.com/druwan/Wallhaven',
    shortSummary:
      'Wanted to learn how to use an api and combine it with a discord webhook. Loop through all the saved wallpapers from a specific folder ID, that I have favorited and saves url and send a random wallpaper to discord.',
    stack: [
      { name: 'Discord', url: 'https://discord.com/developers/docs/intro' },
      { name: 'Python', url: 'https://www.python.org/' },
      { name: 'Reddit Api', url: 'https://www.reddit.com/dev/api/' },
    ],
    status: 'Complete',
    title: 'Wallhaven - My saved favorites',
  },
  {
    id: 6,
    liveUrl: null,
    repoUrl: 'https://github.com/druwan/Python-file-to-folder',
    shortSummary:
      'Used while job-hunting to save job ads to pdf. Creates folders with the .pdf name of saved files and move the .pdf files into that folder. Just for some basic time saving. First python script.',
    stack: [{ name: 'Python', url: 'https://www.python.org/' }],
    status: 'Complete',
    title: 'My saved jobs',
  },
];

export default function Handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ projects: projects });
}
