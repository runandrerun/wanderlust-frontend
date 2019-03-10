import React, { Component } from 'react';
import logo from './logo.svg';
import NavContainer from './containers/NavContainer.js';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import './App.css';
import './themes/materialStyling.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
        <NavContainer />
        // <SubtitleSection />
        // <LocationsGrid locations={this.state.locations} />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
