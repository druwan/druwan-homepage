export interface IProject {
  id: number;
  imageUrl: string | null;
  liveUrl: string | null;
  repoUrl: string;
  shortSummary: string;
  stack: {
    name: string;
    url: string;
  }[];

  status: 'Incomplete' | 'Complete';
  title: string;
}

export interface ISocials {
  name: string;
  link: string;
}
