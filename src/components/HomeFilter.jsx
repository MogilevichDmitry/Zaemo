import React, { Component } from 'react';
import Radium from 'radium';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import { Tabs, Tab } from 'material-ui/Tabs';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { homeFilter } from '../styles';

const styles = homeFilter;

const HomeFilter = () => {
  return <div>
    <AppBar
      style={styles.appBar}
      title="Filter gyms"
      iconElementLeft={
        <IconButton>
          <NavigationClose color={'#4877f9'} />
        </IconButton>
      }
      iconElementRight={<FlatButton label="Apply" style={styles.appBarButton} />}
    />

    <div style={styles.filter}>
      <div style={styles.filterMain}>
        <div>
          <div style={styles.title}>Price</div>

          <RadioButtonGroup
            name="cost"
            defaultSelected="not_checked"
            style={styles.radioButtons}
          >
            <RadioButton
              label="Under $25"
              value="4"
              style={styles.radioButton}
              iconStyle={styles.radioIcon}
            />
            <RadioButton
              label="$25 to $50"
              value="3"
              style={styles.radioButton}
              iconStyle={styles.radioIcon}
            />
            <RadioButton
              label="$50 to $100"
              value="11"
              style={styles.radioButton}
              iconStyle={styles.radioIcon}
            />
            <RadioButton
              label="$100 to $200"
              value="2"
              style={styles.radioButton}
              iconStyle={styles.radioIcon}
            />
            <RadioButton
              label="$200 & above"
              value="1"
              style={styles.radioButton}
              iconStyle={styles.radioIcon}
            />
          </RadioButtonGroup>
        </div>

        <div>
          <div style={styles.areaTitle}>Area</div>

          <div style={styles.area}>
            <SelectField
              floatingLabelText="Search radius"
              floatingLabelFixed={true}
              floatingLabelStyle={styles.fieldLabel}
              underlineStyle={styles.underline}
              iconStyle={styles.selectFieldIcon}
              style={styles.areaRadius}
            >
              <MenuItem primaryText="3 miles" />
              <MenuItem primaryText="5 miles" />
              <MenuItem primaryText="8 miles" />
              <MenuItem primaryText="6 miles" />
              <MenuItem primaryText="9 miles" />
              <MenuItem primaryText="11 miles" />
            </SelectField>

            <div style={styles.address}>
              <TextField
                floatingLabelText="Zipcode"
                floatingLabelFixed={true}
                floatingLabelStyle={styles.fieldLabel}
                underlineStyle={styles.underline}
                style={styles.areaZipcode}
              />
              <SelectField
                floatingLabelText="State"
                floatingLabelFixed={true}
                floatingLabelStyle={styles.fieldLabel}
                underlineStyle={styles.underline}
                iconStyle={styles.selectFieldIcon}
                style={styles.areaState}
              >
                <MenuItem primaryText="CO" />
                <MenuItem primaryText="FL" />
                <MenuItem primaryText="HI" />
                <MenuItem primaryText="WY" />
                <MenuItem primaryText="CA" />
              </SelectField>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.filterExtra}>
        <Tabs>
          <Tab label="Activities" style={styles.tabTitle}>
            <div>
              <div style={styles.checkboxGroup}>
                <Checkbox
                  label="Gym"
                  style={styles.checkbox}
                  iconStyle={styles.checkboxIcon}
                />
                <Checkbox
                  label="Swimming"
                  style={styles.checkbox}
                  iconStyle={styles.checkboxIcon}
                />
                <Checkbox
                  label="Yoga"
                  style={styles.checkbox}
                  iconStyle={styles.checkboxIcon}
                />
                <Checkbox
                  label="Spinning"
                  style={styles.checkbox}
                  iconStyle={styles.checkboxIcon}
                />
                <Checkbox
                  label="Kickboxing"
                  style={styles.checkbox}
                  iconStyle={styles.checkboxIcon}
                />
                <Checkbox
                  label="Boot Camp"
                  style={styles.checkbox}
                  iconStyle={styles.checkboxIcon}
                />
                <Checkbox
                  label="Dancing"
                  style={styles.checkbox}
                  iconStyle={styles.checkboxIcon}
                />
                <Checkbox
                  label="Pilates"
                  style={styles.checkbox}
                  iconStyle={styles.checkboxIcon}
                />
                <Checkbox
                  label="Fencing"
                  style={styles.checkbox}
                  iconStyle={styles.checkboxIcon}
                />
                <Checkbox
                  label="Squash"
                  style={styles.checkbox}
                  iconStyle={styles.checkboxIcon}
                />
                <Checkbox
                  label="Zumba"
                  style={styles.checkbox}
                  iconStyle={styles.checkboxIcon}
                />
                <Checkbox
                  label="Physiotherapy"
                  style={styles.checkbox}
                  iconStyle={styles.checkboxIcon}
                />
                <Checkbox
                  label="Barre"
                  style={styles.checkbox}
                  iconStyle={styles.checkboxIcon}
                />
                <Checkbox
                  label="Rock Climbng"
                  style={styles.checkbox}
                  iconStyle={styles.checkboxIcon}
                />
                <Checkbox
                  label="Tennis"
                  style={styles.checkbox}
                  iconStyle={styles.checkboxIcon}
                />
                <Checkbox
                  label="Personal Training"
                  style={styles.checkbox}
                  iconStyle={styles.checkboxIcon}
                />
                <Checkbox
                  label="Cycling"
                  style={styles.checkbox}
                  iconStyle={styles.checkboxIcon}
                />
                <Checkbox
                  label="Martial Arts"
                  style={styles.checkbox}
                  iconStyle={styles.checkboxIcon}
                />
                <Checkbox
                  label="Basketball"
                  style={styles.checkbox}
                  iconStyle={styles.checkboxIcon}
                />
                <Checkbox
                  label="Soccer"
                  style={styles.checkbox}
                  iconStyle={styles.checkboxIcon}
                />
              </div>
              <FlatButton style={styles.button} label="Clear All" primary={true} />
            </div>
          </Tab>
          <Tab label="Amenities" style={styles.tabTitle}></Tab>
        </Tabs>
      </div>
    </div>
  </div>;
};

export default Radium(HomeFilter);
