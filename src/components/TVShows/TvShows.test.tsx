import { render, screen } from '@testing-library/react';
import TvShows from './TvShows';
import { TestData, TvShow, TvShowsData } from '../../types';
import tvShowsJson from '../../data/season-data.json';

describe('TVShows Component', () => {
  // Cast the imported JSON data to the defined type
  const testData: TvShowsData = {
    tvShows: tvShowsJson.map((tvShow: any) => ({
      id: tvShow.id,
      theme: tvShow.theme,
      title: tvShow.title,
      image: tvShow.image,
      episodes: tvShow.episodes.map((episode: any) => ({
        id: episode.id,
        title: episode.title,
        image: episode.image,
      })),
    })),
  };

  it('should render prices if available', () => {
    render(<TvShows data={testData} />);

    // Perform assertions for prices being displayed
    const pricesElements = screen.getAllByTestId('price');
    expect(pricesElements).toHaveLength(testData.tvShows.length);
  });

  it('should render error message if prices are not available', () => {
    // Create test data without prices
    const testDataWithoutPrices: TvShowsData = {
      tvShows: testData.tvShows.map((show: TvShow) => ({
        ...show,
        prices: undefined,
      })),
    };

    render(<TvShows data={testDataWithoutPrices} />);

    // Perform assertions for error message being displayed
    const errorMessageElement = screen.getByTestId('error-message');
    expect(errorMessageElement).toBeInTheDocument();
  });
});


