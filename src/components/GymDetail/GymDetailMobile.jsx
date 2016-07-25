import React from 'react';
import Radium from 'radium';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';

import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';

function GymDetailMobile() {
  return (
    <div style={styles.wrapper}>
      <AppBar
        style={styles.appBar}
        title="Friars Pilates Studio"
        iconElementLeft={
          <IconButton>
            <ArrowBack />
          </IconButton>
        }
      />
      <div>
        <div>img</div>
        <div>
          <div>Friars Pilates Studio</div>
          <div>zeamo partner</div>
          <div>
            <span>2.1 mi</span>
            <span>Mission Valley</span>
            <span>Open now</span>
          </div>
        </div>

        <div>map</div>

        <div>
          <h1>Available passes</h1>
          <div>
            <div>Day pass</div>
            <div>
              <div>$15 dlls</div>
              <FlatButton
                label="select"
                primary={true}
              />
            </div>
          </div>
        </div>

        <div>
          <h1>Schedule</h1>
          <div>
            <span>Monday:</span>
            <span>10:00 AM - 11:00 PM</span>
          </div>
        </div>

        <div>
          <h1>About</h1>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed placerat tortor ut lorem pretium pulvinar.
            Pellentesque justo felis, pulvinar ac urna ac, imperdiet malesuada purus.
            Sed et libero sed nisi sagittis vestibulum nec eu lectus.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus, mauris
          </div>
        </div>

        <div>
          <h1>Location</h1>
          <div>
            <span>12341241</span>
            <IconButton>
              <ArrowBack color={'white'} />
            </IconButton>
          </div>
        </div>

        <div>
          <h1>Phone number</h1>
          <div>
            <span>12341241</span>
            <IconButton>
              <ArrowBack color={'white'} />
            </IconButton>
          </div>
        </div>

        <div>
          <h1>Photos</h1>
          <div>
           photo
          </div>
        </div>

      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    background: '#162233',
    color: 'rgb(204, 204, 204)',
  },
  appBar: {
    backgroundColor: '#162233',
  },
};



export default GymDetailMobile = Radium(GymDetailMobile);
