import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

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
    <Router history={browserHistory} routes={routes()} />
  </MuiThemeProvider>,
  document.getElementById('app')
);
