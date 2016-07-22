import React, { Component } from 'react';
import Radium from 'radium';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {Tabs, Tab} from 'material-ui/Tabs';
import Checkbox from 'material-ui/Checkbox';

function HomeFilter() {
  return  <div>
    <AppBar
      title={"Filter gyms"}
      iconElementLeft={<IconButton><NavigationClose /></IconButton>}
      iconElementRight={<FlatButton label="Apply" />}
    />
    
    <div style={styles.contentWrapper}>
      <TextField
        floatingLabelText="Gym name"
        floatingLabelFixed={true}
        fullWidth={true}
      />

      <SelectField
        floatingLabelText="Search radius"
        floatingLabelFixed={true}
        hintText="8 miles"
      >
        <MenuItem primaryText="5 miles" />
        <MenuItem primaryText="3 miles" />
        <MenuItem primaryText="6 miles" />
        <MenuItem primaryText="9 miles" />
        <MenuItem primaryText="11 miles" />
      </SelectField>

      <div>
        <TextField
          floatingLabelText="Zipcode"
          floatingLabelFixed={true}
        />
        <SelectField
          floatingLabelText="State"
          floatingLabelFixed={true}
          hintText="CA"
        >
          <MenuItem primaryText="CO" />
          <MenuItem primaryText="FL" />
          <MenuItem primaryText="HI" />
          <MenuItem primaryText="WY" />
          <MenuItem primaryText="ME" />
        </SelectField>
      </div>

      <div>
        <Tabs style={styles.tabs}>
          <Tab label="Activities">
            <div>
              <di>
                <Checkbox label="Gym" />
                <Checkbox label="Swimming" />
                <Checkbox label="Yoga" />
                <Checkbox label="Spinning" />
                <Checkbox label="Kickboxing" />
                <Checkbox label="Boot Camp" />
                <Checkbox label="Dancing" />
                <Checkbox label="Pilates" />
                <Checkbox label="Fencing" />
                <Checkbox label="Squash" />
                <Checkbox label="Zumba" />
                <Checkbox label="Physiotherapy" />
                <Checkbox label="Barre" />
                <Checkbox label="Rock Climbng" />
                <Checkbox label="Tennis" />
                <Checkbox label="Personal Training" />
                <Checkbox label="Cycling" />
                <Checkbox label="Martial Arts" />
                <Checkbox label="Basketball" />
                <Checkbox label="Soccer" />
              </di>
              <div>
                <FlatButton label="Clear All" primary={true} />
              </div>
            </div>
          </Tab>
          <Tab label="Amenities"></Tab>
        </Tabs>
      </div>
    </div>
    
  </div>
}

const styles = {
  homeFilter: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
  },
  contentWrapper: {
    padding: '10px',
  },
};


export default HomeFilter = Radium(HomeFilter);
