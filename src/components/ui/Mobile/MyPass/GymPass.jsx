import React from 'react';
import Radium from 'radium';
import ZeamoIcon from '../../../../images/layout/ZeamoIcon.svg';
import FlagButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
import { uiMobileMyPassGymPass } from '../../../../styles';

const styles = uiMobileMyPassGymPass;

const GymPass = ({ src, barTitle, status, gymTitle }) =>  {
  return <div>
    <AppBar
      title={barTitle}
      iconElementLeft={<IconButton><NavigationClose color={'#4877f9'} /></IconButton>}
      zDepth={0}
      style={styles.appBar}
    />
    <div style={styles.wrapper}>
      <div style={styles.gym}>
        <div style={styles.imageBox}>
          <img src={src} style={styles.image}/>
        </div>

        <div style={styles.gymInfo}>
          <div>
            <div style={styles.gymTitle}>{gymTitle}</div>
            <div style={styles.partner}>
              <img src={ZeamoIcon} style={styles.zeamoIcon} />
              <span>Zaemo Partner</span>
            </div>
          </div>

          <FlagButton label="VIEW GYM" primary={true} />
        </div>
      </div>

      <div style={styles.extraInfo}>
        <div style={styles.options}>
          <div style={styles.option}>
            <div style={styles.optionName}>Type of pass</div>
            <div>Day pass</div>
          </div>

          <div style={styles.option}>
            <div style={styles.optionName}>Purchased</div>
            <div>6/2/2016</div>
          </div>

          {
            status === 'ready' ?
              <div style={styles.option}>
                <div style={styles.optionName}>Use by:</div>
                <div>6/2/2017</div>
              </div> : ''
          }

          {
            status === 'active' ?
              <div style={styles.option}>
                <div style={styles.optionName}>Status</div>
                <div>Active</div>
              </div> : ''
          }
          {
            status === 'ready' ?
              <div style={styles.option}>
                <div style={styles.optionName}>Status</div>
                <div>Ready to use</div>
              </div> : ''
          }
          {
            status !== 'active' && status !== 'ready' ?
              <div style={styles.option}>
                <div style={styles.optionName}>Status</div>
                <div>{status}</div>
              </div> : ''
          }
        </div>
        {
          status === 'ready' ?
            <div style={styles.instruction}>
              <div style={styles.instructionTitle}>Instruction</div>
              <div>
                Show this screen to the gym representative to get checked in and activate the pass.
                Once activated, count down cannot be paused.
              </div>
            </div> : ''
        }
        {
          status === 'active' ?
            <div style={styles.instruction}>
              <div style={styles.instructionTitle}>Instruction</div>
              <div>
                Show this screen to the gym representative.
                Once activated, count down cannot be paused.
              </div>
            </div> : ''
        }
        {
          status !== 'active' && status !== 'ready' ?
            <div style={styles.instruction}>
              <div style={styles.instructionTitle}>Instruction</div>
              <div>
                This pass has expired.
                Purchase a new pass to gain access this gym.
              </div>
            </div> : ''
        }
      </div>
    </div>
  </div>
};

export default Radium(GymPass);