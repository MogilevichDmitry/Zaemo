import React, { Component } from 'react';
import Radium from 'radium';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';

import NavigationClose from 'material-ui/svg-icons/navigation/close';

const StepThree = () => {
  return <div style={styles.stepThree}>

    <AppBar
      style={styles.appBar}
      title="Step 3 of 3"
      iconElementLeft={<IconButton><NavigationClose color={'#4877f9'} /></IconButton>}
    />

    <div style={styles.conditions}>
      <div style={styles.title}>Terms and conditions</div>
      <div style={styles.description}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        Aenean commodo ligula eget dolor. Aenean massa.
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
        Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
        In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
        Integer tincidunt. Cras dapibu
      </div>

      <Checkbox
        label="I read and accept the terms & conditions"
        style={styles.checkbox}
        iconStyle={styles.checkboxIcon}
      />
    </div>

    <RaisedButton
      label="confirm"
      primary={true}
      style={styles.button}
    />
  </div>;
};

const styles = {
  stepThree: {
    display: 'flex',
    flexDirection: 'column',
  },
  appBar: {
    backgroundColor: '#162233',
  },
  appBarButton: {
    color: '#4877f9',
  },
  title: {
    fontFamily: 'Ubuntu',
    fontSize: '17px',
    fontWeight: '500',
    color: '#4d4d4d',
    marginBottom: '25px',
  },
  conditions: {
    padding: '12% 4% 4% 6%',
  },
  description: {
    fontFamily: 'Ubuntu',
    color: '#999999',
    fontSize: '14px',
    marginBottom: '12%',
  },
  checkbox: {
    fontSize: '14px',
  },
  checkboxIcon: {
    fill: '#4877f9',
  },
  button: {
    width: '100%',
    position: 'absolute',
    bottom: '0',
  },
};

export default Radium(StepThree);
