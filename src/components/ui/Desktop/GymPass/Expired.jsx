import React from 'react';
import Radium from 'radium';
import ModalWindow from '../ModalWindow.jsx';
import GymPass from './index.jsx';
import RaisedButton from 'material-ui/RaisedButton';

import gymA from '../../../../images/content/gymA.jpg';

const Expired = () => {
  return <ModalWindow title="Expired pass" width="400px" height="300px">
    <GymPass
      src={gymA}
      title="GymA"
      status="Expired 2 days ago"
    />

    <div>
      <h1>Purchase a new pass</h1>

      <div>
        <div>
          <div>Day pass</div>
          <div>Time of activation-midnight</div>
        </div>

        <div>
          <div>Price</div>
          <div>$15.00 dlls</div>
        </div>

        <div>
          <div>Use by:</div>
          <div>6/2/2017</div>
        </div>

        <RaisedButton label="Purchase" primary={true} />
      </div>

      <div>
        <div>
          <div>Month pass</div>
          <div>30 days</div>
        </div>

        <div>
          <div>Price</div>
          <div>$50.00 dlls</div>
        </div>

        <div>
          <div>Use by:</div>
          <div>6/2/2017</div>
        </div>

        <RaisedButton label="Purchase" primary={true} />
      </div>

      <div>
        <div>
          <div>Year pass</div>
          <div>365 days</div>
        </div>

        <div>
          <div>Price</div>
          <div>$500.00 dlls</div>
        </div>

        <div>
          <div>Use by:</div>
          <div>6/2/2017</div>
        </div>

        <RaisedButton label="Purchase" primary={true} />
      </div>
    </div>
  </ModalWindow>;
}

export default Radium(Expired);