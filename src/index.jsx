import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import RegisterStepOne from './components/Register/StepOne.jsx';
import RegisterStepTwo from './components/Register/StepTwo.jsx';
import RegisterStepThree from './components/Register/StepThree.jsx';

const muiTheme = getMuiTheme({
  fontFamily: 'Ubuntu, san-serif',
  palette: {
    primary1Color: '#4877f9',
    accent1Color: '#4877f9',
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
    <Home />
  </MuiThemeProvider>,
  document.getElementById('app')
);

