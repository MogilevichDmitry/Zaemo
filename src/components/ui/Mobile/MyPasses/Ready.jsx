import React from 'react';
import Radium from 'radium';
import GymPass from './GymPass.jsx';
import RaisedButton from 'material-ui/RaisedButton';

import gymA from '../../../../images/content/gymA.jpg';

const Ready = () => {
  return <div>
    <GymPass
      src={gymA}
      barTitle="New day pass"
      gymTitle="GymA"
      status="ready"
    />

    <div>
      <div>
        Pass will activate and count down to expiration will begin
        when pressing "Check in"
      </div>

      <RaisedButton label="Activate" primary={true} />
    </div>
  </div>;
}

export default Radium(Ready);