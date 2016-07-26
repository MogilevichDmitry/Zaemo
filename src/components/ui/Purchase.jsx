import React from 'react';
import Radium from 'radium';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import ModalWindow from './Desktop/ModalWindow.jsx';
import RaisedButton from 'material-ui/RaisedButton';
import ZeamoIcon from '../../images/layout/ZeamoIcon.svg';

const Purchase = ({ open, close }) => {
  return <ModalWindow title="Purchase pass" open={open} close={close} >
    <div>
      <div>
        <h1>Payment Information</h1>

        <TextField
          floatingLabelText="Name"
          floatingLabelFixed={true}
        />
        <TextField
          floatingLabelText="Exp. date"
          floatingLabelFixed={true}
        />
        <TextField
          floatingLabelText="Card number"
          floatingLabelFixed={true}
        />
        <TextField
          floatingLabelText="cvv"
          floatingLabelFixed={true}
        />
        <Checkbox
          label="Save payment information"
        />
      </div>

      <div>
        <h1>Pass information</h1>

        <SelectField
          floatingLabelText="Type of pass"
          floatingLabelFixed={true}
        >
          <MenuItem primaryText="Year pass" />
          <MenuItem primaryText="Month pass" />
          <MenuItem primaryText="Day pass" />
        </SelectField>

        <div>
          <div>Duration of pass</div>
          <div>Time of activation - midnight</div>
        </div>

        <div>
          <div>Price</div>
          <div>$15.00 dlls</div>
        </div>

        <div>
          <div>Use by</div>
          <div>6/2/2017</div>
        </div>

        <div>
          <div>Gym information</div>

          <div>
            <div style={styles.gymTitle}>Friars Pilates Studio</div>
            <div style={styles.partner}>
              <img src={ZeamoIcon} style={styles.zeamoIcon} />
              <span style={styles.partnerDescription}>Zaemo Partner</span>
            </div>
          </div>

          <div>
            <div>
              <p>5555 Graphes Rd, 92510</p>
              <p>San Diego, CA</p>
            </div>
            <div>(555)555-5555</div>
          </div>
        </div>
      </div>

      <RaisedButton label="Cancel" onClick={close} />
      <RaisedButton label="CHECKOUT" primary={true} />
    </div>
  </ModalWindow>;
}

const styles = {
  gymTitle: {
    marginBottom: '2%',
    color: '#031021',
    fontWeight: '500',
    fontSize: '18px',
  },
  partner: {
    fontSize: '14px',
    marginBottom: '2%',
    display: 'flex',
    '@media (min-width: 770px)':{
      marginBottom: '6px',
    },
  },
  zeamoIcon: {
    width: '14px',
    height: '14px',
    margin: 'auto 1.5% auto 0',
  },
  partnerDescription: {
    color: '#666666',
  },
};

export default Radium(Purchase);