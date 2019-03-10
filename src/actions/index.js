import { fetchDestinations } from '../adapters/destinationsAdapter';

export const initSetDestinations = () => {
  return (dispatch) => {
    fetchDestinations()
      .then(destinations => {
        console.log(destinations)
        dispatch(setDestinations(destinations))
      });
  };
};


const setDestinations = (destinations) => {
  return {
    type: 'SET_DESTINATIONS',
    payload: {
      destinations
    }
  }
};
