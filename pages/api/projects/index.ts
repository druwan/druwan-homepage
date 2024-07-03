import { NextApiRequest, NextApiResponse } from 'next';

import { projectsData } from '../../../utils/data';
import { ProjectsType } from '../../../utils/types';

export default function Handler(
  _req: NextApiRequest,
  res: NextApiResponse<ProjectsType[]>
) {
  res.status(200).json(projectsData);
}
