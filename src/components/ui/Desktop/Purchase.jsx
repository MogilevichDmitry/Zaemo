import React from 'react';
import Radium from 'radium';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import ModalWindow from './ModalWindow.jsx';
import RaisedButton from 'material-ui/RaisedButton';
import ZeamoIcon from '../../../images/layout/ZeamoIcon.svg';

const Purchase = ({ open, close }) => {
  return <ModalWindow title="Purchase pass" open={open} close={close} >
    <div style={styles.purchase}>
      <div style={styles.purchasePayment}>
        <h1 style={styles.purchaseTitle}>Payment Information</h1>

        <div style={styles.purchaseBoxRow}>
          <TextField
            hintText="Name"
            hintStyle={styles.hint}
            style={styles.fieldName}
            underlineStyle={styles.underline}
          />
          <TextField
            hintText="Exp. date"
            hintStyle={styles.hint}
            style={styles.fieldDate}
            underlineStyle={styles.underline}
          />
        </div>
        <div style={styles.purchaseBoxRow}>
          <TextField
            hintText="Card number"
            hintStyle={styles.hint}
            style={styles.fieldCard}
            underlineStyle={styles.underline}
          />
          <TextField
            hintText="cvv"
            hintStyle={styles.hint}
            style={styles.fieldCvv}
            underlineStyle={styles.underline}
          />
        </div>
        <Checkbox
          label="Save payment information"
          style={styles.checkbox}
          iconStyle={styles.checkboxIcon}
        />
      </div>

      <div>
        <h1 style={styles.purchaseTitle}>Pass information</h1>
        <div style={styles.purchaseBoxRow}>
          <SelectField
            floatingLabelText="Type of pass"
            floatingLabelFixed={true}
            floatingLabelStyle={styles.floatingLabel}
            underlineStyle={styles.underline}
            iconStyle={styles.icon}
            style={styles.fieldPass}
          >
            <MenuItem primaryText="Year pass" />
            <MenuItem primaryText="Month pass" />
            <MenuItem primaryText="Day pass" />
          </SelectField>

          <div style={styles.fieldDuration}>
            <div style={styles.optionName}>Duration of pass</div>
            <div style={styles.optionValue}>Time of activation - midnight</div>
          </div>

          <div style={styles.fieldPrice}>
            <div style={styles.optionName}>Price</div>
            <div style={styles.optionValue}>$15.00 dlls</div>
          </div>
        </div>

        <div style={styles.fieldUse}>
          <div style={styles.optionName}>Use by</div>
          <div style={styles.optionValue}>6/2/2017</div>
        </div>

        <div style={styles.gymInformation}>
          <div style={styles.gymInformationTitle}>Gym information</div>

          <div>
            <div style={styles.gymTitle}>Friars Pilates Studio</div>
            <div style={styles.partner}>
              <img src={ZeamoIcon} style={styles.zeamoIcon} />
              <span style={styles.partnerDescription}>Zaemo Partner</span>
            </div>
          </div>

          <div style={styles.gymAddress}>
            <p>5555 Graphes Rd, 92510</p>
            <p>San Diego, CA</p>
          </div>
          <div style={styles.gymNumber}>(555)555-5555</div>
        </div>
      </div>

      <div style={styles.controls}>
        <RaisedButton label="Cancel" backgroundColor="#e3e3e3" style={styles.buttonCancel} />
        <RaisedButton label="CHECKOUT" primary={true} style={styles.buttonCheckout} />
      </div>
    </div>
  </ModalWindow>;
}

const styles = {
  purchase: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  purchasePayment: {
    marginBottom: '25px',
  },
  purchaseBoxRow: {
    display: 'flex',
    alignItems: 'center',
  },
  purchaseTitle: {
    fontSize: '16px',
    color: 'black',
    fontWeight: '500',
    marginBottom: '5px',
  },
  underline: {
    borderColor: 'rgba(72, 119, 249, 0.7)',
  },
  hint: {
    fontSize: '12px',
    paddingBottom: '5px',
    color: '#999999',
  },
  floatingLabel: {
    color: '#999999',
  },
  icon: {
    fill: '#4877f9',
  },
  fieldName: {
    flex: '0.6',
    fontSize: '14px',
  },
  fieldDate: {
    flex: '0.3',
    fontSize: '14px',
    marginLeft: '20px',
  },
  fieldCard: {
    flex: '0.45',
    fontSize: '14px',
  },
  fieldCvv: {
    flex: '0.2',
    fontSize: '14px',
    marginLeft: '20px',
  },
  fieldPass: {
    flex: '0.3',
    fontSize: '14px',
  },
  fieldDuration: {
    flex: '0.3',
    marginLeft: '15px',
    fontSize: '13px',
  },
  fieldPrice: {
    flex: '0.3',
    marginLeft: '15px',
    fontSize: '13px',
  },
  fieldUse: {

    marginTop: '20px',
    fontSize: '13px',
  },
  optionName: {
    color: '#999999',
    marginBottom: '15px',
  },
  optionValue: {
    color: '#666666',
    paddingLeft: '3px',
  },
  checkbox: {
    marginTop: '15px',
    fontSize: '14px',
    fontWeight: '300',
    color: '#999999',
  },
  checkboxIcon: {
    fill: '#4877f9',
    marginRight: '10px',
  },
  partner: {
    marginBottom: '10px',
  },
  zeamoIcon: {
    width: '14px',
    height: '14px',
    margin: 'auto 1.5% auto 0',
  },
  partnerDescription: {
    color: '#666666',
  },
  gymInformation: {
    marginTop: '15px',
    fontSize: '13px',
  },
  gymInformationTitle: {
    color: '#999999',
    marginBottom: '15px',
  },
  gymTitle: {
    color: '#666666',
  },
  gymAddress: {
      marginBottom: '10px',
  },
  gymNumber: {
    marginBottom: '10px',
  },
  controls: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  buttonCancel: {
    fontSize: '15px',
  },
  buttonCheckout: {
    marginLeft: '20px',
  },
};

export default Radium(Purchase);