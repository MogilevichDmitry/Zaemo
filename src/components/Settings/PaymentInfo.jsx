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
        <FlatButton label="Save" style={styles.appBarButton} />
      }
    />

    <div>
      <TextField
        defaultValue="John Smith"
        floatingLabelText="Name"
        floatingLabelFixed={true}
        fullWidth={true}
      />

      <div>
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

      <TextField
        defaultValue="06/18"
        floatingLabelText="Exp. date"
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