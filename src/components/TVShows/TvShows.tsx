import React, { useState } from 'react';
import { TvShowsData } from '../../types';
import { 
  ShowContainer, 
  ShowTitle, 
  ShowItem, 
  ShowPiece, 
  ShowImage, 
  PriceContainer, 
  EpisodeContainer, 
  EpisodePiece, 
  EpisodeTitle, 
  EpisodeImage } 
  from './ShowStyles';


interface Props {
  data: TvShowsData;
}

const TvShows: React.FC<Props> = ({ data }) => {
  const [selectedCountry, setSelectedCountry] = useState('US');

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
  };

  const getShowPrice = (showId: number): string | undefined => {
    const show = data.tvShows.find((tvShow) => tvShow.id === showId);
    const price = show?.prices?.[selectedCountry];
    return price ? `$${price.toFixed(2)}` : 'N/A';
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

      
      <ShowContainer>
      {data.tvShows.map((tvShow) => (
      
        <ShowItem key={tvShow.id}>
          <ShowPiece>
          <ShowImage src={tvShow.image} alt={tvShow.title} />
          <ShowTitle>{tvShow.title}</ShowTitle>
          {tvShow.prices && (
             <PriceContainer>
             <div>
                {getShowPrice(tvShow.id)}
            </div>
            </PriceContainer>
          )}
          </ShowPiece>
         <EpisodeContainer>
            {tvShow.episodes.map((episode) => (
              <EpisodePiece key={episode.id}>
                <EpisodeImage src={episode.image} alt={episode.title} />
                <EpisodeTitle>{episode.title}</EpisodeTitle>
              </EpisodePiece>
            ))}
          </EpisodeContainer>
        </ShowItem>
      ))}
    </ShowContainer>
    </div>
  );
};

export default TvShows;