import React, { Component } from 'react';
import Radium from 'radium';
import Tabs from '../components/ui/Tabs.jsx';
import Tab from '../components/ui/Tab.jsx';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import ZeamoLogo from '../images/layout/ZeamoLogo.svg';

import Person from 'material-ui/svg-icons/social/person';
import Lock from 'material-ui/svg-icons/action/lock';

import backgroundMobile from '../images/layout/loginBgMobile.jpg';
import backgroundDesktop from '../images/layout/loginDesktopBg.jpg';

const Login = () => {
  return <div style={styles.login}>
    <div style={styles.wrapper}>
      <div style={styles.logoBox}>
        <img src={ZeamoLogo} style={styles.logo} />
      </div>

      <div style={styles.tabs}>
        <Tabs>
          <Tab label="Log in" active={true} />
          <Tab label="Sign up" active={false} />
        </Tabs>
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
              <FlatButton label="forgot password?" primary={true} style={styles.firstButton} />
              <RaisedButton label="login" primary={true} style={styles.signInButton} />
              <FlatButton label="skip" primary={true} style={styles.signInButton} />
            </div>
          </div>
      </div>
    </div>
  </div>;
};

const styles = {
  login: {
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    display: 'flex',
    backgroundImage: `url(${backgroundMobile})`,
    backgroundSize: 'cover',
    '@media (min-width: 601px)': {
      backgroundImage: `url(${backgroundDesktop})`,
    },
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: 'auto',
    height: '100%',
    '@media (min-width: 601px)': {
      width: '400px',
    },
  },
  logoBox: {
    display: 'flex',
    width: '230px',
    margin: 'auto',
    flex: '0.28',
  },
  logo: {
    width: '100%',
  },
  tabs: {
    display: 'flex',
    flex: '0.65',
    flexDirection: 'column',
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

export default Radium(Login);