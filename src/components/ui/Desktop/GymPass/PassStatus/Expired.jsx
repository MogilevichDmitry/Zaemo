import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default function() {
  return <div>
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
  </div>;
}