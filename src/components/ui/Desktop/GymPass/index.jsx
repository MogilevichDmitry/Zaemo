import React from 'react';
import Radium from 'radium';
import ZeamoIcon from '../../../../images/layout/ZeamoIcon.svg';
import FlagButton from 'material-ui/FlatButton';

function GymPass({ src, title, status, }) {
  return <div>
    <div>
      <div>
        <img src={src} />
      </div>

      <div>
        <div>{title}</div>
        <div>
          <img src={ZeamoIcon} />
          <span>Zaemo Partner</span>
        </div>
      </div>

      <div>
        <div>
          <p>5555 Graphes Rd, 92510</p>
          <p>San Diego, CA</p>
        </div>
        <div>(555)555-5555</div>
      </div>

      <FlagButton label="VIEW GYM" primary={true} />
    </div>

    <div>
      <h1>Pass Information</h1>

      <div>
        <div>
          <div>Type of pass</div>
          <div>Day</div>
        </div>

        <div>
          <div>Duration of pass</div>
          <div>Time of activation-midnight</div>
        </div>

        {
          status === 'ready' ?
            <div>
              <div>Use by:</div>
              <div>6/2/2017</div>
            </div> : ''
        }
        {
          status === 'active' || (status !== 'active' && 'ready') ?
            <div>
              <div>Purchased</div>
              <div>6/2/2016</div>
            </div> : ''
        }

        {
          status === 'active' ?
            <div>
              <div>Status</div>
              <div>Active</div>
            </div> : ''
        }
        {
          status === 'ready' ?
            <div>
              <div>Status</div>
              <div>Ready to use</div>
            </div> : ''
        }
        {
          status !== 'active' && status !== 'ready' ?
            <div>
              <div>Status</div>
              <div>{status}</div>
            </div> : ''
        }

        {
          status === 'active' || status === 'ready' ?
            <div>
              <div>Instruction</div>
              <div>
                Show this screen to the gym representative to get checked in and activate the pass /n
                Once activated, count down cannot be paused.
              </div>
            </div> : ''
        }
        {
          status !== 'active' && status !== 'ready' ?
            <div>
              <div>Instruction</div>
              <div>
                This pass has expired.
                Purchase a new pass to gain access this gym.
              </div>
            </div> : ''
        }
      </div>
    </div>
    
  </div>
}

export default GymPass = Radium(GymPass);