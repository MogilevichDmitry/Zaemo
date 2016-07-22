import React, { Component } from 'react';
import Radium from 'radium';
import {Tabs, Tab} from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import Logo from 'material-ui/svg-icons/editor/insert-photo';
import Person from 'material-ui/svg-icons/social/person';
import Lock from 'material-ui/svg-icons/action/lock';

import background from '../images/layout/loginBg.jpg';

function Login() {
  return <div style={styles.login}>

    <div style={styles.logoWrapper}>
      <div style={styles.logo}>
        <Logo style={styles.logoIcon}/>
        <p style={styles.logoName}>zeamo</p>
      </div>
    </div>

    <Tabs style={styles.tabs}>
      <Tab label="Log in">
        <div style={styles.signIn}>
          <div style={styles.field}>
            <Person style={styles.fieldIcon} />
            <TextField
              hintText="User name"
              fullWidth={true}
              hintStyle={styles.fieldHint}
              inputStyle={styles.fieldInput}
            />
          </div>
          <div style={styles.field}>
            <Lock style={styles.fieldIcon} />
            <TextField
              type="password"
              hintText="Password"
              fullWidth={true}
              hintStyle={styles.fieldHint}
              inputStyle={styles.fieldInput}
            />
          </div>
          <div style={styles.signInButtons}>
            <FlatButton
              label="forgot password?"
              primary={true}
              style={styles.firstButton}
            />
            <RaisedButton
              label="login"
              primary={true}
              style={styles.signInButton}
            />
            <FlatButton
              label="skip"
              primary={true}
              style={styles.signInButton}
            />
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
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
  },
  logoWrapper: {
    display: 'flex',
    flex: '0.8',
  },
  logo: {
    display: 'flex',
    margin: 'auto',
  },
  logoIcon: {
    display: 'flex',
    margin: 'auto',
    width: '36px',
    height: '36px',
    marginRight: '3.8%',
    color: '#4877f9',
  },
  logoName: {
    display: 'flex',
    color: 'white',
    fontSize: '40px',
    fontFamily: 'Ubuntu',
  },
  tabs: {
    display: 'flex',
    flex: '1.2',
    flexDirection: 'column',
    padding: '0 4% 0',
  },
  signInButtons: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
    justifyContent: 'space-between',
  },
  signInButton: {
    width: '75%',
    margin: '0 auto 3%',
  },
  firstButton: {
    width: '75%',
    margin: '0 auto 5%',
  },
  field: {
    display: 'flex',
    marginTop: '7%',
  },
  fieldIcon: {
    color: '#4877f9',
    margin: 'auto 9% auto 0',
  },
  fieldInput: {
    color: 'white',
  },
  fieldHint: {
    color: '#c2c3c3',
  },
};

export default Login = Radium(Login);