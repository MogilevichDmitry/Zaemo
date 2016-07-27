import React from 'react';
import Radium from 'radium';
import ModalWindow from '../ModalWindow.jsx';
import GymPass from './GymPass.jsx';

import gym from '../../../../images/content/gymMyPassActive.jpg';

const expiresIn = {
  hours: '23',
  minutes: '15',
  seconds: '10',
};

const Active = () => {
  return <ModalWindow title="Active pass" open={true}>
    <div style={styles.wrapper}>
      <GymPass
        src={gym}
        title="GymABC"
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
    </div>
  </ModalWindow>;
};

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  countDown: {
    fontSize: '13px',
    color: '#999999',
    margin: 'auto',
    maxWidth: '350px',
    textAlign: 'center',
  },
  countDownDescription: {
    marginBottom: '15px',
  },
  countDownTimer: {
    color: 'black',
    fontSize: '18px',
  },
  countDownTitle: {
    marginBottom: '10px',
    fontWeight: '500',
  },
  countDownValue: {
    fontWeight: '600',
    fontSize: '24px',
  },
  countDownTimeHint: {
    color: '#999999',
    marginRight: '7px',
    fontSize: '24px',
  },
};

export default Radium(Active);