import React from 'react';
import Radium from 'radium';
import ModalWindow from '../ModalWindow.jsx';
import GymPass from './GymPass.jsx';
import RaisedButton from 'material-ui/RaisedButton';
import gym from '../../../../images/content/gymMyPass.jpg';
import { uiDesktopMyPassReady } from '../../../../styles';

const styles = uiDesktopMyPassReady;

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

export default Radium(Ready);