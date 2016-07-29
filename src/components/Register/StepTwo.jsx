import React, { Component } from 'react';
import Radium from 'radium';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';

import { registerStepTwo } from '../../styles';

const styles = registerStepTwo;

const StepTwo = () => {
  return <div>
    <AppBar
      style={styles.appBar}
      title="Step 2 of 3"
      iconElementLeft={<IconButton><ArrowBack color={'#4877f9'} /></IconButton>}
      iconElementRight={<FlatButton label="skip" style={styles.appBarButton} />}
    />

    <div style={styles.workoutPreferences}>
      <div style={styles.title}>Workout Preferences</div>
      <div style={styles.description}>
        We’ll recommend gyms based on your workout preferences.
      </div>

      <Checkbox label="Gym" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
      <Checkbox label="Swimming" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
      <Checkbox label="Yoga" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
      <Checkbox label="Spinning" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
      <Checkbox label="Kickboxing" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
      <Checkbox label="Boom Camp" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
      <Checkbox label="Pilates" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
      <Checkbox label="Fencing" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
      <Checkbox label="Squash" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
      <Checkbox label="Zumba" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
      <Checkbox label="Physiotherapy" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
      <Checkbox label="Barre" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
      <Checkbox label="Dancing" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
      <Checkbox label="Rock Climbing" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
      <Checkbox label="Tennis" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
      <Checkbox label="Personal Training" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
      <Checkbox label="Cycling" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
      <Checkbox label="Martial Arts" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
      <Checkbox label="Basketball" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
      <Checkbox label="Soccer" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
    </div>
    <RaisedButton
      label="save"
      primary={true}
      style={styles.button}
    />
  </div>;
};

export default Radium(StepTwo);
