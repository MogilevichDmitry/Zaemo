import React from 'react';
import Radium from 'radium';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ArrowBack from '../../../node_modules/material-ui/svg-icons/navigation/arrow-back';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router';
import { settingsPersonalInfo } from '../../styles';

const styles = settingsPersonalInfo;

const PaymentInfo = () => {
  return <div>
    <AppBar
      style={styles.appBar}
      title="Personal information"
      iconElementLeft={
        <Link to="/settings"><IconButton><ArrowBack color={'#4877f9'} /></IconButton></Link>
      }
      iconElementRight={<FlatButton label="Save" style={styles.appBarButton}/>}
    />

    <div style={styles.wrapper}>
      <TextField
        defaultValue="Frank Hill"
        floatingLabelText="Name"
        fullWidth={true}
        underlineStyle={styles.underline}
        style={styles.inputField}
      />
      
      <div style={styles.boxRow}>
        <div style={styles.fieldNumber}>
          <TextField
            defaultValue="(555)555-5555"
            floatingLabelText="Phone Number"
            fullWidth={true}
            underlineStyle={styles.underline}
            style={styles.inputField}
          />
        </div>
        <div style={styles.fieldEmail}>
          <TextField
            defaultValue="frank.hill@gmail.com"
            floatingLabelText="Email"
            fullWidth={true}
            underlineStyle={styles.underline}
            style={styles.inputField}
          />
        </div>
      </div>
      <div style={styles.fieldPassword}>
        <TextField
          type="password"
          defaultValue="1111111111111111111111"
          floatingLabelText="Password"
          fullWidth={true}
          underlineStyle={styles.underline}
          style={styles.inputField}
        />
      </div>
    </div>
  </div>
};

export default Radium(PaymentInfo);