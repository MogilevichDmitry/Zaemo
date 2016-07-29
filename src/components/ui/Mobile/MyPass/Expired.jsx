import React from 'react';
import Radium from 'radium';
import GymPass from './GymPass.jsx';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import gymA from '../../../../images/content/gymMyPass.jpg';
import { uiMobileMyPassExpired } from '../../../../styles';

const styles = uiMobileMyPassExpired;

const Expired = () => {
  return <div style={styles.wrapper}>
    <GymPass
      src={gymA}
      barTitle="Active pass"
      gymTitle="GymA"
      status="Expired 2 days ago"
    />

    <div style={styles.statusWrapper}>
      <div style={styles.buttonBox}>
        <RaisedButton label="Purchase Again" primary={true} fullWidth={true} />
      </div>

      <div>
        <div style={styles.statusTitle}>Other available passes</div>

        <div style={styles.passSelect}>
          <div>
            <div style={styles.passSelectTitle}>Month pass</div>
            <div>
              <span>Price: </span>
              <span style={styles.passSelectCost}>$50.00 dlls</span>
            </div>
          </div>
          <FlatButton
            label="select"
            primary={true}
            style={styles.passSelectButton}
          />
        </div>
        <div style={styles.passSelect}>
          <div>
            <div style={styles.passSelectTitle}>Annual pass</div>
            <div>
              <span>Price: </span>
              <span style={styles.passSelectCost}>$50.00 dlls</span>
            </div>
          </div>
          <FlatButton
            label="select"
            primary={true}
            style={styles.passSelectButton}
          />
        </div>
      </div>
    </div>
  </div>;
};

export default Radium(Expired);