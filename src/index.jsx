import React from 'react';
import ReactDOM from 'react-dom';
import {StyleRoot} from 'radium';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { muiTheme } from './styles';

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider
    muiTheme={muiTheme}
  >
    <StyleRoot>
      <Router history={browserHistory} routes={routes()} />
    </StyleRoot>
  </MuiThemeProvider>,
  document.getElementById('app')
);
