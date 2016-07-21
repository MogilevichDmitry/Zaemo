import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import HomeFilter from './components/HomeFilter.jsx';

const muiTheme = getMuiTheme({
  fontFamily: 'Ubuntu, san-serif',
  palette: {
    primary1Color: '#4877f9',
    primary2Color: 'blue',
    primary3Color: 'yellow',
    accent1Color: '#4877f9',
    accent2Color: 'green',
    accent3Color: 'pink',
    textColor: 'white',
  },
  tabs: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
});

injectTapEventPlugin();

ReactDOM.render(

  <MuiThemeProvider
    muiTheme={muiTheme}
  >
    <HomeFilter />
  </MuiThemeProvider>,
  document.getElementById('app')
);

