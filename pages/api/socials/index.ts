import { NextApiRequest, NextApiResponse } from 'next';
import { ISocials } from '../../../utils/interface';

const socials: ISocials[] = [
  {
    name: 'GitHub',
    link: 'https://github.com/druwan/',
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/christophervestman/',
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/christophervestman/',
  },
  {
    name: 'Twitch',
    link: 'https://www.twitch.tv/druwan',
  },
];

export default function Handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ socials: socials });
}
