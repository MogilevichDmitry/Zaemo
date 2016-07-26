import React from 'react';
import ModalWindow from '../ModalWindow.jsx';
import GymPass from './index.jsx';
import RaisedButton from 'material-ui/RaisedButton';

import gymA from '../../../../images/content/gymA.jpg';

export default function() {
  return <ModalWindow title="New day pass" width="400px" height="300px">
    <GymPass
      src={gymA}
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