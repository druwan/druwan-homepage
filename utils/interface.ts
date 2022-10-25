export interface IProject {
  id: number;
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
