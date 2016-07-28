import React from 'react';
import Radium from 'radium';
import GymPass from './GymPass.jsx';

import background from '../../../../images/layout/myPassesBg.jpg';
import gymA from '../../../../images/content/gymMyPass.jpg';

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

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    minHeight: '100vh',
    fontFamily: 'Ubuntu',
    paddingBottom: '25px',
  },
  countDown: {
    fontSize: '13px',
    color: '#cccccc',
    margin: '0 auto',
    maxWidth: '350px',
    textAlign: 'center',
    padding: '0 30px',
  },
  countDownDescription: {
    marginBottom: '15px',
  },
  countDownTimer: {
    fontSize: '18px',
  },
  countDownTitle: {
    marginBottom: '10px',
    fontWeight: '500',
    color: 'white',
  },
  countDownValue: {
    fontWeight: '600',
    fontSize: '24px',
    color: 'white',
  },
  countDownTimeHint: {
    marginRight: '7px',
    fontSize: '24px',
  },
};

export default Radium(Active);