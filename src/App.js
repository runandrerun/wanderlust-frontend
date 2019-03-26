import React, { Component } from 'react';
import logo from './logo.svg';
import NavContainer from './containers/NavContainer.js';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Filter from './components/Filter.js';
import Map from './components/Map.js';
import DestinationsVirtualizedContainer from './containers/DestinationsVirtualizedContainer.js';
// import DestinationsWindow from './containers/DestinationsWindow.js';
// import DestinationsContainer from './containers/DestinationsContainer.js';
import './App.css';
import { theme } from './themes/materialStyling.js';
import { initSetDestinations } from './actions';
import { connect } from 'react-redux';
import jsonData from './dataset/smallCSV.json';

class App extends Component {

  componentDidMount() {
    // initSetDestinations();
  };

  render() {
    const parseData = JSON.parse(JSON.stringify(jsonData));
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
        <NavContainer />
        <Filter />
        {/* <Map destinations={parseData} /> */}
        {/*<DestinationsWindow destinations={parseData} /> */}
        <DestinationsVirtualizedContainer destinations={parseData} />
        {/* <DestinationsContainer destinations={parseData} /> */}
        </MuiThemeProvider>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  console.log('Hey', state)
  return {
    destinations: state.destinationsState.destinations,
  }
};

export default connect(mapStateToProps, { initSetDestinations })(App);
