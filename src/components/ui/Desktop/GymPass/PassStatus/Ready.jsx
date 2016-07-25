import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default function() {
  return <div>
    <div>
      Pass will activate and count down to expiration will begin /n
      when pressing "Check in"
    </div>

    <RaisedButton label="Activate" primary={true} />
  </div>
}