export type ProjectsType = {
  id: number;
  imageUrl: string;
  liveUrl: string | null;
  repoUrl: string;
  shortSummary: string;
  stack: [
    {
      name: string;
      url: string;
    }
  ];
  status: 'Incomplete' | 'Complete';
  title: string;
};

export type SocialsType = {
  name: string;
  link: string;
};
