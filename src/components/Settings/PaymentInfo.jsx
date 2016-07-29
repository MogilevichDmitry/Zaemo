import React from 'react';
import Radium from 'radium';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router';
import { settingsPaymentInfo } from '../../styles';

const styles = settingsPaymentInfo;

const PaymentInfo = () => {
  return <div>
    <AppBar
      style={styles.appBar}
      title="Payment information"
      iconElementLeft={
        <Link to="/settings"><IconButton><ArrowBack color={'#4877f9'} /></IconButton></Link>
      }
      iconElementRight={<FlatButton label="Save" style={styles.appBarButton} />}
    />

    <div style={styles.wrapper}>
      <TextField
        defaultValue="John Smith"
        floatingLabelText="Name"
        fullWidth={true}
        underlineStyle={styles.underline}
        style={styles.inputField}
      />

      <div style={styles.boxRow}>
        <div style={styles.fieldCard}>
          <TextField
            defaultValue="1232344345456"
            floatingLabelText="Card Number"
            fullWidth={true}
            underlineStyle={styles.underline}
            style={styles.inputField}
          />
        </div>
        <div style={styles.fieldCvv}>
          <TextField
            defaultValue="06/18"
            floatingLabelText="cvv"
            fullWidth={true}
            underlineStyle={styles.underline}
            style={styles.inputField}
          />
        </div>
      </div>

      <div style={styles.fieldDate}>
        <TextField
          defaultValue="06/18"
          floatingLabelText="Exp. date"
          fullWidth={true}
          underlineStyle={styles.underline}
          style={styles.inputField}
        />
      </div>
    </div>
  </div>
};

export default Radium(PaymentInfo);