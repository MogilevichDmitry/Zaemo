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
import { login } from '../styles';

const styles = login;

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

export default Radium(Login);