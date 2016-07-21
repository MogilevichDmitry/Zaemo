import React, { Component } from 'react';
import Radium from 'radium';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';

function StepOne() {
  return <div>
    <AppBar
      style={styles.appBar}
      title="Step 1 of 3"
      iconElementLeft={
        <IconButton>
          <NavigationClose color={'#4877f9'} />
        </IconButton>
      }
      iconElementRight={
        <FlatButton label="next" style={styles.appBarButton} />
      }
    />
    <div style={styles.personalInfo}>
      <div style={styles.title}>Personal Information</div>
      <TextField
        floatingLabelText="Email"
        floatingLabelFixed={true}
        fullWidth={true}
        floatingLabelStyle={styles.fieldLabel}
        underlineStyle={styles.underline}
      />
      <TextField
        floatingLabelText="Name"
        floatingLabelFixed={true}
        fullWidth={true}
        floatingLabelStyle={styles.fieldLabel}
        underlineStyle={styles.underline}
      />
      <TextField
        floatingLabelText="Password"
        type="password"
        floatingLabelFixed={true}
        fullWidth={true}
        floatingLabelStyle={styles.fieldLabel}
        underlineStyle={styles.underline}
      />
      <TextField
        floatingLabelText="Phone number"
        floatingLabelFixed={true}
        fullWidth={true}
        floatingLabelStyle={styles.fieldLabel}
        underlineStyle={styles.underline}
      />
      <div style={styles.fieldsBox}>
        <TextField
          floatingLabelText="Birthday"
          floatingLabelFixed={true}
          floatingLabelStyle={styles.fieldLabel}
          style={styles.fieldsBoxField}
          underlineStyle={styles.underline}
        />
        <SelectField
          floatingLabelText="Gender"
          floatingLabelStyle={styles.fieldLabel}
          value=' '
          iconStyle={styles.selectFieldIcon}
          style={styles.fieldsBoxField}
          underlineStyle={styles.underline}

        >
          <MenuItem primaryText="Male" />
          <MenuItem primaryText="Female" />
        </SelectField>
      </div>
      <Checkbox
        label="Receive email updates"
        style={styles.checkbox}
        iconStyle={styles.checkboxIcon}
      />
    </div>
  </div>;
}

const styles = {
  appBar: {
    backgroundColor: '#162233',
  },
  appBarButton: {
    color: '#4877f9',
  },
  title: {
    fontFamily: 'Ubuntu',
    fontSize: '18px',
    fontWeight: '500',
    color: '#4d4d4d',
    marginBottom: '6%',
  },
  personalInfo: {
    padding: '6% 4% 6% 6%',
  },
  fieldLabel: {
    color: 'rgba(153, 153, 153, 1)',
  },
  underline: {
    borderColor: 'rgba(72, 119, 249, 0.7)',
  },
  fieldsBox: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  fieldsBoxField: {
    width: '46%',
  },
  selectFieldIcon: {
    fill: '#4877f9',
  },
  checkbox: {
    borderColor: 'red',
    margin: '4% 0'
  },
  checkboxIcon: {
    fill: '#4877f9',
  },
};

export default StepOne = Radium(StepOne);
