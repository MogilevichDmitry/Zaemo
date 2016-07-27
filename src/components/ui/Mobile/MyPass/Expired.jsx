import React from 'react';
import Radium from 'radium';
import GymPass from './GymPass.jsx';
import FlagButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import gymA from '../../../../images/content/gymA.jpg';

const Expired = () => {
  return <div>
    <GymPass
      src={gymA}
      barTitle="Active pass"
      gymTitle="GymA"
      status="Expired 2 days ago"
    />

    <div>
      <RaisedButton label="Purchase Again" primary={true} />

      <div>
        <h1>Other available passes</h1>

        <div>
          <div>Month pass</div>
          <div>Price: $50.00 dlls</div>
          <FlagButton label="Select" primary={true} />
        </div>

        <div>
          <div>Annual pass</div>
          <div>Price: $50.00 dlls</div>
          <FlagButton label="Select" primary={true} />
        </div>
      </div>
    </div>
  </div>;
}

export default Radium(Expired);