import React, { Component } from 'react';
import logo from './logo.svg';
import NavContainer from './containers/NavContainer.js';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import DestinationsContainer from './containers/DestinationsContainer.js';
import './App.css';
import { theme } from './themes/materialStyling.js';
import { initSetDestinations } from './actions';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
        <NavContainer destinations={this.props.destinations} />

        <DestinationsContainer destinations={this.props.destinations} />
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
