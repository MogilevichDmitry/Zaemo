import React from 'react';
import Radium from 'radium';
import ZeamoIcon from '../../../../images/layout/ZeamoIcon.svg';
import FlagButton from 'material-ui/FlatButton';

const GymPass = ({ src, title, status, }) =>  {
  return <div style={styles.wrapper}>
    <div style={styles.gym}>
      <div style={styles.gymImageBox}>
        <img src={src} style={styles.gymImage} />
      </div>

      <div style={styles.gymInfo}>
        <div>
          <div style={styles.gymTitle}>{title}</div>
          <div style={styles.partner}>
            <img src={ZeamoIcon} style={styles.zeamoIcon} />
            <span>Zaemo Partner</span>
          </div>
        </div>
        <div style={styles.gymContact}>
          <div>
            <div>5555 Graphes Rd, 92510</div>
            <div>San Diego, CA</div>
          </div>
          <div style={styles.gymContactNumber}>(555)555-5555</div>
        </div>
      </div>
      <div style={styles.gymButton}>
        <FlagButton label="VIEW GYM" primary={true} />
      </div>
    </div>

    <div style={styles.pass}>
      <h1 style={styles.passTitle}>Pass Information</h1>

      <div style={styles.options}>
        <div>
          <div style={styles.optionName}>Type of pass</div>
          <div style={styles.optionValue}>Day</div>
        </div>

        <div>
          <div style={styles.optionName}>Duration of pass</div>
          <div style={styles.optionValue}>Time of activation-midnight</div>
        </div>

        {
          status === 'ready' ?
            <div>
              <div style={styles.optionName}>Use by:</div>
              <div style={styles.optionValue}>6/2/2017</div>
            </div> : ''
        }
        {
          status === 'active' || (status !== 'active' && 'ready') ?
            <div>
              <div style={styles.optionName}>Purchased</div>
              <div style={styles.optionValue}>6/2/2016</div>
            </div> : ''
        }

        {
          status === 'active' ?
            <div>
              <div style={styles.optionName}>Status</div>
              <div style={styles.optionValue}>Active</div>
            </div> : ''
        }
        {
          status === 'ready' ?
            <div>
              <div style={styles.optionName}>Status</div>
              <div style={styles.optionValue}>Ready to use</div>
            </div> : ''
        }
        {
          status !== 'active' && status !== 'ready' ?
            <div>
              <div style={styles.optionName}>Status</div>
              <div style={styles.optionValue}>{status}</div>
            </div> : ''
        }
      </div>

      <div style={styles.instruction}>
        {
          status === 'active' || status === 'ready' ?
            <div>
              <div style={styles.optionName}>Instruction</div>
              <div style={styles.optionValue}>
                Show this screen to the gym representative to get checked in and activate the pass
                Once activated, count down cannot be paused.
              </div>
            </div> : ''
        }
        {
          status !== 'active' && status !== 'ready' ?
            <div>
              <div style={styles.optionName}>Instruction</div>
              <div style={styles.optionValue}>
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
  wrapper: {
    paddingRight: '50px',
    marginBottom: '20px',
  },
  gym: {
    display: 'flex',
    marginBottom: '20px',
  },
  gymImageBox: {
    width: '140px',
  },
  gymImage: {
    width: '100%',
  },
  gymInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    padding: '10px 20px 5px',
  },
  gymTitle: {
    marginBottom: '5px',
    color: '#031021',
    fontWeight: '500',
    fontSize: '17px',
  },
  partner: {
    display: 'flex',
    fontSize: '13px',
    color: '#666666',
    fontWeight: '500',
  },
  zeamoIcon: {
    width: '14px',
    height: '14px',
    margin: 'auto 1.5% auto 0',
  },
  gymContact: {
    fontSize: '14px',
    color: '#666666',
  },
  gymContactNumber: {
    marginTop: '6px',
  },
  gymButton: {
    alignSelf: 'flex-end',
    margin: '0 auto',
  },
  pass: {
    display: 'flex',
    flexDirection: 'column',
  },
  passTitle: {
    fontSize: '17px',
    color: 'black',
    fontWeight: '500',
    marginBottom: '10px',
  },
  options: {
    display: 'flex',
    fontSize: '13px',
    justifyContent: 'space-between',
  },
  instruction: {
    marginTop: '30px',
    fontSize: '13px',
  },
  optionName: {
    color: '#999999',
    marginBottom: '15px',
  },
  optionValue: {
    color: '#666666',
  },
};

export default Radium(GymPass);