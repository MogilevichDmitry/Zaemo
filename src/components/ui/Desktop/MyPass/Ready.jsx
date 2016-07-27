import React from 'react';
import Radium from 'radium';
import ModalWindow from '../ModalWindow.jsx';
import GymPass from './GymPass.jsx';
import RaisedButton from 'material-ui/RaisedButton';

import gym from '../../../../images/content/gymMyPass.jpg';

const Ready = () => {
  return <ModalWindow title="New day pass" width="400px" height="300px">
    <GymPass
      src={gym}
      title="GymAB"
      status="ready"
    />

    <div>
      <div>
        Pass will activate and count down to expiration will begin
        when pressing "Check in"
      </div>

      <RaisedButton label="Activate" primary={true} />
    </div>
  </ModalWindow>;
}

export default Radium(Ready);