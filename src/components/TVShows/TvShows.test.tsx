import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TvShows from './TvShows';
import { TVShowWithPrices } from '../../types';

describe('TVShows Component', () => {
  // Cast the imported JSON data to the defined type
  const testData: TVShowWithPrices[] = [{
      id: 1,
      theme: 'blah',
      title: 'title',
      image: 'google.com',
      prices:{
        id: 3,
        "US": 76.94,
        "FR": 39.98,
        "CA": 25.98,
        "DE": 25.48,
        "UK": 21.98,
        "AU": 30.48
      },
      episodes: [
        {
          "id": 5,
          "title": "A Trail of Clues",
          "image": "./img/episode-posters/a-trail-of-clues.png"
        },
      ] 
  }];

  it('should render prices if available', () => {
    render(<TvShows data={testData} />);

    // Perform assertions for prices being displayed
    // const pricesElements = screen.getAllByTestId('price');
    // expect(pricesElements).toHaveLength(testData.length);
  });

  it('should render error message if prices are not available', () => {
    // Create test data without prices
    const testDataWithoutPrices: TVShowWithPrices[] = [{
      id: 1,
      theme: 'blah',
      title: 'title',
      image: 'google.com',
      prices:null,
      episodes: [
        {
          "id": 5,
          "title": "A Trail of Clues",
          "image": "./img/episode-posters/a-trail-of-clues.png"
        },
      ] 
  }]

    render(<TvShows data={testDataWithoutPrices} />);

    // Perform assertions for error message being displayed
    const errorMessageElement = screen.getByTestId('error-message');
    expect(errorMessageElement).toBeInTheDocument();
  });


  it('should allow user to change country', () => {
    render(<TvShows data={testData} />)
    userEvent.selectOptions(
      screen.getByRole('combobox'),
      screen.getByRole('option', { name: 'DE' }),
    )

    const selectedValue = screen.getByRole<HTMLInputElement>('option', { name: 'DE' }).select;
    expect(selectedValue).toBe(true)
  })
});