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
  return <ModalWindow title="Active pass">
    <GymPass
      src={gym}
      title="GymABC"
      status="active"
    />

    <div>
      <div>
        While countdown is active you have full access
        to the gym facilities and classes.
      </div>

      <div>
        <div>Expires in:</div>
        <div>{`${expiresIn.hours}h ${expiresIn.minutes}m ${expiresIn.seconds}s`}</div>
      </div>
    </div>
  </ModalWindow>;
}

export default Radium(Active);