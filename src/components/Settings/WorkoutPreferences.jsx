import React from 'react';
import Radium from 'radium';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ArrowBack from '../../../node_modules/material-ui/svg-icons/navigation/arrow-back';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox'
import { Link } from 'react-router';


const WorkoutPreferences = () => {
  return <div>
    <AppBar
      style={styles.appBar}
      title="Workout preferences"
      iconElementLeft={
        <Link to="/settings"><IconButton><ArrowBack color={'#4877f9'} /></IconButton></Link>
      }
      iconElementRight={<FlatButton label="Save" style={styles.appBarButton} />}
    />

    <div style={styles.workoutPreferences}>
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
  </div>
};

const styles = {
  appBar: {
    backgroundColor: '#162233',
  },
  appBarButton: {
    color: '#4877f9',
  },
  workoutPreferences: {
    padding: '5% 4% 3% 6%',
  },
  checkbox: {
    margin: '2.5% 0',
    fontWeight: '300',
    fontSize: '13px',
  },
  checkboxIcon: {
    fill: '#4877f9',
    marginRight: '20px',
  },
};

export default Radium(WorkoutPreferences);