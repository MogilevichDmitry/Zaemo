import React from 'react';
import Radium from 'radium';
import GymPass from './GymPass.jsx';
import RaisedButton from 'material-ui/RaisedButton';
import gymA from '../../../../images/content/gymMyPass.jpg';
import { uiMobileMyPassReady } from '../../../../styles';

const styles = uiMobileMyPassReady;

const Ready = () => {
  return <div style={styles.wrapper}>
    <GymPass
      src={gymA}
      barTitle="New day pass"
      gymTitle="GymA"
      status="ready"
    />

    <div style={styles.statusWrapper}>
      <div style={styles.description}>
        Pass will activate and count down to expiration will begin
        when pressing "Check in"
      </div>
      <div style={styles.buttonBox}>
        <RaisedButton label="Activate" primary={true} fullWidth={true} />
      </div>
    </div>
  </div>;
};

export default Radium(Ready);