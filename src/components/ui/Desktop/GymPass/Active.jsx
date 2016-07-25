import React from 'react';
import Radium from 'radium';
import ModalWindow from '../ModalWindow.jsx';
import GymPass from './index.jsx';
import Active from './PassStatus/Active.jsx'

import gymA from '../../../../images/content/gymA.jpg';

const expiresIn = {
  hour: '23',
  minutes: '15',
  seconds: '10',
};

export default function() {
  return <ModalWindow title="Active Pass" width="400px" height="300px">
    <GymPass
      src={gymA}
      title="GymABC"
      status="active"
    />
    <Active expiresIn={expiresIn} />
  </ModalWindow>;
}