import { NextApiRequest, NextApiResponse } from 'next';

import { socialsData } from '../../../utils/data';
import { SocialsType } from '../../../utils/types';

export default function Handler(
  _req: NextApiRequest,
  res: NextApiResponse<SocialsType[]>
) {
  res.status(200).json(socialsData);
}
