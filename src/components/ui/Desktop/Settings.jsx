import React from 'react';
import Radium from 'radium';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Header from './Header.jsx';

const Settings = () => {
  return <div>
    <Header search={false} sort={false} />
    
    <div>Settings</div>

    <div>
      <h1>Edit your workout preferences</h1>

      <div style={styles.checkboxGroup}>
        <Checkbox label="Gym" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
        <Checkbox label="Swimming" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
        <Checkbox label="Yoga" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
        <Checkbox label="Spinning" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
        <Checkbox label="Kickboxing" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
        <Checkbox label="Boot Camp" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
        <Checkbox label="Dancing" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
        <Checkbox label="Pilates" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
        <Checkbox label="Fencing" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
        <Checkbox label="Squash" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
        <Checkbox label="Zumba" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
        <Checkbox label="Physiotherapy" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
        <Checkbox label="Barre" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
        <Checkbox label="Rock Climbng" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
        <Checkbox label="Tennis" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
        <Checkbox label="Personal Training" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
        <Checkbox label="Cycling" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
        <Checkbox label="Martial Arts" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
        <Checkbox label="Basketball" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
        <Checkbox label="Soccer" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
      </div>
    </div>

    <div>
      <h1>Edit your personal information</h1>

      <div>
        <TextField
          defaultValue="Frank Hill"
          floatingLabelText="Name"
          floatingLabelFixed={true}
        />
        <TextField
          defaultValue="(555)555-5555"
          floatingLabelText="Phone Number"
          floatingLabelFixed={true}
        />
        <TextField
          defaultValue="frank.hill@gmail.com"
          floatingLabelText="Email"
          floatingLabelFixed={true}
        />
        <TextField
          type="password"
          defaultValue="1111111111111111111111"
          floatingLabelText="Password"
          floatingLabelFixed={true}
        />
      </div>

      <div>
        <h1>Edit your payment information</h1>

        <TextField
          defaultValue="John Smith"
          floatingLabelText="Name"
          floatingLabelFixed={true}
        />

        <TextField
          defaultValue="06/18"
          floatingLabelText="Exp. date"
          floatingLabelFixed={true}
        />

        <TextField
          defaultValue="1232344345456"
          floatingLabelText="Card Number"
          floatingLabelFixed={true}
        />

        <TextField
          defaultValue="06/18"
          floatingLabelText="cvv"
          floatingLabelFixed={true}
        />
      </div>

      <RaisedButton label="save changes" primary={true} fullWidth={true} />
    </div>
  </div>;
}

const styles = {
  checkboxGroup: {
    marginTop: '3%',
  },
  checkbox: {
    display: 'inline-block',
    marginBottom: '2%',
    width: 'auto',
    minWidth: '186px',
    fontWeight: '300',
  },
  checkboxIcon: {
    fill: '#4877f9',
    marginRight: '2.5%',
  },
}

export default Radium(Settings);