const initialState = {
  destinations: [],
};

const destinationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_DESTINATIONS':
    return {
      ...state,
      destinations: action.payload.destinations
    }

    default:
    return state
  }
};

export default destinationsReducer;
