import React from 'react';

export default function({expiresIn}) {
  return <div>
    <div>
      While countdown is active you have full access \n
      to the gym facilities and classes.
    </div>

    <div>
      <div>Expires in:</div>
      <div>{`${expiresIn.hour}h ${expiresIn.minutes}m ${expiresIn.seconds}s`}</div>
    </div>
  </div>;
}