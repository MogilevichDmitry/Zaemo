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
      iconElementLeft={
        <IconButton>
          <NavigationClose color={'#4877f9'} />
        </IconButton>
      }
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

const styles = {
  appBar: {
    background: 'none',
  },
  wrapper: {
    padding: '0 25px',
    fontFamily: 'Ubuntu',
  },
  gym: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  imageBox: {
    flex: '0.33',
  },
  image: {
    width: '100%',
  },
  gymInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    flex: '0.6',
  },
  gymTitle: {
    marginBottom: '3%',
    color: 'white',
    fontWeight: '500',
    fontSize: '17px',
  },
  partner: {
    fontSize: '13px',
    marginBottom: '2%',
    display: 'flex',
    color: '#cccccc',
  },
  zeamoIcon: {
    width: '14px',
    height: '14px',
    margin: 'auto 1.5% auto 0',
  },
  extraInfo: {
    color: 'white',
    fontSize: '13px',
  },
  options: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: '25px',
  },
  option: {
    marginRight: '30px',
    marginBottom: '20px',
    flex: 'none',
    '@media (max-width: 340px)': {
      flex: '0.5',
    },
  },
  optionName: {
    color: '#cccccc',
    marginBottom: '10px',
  },
  instruction: {
    margin:'5px 0 25px',
  },
  instructionTitle: {
    color: '#cccccc',
    marginBottom: '10px',
  },
};

export default Radium(GymPass);