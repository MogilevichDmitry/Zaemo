import React from 'react';
import Radium from 'radium';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import ZeamoIcon from '../../images/layout/ZeamoIcon.svg';
import { purchaseSelectPass } from '../../styles';

const styles = purchaseSelectPass;

const SelectPass = () => {
  return <div style={styles.wrapper}>
    <AppBar
      title="Select a pass"
      iconElementLeft={<IconButton><NavigationClose color={'#4877f9'} /></IconButton>}
      iconElementRight={<p style={styles.appBarLeftInfo}>Step 1 of 3 </p>}
      zDepth={0}
      iconStyleRight={styles.appBarRightIcon}
      style={styles.appBar}
    />
    <div style={styles.main}>
      <SelectField
        hintText="Day pass"
        hintStyle={styles.hint}
        style={styles.selectField}
      >
        <MenuItem primaryText="Year pass" />
        <MenuItem primaryText="Month pass" />
        <MenuItem primaryText="Day pass" />
      </SelectField>

      <div style={styles.boxColumn}>
        <div style={styles.heading}>Pass information</div>
        <div style={styles.options}>
          <div style={styles.option}>
            <div style={styles.optionName}>Duration of pass</div>
            <div style={styles.optionValue}>Time of activation - midnight</div>
          </div>

          <div style={styles.option}>
            <div style={styles.optionName}>Price</div>
            <div style={styles.optionValue}>$15.00 dlls</div>
          </div>

          <div style={styles.option}>
            <div style={styles.optionName}>Use by</div>
            <div style={styles.optionValue}>6/2/2017</div>
          </div>
        </div>
      </div>

      <div>
        <div style={styles.heading}>Gym information</div>

        <div>
          <div>Friars Pilates Studio</div>
          <div style={styles.partner}>
            <img src={ZeamoIcon} style={styles.zeamoIcon} />
            <span>Zaemo Partner</span>
          </div>
        </div>

        <div>
          <p>5555 Graphes Rd, 92510</p>
          <p>San Diego, CA</p>
        </div>

        <div style={styles.number}>(555)555-5555</div>
      </div>
    </div>

    <RaisedButton label="Purchase" primary={true} fullWidth={true} />
  </div>
};

export default Radium(SelectPass);