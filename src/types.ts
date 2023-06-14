export interface Episode {
  id: number;
  title: string;
  image: string;
}

export interface TvShow {
  id: number;
  theme: string;
  title: string;
  image: string;
  episodes: Episode[];
  prices?: Record<string, number>;
}

export interface TvShowsData {
  tvShows: TvShow[];
}

export interface TestData {
  tvShows: TvShowsData;
}