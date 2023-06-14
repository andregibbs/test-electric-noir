import React, { useState } from 'react';
import { TvShowsData } from '../../types';

interface Props {
  data: TvShowsData;
}

const TvShows: React.FC<Props> = ({ data }) => {
  const [selectedCountry, setSelectedCountry] = useState('US');

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
  };

  const getShowPrice = (showId: number): number | undefined => {
    const show = data.tvShows.find((tvShow) => tvShow.id === showId);
    return show?.prices?.[selectedCountry];
  };

  return (
    <div>
      <div>
        <label htmlFor="country">Select Country:</label>
        <select id="country" value={selectedCountry} onChange={handleCountryChange}>
          <option value="US">US</option>
          <option value="FR">FR</option>
          <option value="CA">CA</option>
          <option value="DE">DE</option>
          <option value="UK">UK</option>
          <option value="AU">AU</option>
        </select>
      </div>

      {data.tvShows.map((tvShow) => (
        <div key={tvShow.id}>
          <img src={tvShow.image} alt={tvShow.title} />
          <h2>{tvShow.title}</h2>
          {tvShow.prices && (
            <div>
              <ul>
                <li>
                  {selectedCountry}: {getShowPrice(tvShow.id)}
                </li>
              </ul>
            </div>
          )}
          <ul>
            {tvShow.episodes.map((episode) => (
              <li key={episode.id}>
                <img src={episode.image} alt={episode.title} /> 
                <h3>{episode.title}</h3>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TvShows;