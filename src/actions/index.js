import { fetchDestinations } from '../adapters/destinationsAdapter';

export const initSetDestinations = () => {
  return (dispatch) => {
    return fetchDestinations()
      .then(destinations => {
        console.log(destinations)
        return dispatch(setDestinations(destinations))
      });
  };
};


export const setDestinations = (destinations) => {
  return {
    type: 'SET_DESTINATIONS',
    payload: {
      destinations
    }
  }
};
