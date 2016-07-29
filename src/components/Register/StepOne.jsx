import React, { Component } from 'react';
import Radium from 'radium';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { registerStepOne } from '../../styles';

const styles = registerStepOne;

const StepOne = () => {
  return <div>
    <AppBar
      style={styles.appBar}
      title="Step 1 of 3"
      iconElementLeft={<IconButton><NavigationClose color={'#4877f9'} /></IconButton>}
      iconElementRight={<FlatButton label="next" style={styles.appBarButton} />}
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
};

export default Radium(StepOne);
