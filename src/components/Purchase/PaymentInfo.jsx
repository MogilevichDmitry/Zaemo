import React from 'react';
import Radium from 'radium';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import NavigationClose from 'material-ui/svg-icons/navigation/close';

const PaymentInfo = () => {
  return <div>
    <AppBar
      title="Payment information"
      iconElementLeft={
       <IconButton><NavigationClose /></IconButton>
     }
      iconElementRight={
       <FlatButton label="Step 2 of 3" />
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

      <Checkbox label="Save payment information" />
    </div>

    <RaisedButton label="Checkout" primary={true} fullWidth={true} />
  </div>
}

export default Radium(PaymentInfo);