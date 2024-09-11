export interface GithubRepo {
  name: string;
  description?: string;
  html_url?: string;
  id: string;
}

export interface Post {
  _path: string;
  title: string;
  publishedAt: string;
  displayDate: boolean;
}
