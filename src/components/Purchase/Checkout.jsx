import React from 'react';
import Radium from 'radium';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';

import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Create from 'material-ui/svg-icons/content/create';
import ZeamoIcon from '../../images/layout/ZeamoIcon.svg';

const Checkout = () => {
  return <div>
    <AppBar
      title="Checkout"
      iconElementLeft={
        <IconButton><NavigationClose /></IconButton>
      }
      iconElementRight={
        <p>Step 3 of 3 </p>
      }
    />
    
    <div>
      <div>
        <div>
          <div>Pass information</div>
          <IconButton><Create /></IconButton>
        </div>

        <div>
          <div>
            <div>
              <div>Duration of pass</div>
              <div>Time of activation - midnight</div>
            </div>

            <div>
              <div>Price</div>
              <div>$15.00 dlls</div>
            </div>
          </div>

          <div>
            <div>Use by</div>
            <div>6/2/2017</div>
          </div>

          <div>
            <div>Gym information</div>

            <div>
              <div>Friars Pilates Studio</div>
              <div>
                <img src={ZeamoIcon} style={styles.zeamoIcon} />
                <span>Zaemo Partner</span>
              </div>
            </div>

            <div>
              <p>5555 Graphes Rd, 92510</p>
              <p>San Diego, CA</p>
            </div>
            <div>(555)555-5555</div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div>Payment information</div>
          <IconButton><Create /></IconButton>
        </div>

        <div>
          <div>
            <div>Name</div>
            <div>John Smith</div>
          </div>

          <div>
            <div>
              <div>Card number</div>
              <div>*******5555</div>
            </div>

            <div>
              <div>Exp. date</div>
              <div>06/18</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <RaisedButton label="Submit" primary={true} fullWidth={true} />
  </div>
}

const styles = {
  zeamoIcon: {
    width: '14px',
    height: '14px',
    margin: 'auto 1.5% auto 0',
  },
};

export default Radium(Checkout);