import React from 'react';
import Radium from 'radium';
import GymPass from './GymPass.jsx';

import gymA from '../../../../images/content/gymA.jpg';

const expiresIn = {
  hours: '23',
  minutes: '15',
  seconds: '10',
};

const Active = () => {
  return <div>
    <GymPass
      src={gymA}
      barTitle="Active pass"
      gymTitle="GymA"
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
  </div>;
}

export default Radium(Active);