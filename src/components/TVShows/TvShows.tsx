import React, { useState } from 'react';
import { Episode, TVShowWithPrices } from '../../types';

interface Props {
  data: TVShowWithPrices[];
}

const TvShows: React.FC<Props> = ({ data }) => {
  const [selectedCountry, setSelectedCountry] = useState('US');

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
  };
  const formatCurrency = (value: number) => {
    
    const countryCode = {
      US: {currencyCode : 'USD', localeCode: 'en-us'},
      FR: {currencyCode : 'EUR', localeCode: 'fr-fr'},
      CA: {currencyCode : 'CAD', localeCode: 'en-ca'},
      DE: {currencyCode : 'EUR', localeCode: 'de-de'},
      UK: {currencyCode : 'GBP', localeCode: 'en-gb'},
      AU: {currencyCode : 'AUD', localeCode: 'en-au'}
    }

    return new Intl.NumberFormat(countryCode[selectedCountry].localeCode, 
      { style: 'currency', currency: countryCode[selectedCountry].currencyCode }).format(value);
  }

  const getShowPrice = (data: any): any => formatCurrency(data?.[selectedCountry]);

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

      {data.map(({id, title, image, prices, episodes}:TVShowWithPrices ) => (
        <div key={id}>
          <img src={image} alt={title} />
          <h2>{title}</h2>
          {prices && (
            <div>
              <ul>
                <li>
                  selected price:  { getShowPrice(prices)}
                </li>
              </ul>
            </div>
          )}
          <ul>
            {episodes.map(({id, image, title}: Episode) => (
              <li key={id}>
                <img src={image} alt={title} /> 
                <h3>{title}</h3>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TvShows;