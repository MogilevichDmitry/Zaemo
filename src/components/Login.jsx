import React, { Component } from 'react';
import Radium from 'radium';
import {Tabs, Tab} from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import Logo from 'material-ui/svg-icons/editor/insert-photo';
import Person from 'material-ui/svg-icons/social/person';
import Lock from 'material-ui/svg-icons/action/lock';

function Login() {

  return <div style={styles.login}>

    <div style={styles.logoWrapper}>
      <div style={styles.logo}>
        <Logo style={styles.logoIcon}/>
        <p style={styles.logoName}>zeamo</p>
      </div>
    </div>

    <Tabs style={{flex:'1'}}>
      <Tab label="Log in">
        <div style={styles.signIn}>
          <div>
            <Person style={styles.fieldIcon} />
            <TextField
              hintText="User name"
              hintStyle={styles.fieldHint}
            />
          </div>
          <div>
            <Lock style={styles.fieldIcon} />
            <TextField
              hintText="Password"
              hintStyle={styles.fieldHint}
            />
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            <FlatButton label="forgot password?" primary={true} style={styles.signInBtn} />
            <RaisedButton label="login" primary={true} style={styles.signInBtn} />
            <FlatButton label="skip" primary={true} style={styles.signInBtn} />
          </div>
        </div>
      </Tab>
      <Tab label="Sign up"></Tab>
    </Tabs>

  </div>;
}

const styles = {
  login: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: 'url(' + 'http://i.imgur.com/dWRkBkA.jpg' + ')',
    backgroundSize: 'cover',
  },
  logoWrapper: {
    display: 'flex',
    flex: '0.75',
  },
  logo: {
    display: 'flex',
    margin: 'auto',
  },
  logoIcon: {
    display: 'flex',
    margin: 'auto',
    color: '#4877f9',
  },
  logoName: {
    display: 'flex',
    color: 'white',
    fontSize: '46px',
  },
  signIn: {
    display: 'flex',
    flexDirection: 'column',
  },
  signInBtn: {
    width: '75%',
    margin: '0 auto',
  },
  fieldIcon: {
    color: '#4877f9',
  },
  fieldHint: {
    color: '#c2c3c3',
  },
};

Login = Radium(Login);
export default Login;