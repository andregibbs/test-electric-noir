import React, { useEffect, useState } from 'react';
import TvShows from './components/TVShows';
import { TvShow, TVShowWithPrices } from './types';
import tvShowsJson from './data/season-data.json';
import pricesJson from './data/season-pricing-data.json';

function App() {
  const [data, setData] = useState<TVShowWithPrices[] | null>(null);

  useEffect(() => {
    const updatedTvShows: TVShowWithPrices[] = tvShowsJson.map(
      (tvShow: TvShow) => {
        const matchingPrice = pricesJson.find(
          (item: { id: number }) => item.id === tvShow.id
        );
        return matchingPrice
          ? { ...tvShow, prices: matchingPrice.prices }
          : tvShow;
      }
    );

    setData(updatedTvShows);
  }, []);

  return (
    <div>
      <h1>TV Shows</h1>
      {data ? <TvShows data={data} /> : <p>Loading data...</p>}
    </div>
  );
}

export default App;