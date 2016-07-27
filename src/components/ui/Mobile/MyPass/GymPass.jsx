import React from 'react';
import Radium from 'radium';
import ZeamoIcon from '../../../../images/layout/ZeamoIcon.svg';
import FlagButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';

const GymPass = ({ src, barTitle, status, gymTitle }) =>  {
  return <div>
    <AppBar
      title={barTitle}
      showMenuIconButton={false}
      iconElementRight={
        <IconButton>
          <NavigationClose color={'#4877f9'} />
        </IconButton>
      }
    />

    <div>
      <div>
        <img src={src} style={{width: '400px', height: '100px'}}/>
      </div>

      <div>
        <div style={styles.gymTitle}>{gymTitle}</div>
        <div style={styles.partner}>
          <img src={ZeamoIcon} style={styles.zeamoIcon} />
          <span style={styles.partnerDescription}>Zaemo Partner</span>
        </div>
      </div>

      <FlagButton label="VIEW GYM" primary={true} />
    </div>

    <div>
      <div>
        <div>Type of pass</div>
        <div>Day pass</div>
      </div>

      <div>
        <div>Purchased</div>
        <div>6/2/2016</div>
      </div>

      {
        status === 'ready' ?
          <div>
            <div>Use by:</div>
            <div>6/2/2017</div>
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
        status === 'ready' ?
          <div>
            <div>Instruction</div>
            <div>
              Show this screen to the gym representative to get checked in and activate the pass.
              Once activated, count down cannot be paused.
            </div>
          </div> : ''
      }
      {
        status === 'active' ?
          <div>
            <div>Instruction</div>
            <div>
              Show this screen to the gym representative.
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
}

const styles = {
  gymTitle: {
    marginBottom: '2%',
    color: '#031021',
    fontWeight: '500',
    fontSize: '18px',
  },
  partner: {
    fontSize: '14px',
    marginBottom: '2%',
    display: 'flex',
    '@media (min-width: 770px)':{
      marginBottom: '6px',
    },
  },
  zeamoIcon: {
    width: '14px',
    height: '14px',
    margin: 'auto 1.5% auto 0',
  },
  partnerDescription: {
    color: '#666666',
  },
};

export default Radium(GymPass);