import React from 'react';
import Radium from 'radium';
import ModalWindow from '../ModalWindow.jsx';
import GymPass from './index.jsx';

import gymA from '../../../../images/content/gymA.jpg';

const expiresIn = {
  hours: '23',
  minutes: '15',
  seconds: '10',
};

export default function() {
  return <ModalWindow title="Active pass" width="400px" height="300px">
    <GymPass
      src={gymA}
      title="GymABC"
      status="active"
    />

    <div>
      <div>
        While countdown is active you have full access \n
        to the gym facilities and classes.
      </div>

      <div>
        <div>Expires in:</div>
        <div>{`${expiresIn.hours}h ${expiresIn.minutes}m ${expiresIn.seconds}s`}</div>
      </div>
    </div>
  </ModalWindow>;
}