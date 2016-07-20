import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

injectTapEventPlugin();

function Root() {
  return <div>Hello World123</div>;
}

ReactDOM.render(

  <MuiThemeProvider
    muiTheme={getMuiTheme({
      fontFamily: 'Ubuntu, san-serif',
    })}
  >
    <AppBar title="My AppBar" />
  </MuiThemeProvider>,
  document.getElementById('app')
);


