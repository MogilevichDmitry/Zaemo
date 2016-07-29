import React from 'react';
import Radium from 'radium';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { purchasePaymentInfo } from '../../styles';

const styles = purchasePaymentInfo;

const PaymentInfo = () => {
  return <div style={styles.wrapper}>
    <AppBar
      title="Payment information"
      iconElementLeft={<IconButton><NavigationClose color={'#4877f9'} /></IconButton>}
      iconElementRight={<p style={styles.appBarLeftInfo}>Step 2 of 3 </p>}
      zDepth={0}
      iconStyleRight={styles.appBarRightIcon}
      style={styles.appBar}
    />
    <div style={styles.main}>
      <TextField
        hintText="Name"
        hintStyle={styles.hint}
        fullWidth={true}
        style={styles.fieldName}
      />

      <div style={styles.boxRow}>
        <TextField
          hintText="Card number"
          hintStyle={styles.hint}
          style={styles.fieldCardNumber}
        />

        <TextField
          hintText="cvv"
          hintStyle={styles.hint}
          style={styles.fieldCvv}
        />
      </div>

      <TextField
        hintText="Exp. date"
        hintStyle={styles.hint}
      />

      <Checkbox
        label="Save payment information"
        style={styles.checkbox}
        iconStyle={styles.checkboxIcon}
        labelStyle={styles.checkboxLabel}
      />
    </div>

    <RaisedButton label="Checkout" primary={true} fullWidth={true} />
  </div>
};

export default Radium(PaymentInfo);