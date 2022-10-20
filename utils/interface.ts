export interface IProject {
  id: number;
  liveUrl: string | null;
  repoUrl: string;
  shortSummary: string;
  stack: string[];
  title: string;
}
