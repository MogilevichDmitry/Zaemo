import React from 'react';
import Radium from 'radium';
import GymPass from './GymPass.jsx';
import gymA from '../../../../images/content/gymMyPass.jpg';
import { uiMobileMyPassActive } from '../../../../styles';

const styles = uiMobileMyPassActive;

const expiresIn = {
  hours: '23',
  minutes: '15',
  seconds: '10',
};

const Active = () => {
  return <div style={styles.wrapper}>
    <GymPass
      src={gymA}
      barTitle="Active pass"
      gymTitle="GymA"
      status="active"
    />

    <div style={styles.countDown}>
      <div style={styles.countDownDescription}>
        While countdown is active you have full access
        to the gym facilities and classes.
      </div>

      <div style={styles.countDownTimer}>
        <div style={styles.countDownTitle}>Expires in:</div>
        <span style={styles.countDownValue}>{expiresIn.hours}</span>
        <span style={styles.countDownTimeHint}>h</span>
        <span style={styles.countDownValue}>{expiresIn.minutes}</span>
        <span style={styles.countDownTimeHint}>m</span>
        <span style={styles.countDownValue}>{expiresIn.seconds}</span>
        <span style={styles.countDownTimeHint}>s</span>
      </div>
    </div>
  </div>;
};

export default Radium(Active);
