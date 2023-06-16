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
}

export interface TVShowWithPrices extends TvShow {
  prices?: Record<string, number> | null;
}
