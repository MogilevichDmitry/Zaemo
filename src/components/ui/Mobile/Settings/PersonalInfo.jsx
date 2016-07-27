import React from 'react';
import Radium from 'radium';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router';

const PaymentInfo = () => {
  return <div>
    <AppBar
      style={styles.appBar}
      title="Workout preferences"
      iconElementLeft={
        <Link to="/settings"><IconButton><ArrowBack color={'#4877f9'} /></IconButton></Link>
      }
      iconElementRight={
        <FlatButton label="Save" style={styles.appBarButton}/>
      }
    />

    <div>
      <TextField
        defaultValue="Frank Hill"
        floatingLabelText="Name"
        floatingLabelFixed={true}
      />
      
      <div>
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
      </div>
      
      <TextField
        type="password"
        defaultValue="1111111111111111111111"
        floatingLabelText="Password"
        floatingLabelFixed={true}
      />
    </div>
  </div>
}

const styles = {
  appBar: {
    backgroundColor: '#162233',
  },
  appBarButton: {
    color: '#4877f9',
  },
};

export default Radium(PaymentInfo);