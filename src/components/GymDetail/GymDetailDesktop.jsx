import React from 'react';
import Radium from 'radium';
import Header from '../ui/Desktop/Header.jsx';
import RaisedButton from 'material-ui/RaisedButton';

import ZeamoIcon from '../../images/layout/ZeamoIcon.svg';
import NearMe from 'material-ui/svg-icons/maps/near-me';
import Phone from 'material-ui/svg-icons/communication/phone';

function GymDetailDesktop() {
  return  <div>
    <Header />

    <div>
      <div>
        <div>
          <img />
        </div>

        <div>
          <div>
            <div>Gym A</div>
            <div>
              <img />
              <span>Zaemo Partner</span>
            </div>
          </div>

          <div>
            <span>2.1mi</span>
            <span>Mission Valley</span>
            <span>Open now</span>
          </div>
        </div>

        <div>
          <img />
        </div>

        <div>
          <h1>Location</h1>

          <div>
            <span>5555 Grapes Rd, 92510</span>
            <span>San Diego, CA</span>
            <NearMe />
          </div>
        </div>

        <div>
          <h1>Phone Number</h1>

          <div>
            <span>(555)555 - 555</span>
            <Phone />
          </div>
        </div>

        <div>
          <h1>Purchase a pass</h1>

          <div>
            <div>
              <div>Day Pass</div>
              <div>Time of activation-midnight</div>
            </div>

            <div>
              <div>Price:</div>
              <div>$15 dlls</div>
            </div>

            <div>
              <div>Use by:</div>
              <div>6/2/2017</div>
            </div>

            <RaisedButton label="Purchase" primary={true} />
          </div>
        </div>
      </div>

      <div>
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
          <h1>Schedule</h1>
          <div>
            <span>Monday:</span>
            <span>10:00 AM - 11:00 PM</span>
          </div>
        </div>

        <div>
          <h1>Activities</h1>
          <div>
            <div>Gym</div>
            <div>Pilates</div>
            <div>Tennis</div>
          </div>
        </div>

        <div>
          <h1>Amenities</h1>
          <div>
            <div>Changing rooms</div>
            <div>Cafeteria</div>
            <div>Lockers</div>
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
  </div>;
}

export default GymDetailDesktop = Radium(GymDetailDesktop);
