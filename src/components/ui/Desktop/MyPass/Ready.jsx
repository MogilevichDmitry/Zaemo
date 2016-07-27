import React from 'react';
import Radium from 'radium';
import ModalWindow from '../ModalWindow.jsx';
import GymPass from './GymPass.jsx';
import RaisedButton from 'material-ui/RaisedButton';

import gym from '../../../../images/content/gymMyPass.jpg';

const Ready = () => {
  return <ModalWindow title="New day pass" open={true}>
    <div style={styles.wrapper}>
      <GymPass
        src={gym}
        title="GymAB"
        status="ready"
      />

      <div style={styles.activate}>
        <div style={styles.activateDescription}>
          Pass will activate and count down to expiration will begin
          when pressing "Check in"
        </div>

        <div>
          <RaisedButton label="Activate" primary={true} style={styles.activateButton} />
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
  activate: {
    fontSize: '13px',
    color: '#999999',
    margin: 'auto',
    width: '350px',
    textAlign: 'center',
  },
  activateDescription: {
    marginBottom: '15px',
  },
  activateButton: {
    width: '70%',
  },
};

export default Radium(Ready);