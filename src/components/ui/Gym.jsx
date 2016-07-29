import React from 'react';
import Radium from 'radium';
import ZeamoIcon from '../../images/layout/ZeamoIcon.svg';

const Gym = ({ src, title, dayPass, expiresIn, useBy, expired }) => {

  const boxStyle = expired ? [styles.gym, styles.gymExpired] : styles.gym;

  return <div style={boxStyle}>
    <div style={styles.gymImageBox}>
      <img src={src} style={styles.gymImage}/>
    </div>
    <div style={styles.gymInfoBox}>
      <div style={styles.gymInfoMain}>
        <div>
          <div style={styles.gymTitle}>{title}</div>
          <div style={styles.partner}>
            <img src={ZeamoIcon} style={styles.zeamoIcon} />
            <span style={styles.partnerDescription}>Zaemo Partner</span>
          </div>
          {
            expiresIn || useBy || expired ?
                <div style={styles.dayPass}>Day pass</div> : ''
          }
        </div>
        <div style={styles.position}>
          <span style={styles.positionText}>2.1mi</span>
          <span style={styles.positionText}>Mission Valley</span>
          <span style={styles.positionText}>Open now</span>
        </div>
      </div>
      <div style={styles.gymInfoExtra}>
        {
          dayPass ?
            <div style={styles.cost}>
              <div style={styles.costDescription}>Day pass</div>
              <div style={styles.costAmount}>{dayPass}</div>
            </div> : ''
        }
        {
          expiresIn ?
            <div>
              <div style={styles.expiresDescription}>Expires in:</div>
              <div style={styles.expiresAmount}>
                {`${expiresIn.hours}h ${expiresIn.minutes}m ${expiresIn.seconds}s`}
              </div>
            </div> : ''
        }
        {
          useBy ?
            <div>
              <div style={styles.useDescription}>Use by:</div>
              <div style={styles.useAmount}>{useBy}</div>
            </div> : ''
        }
        {
          expired ?
            <div>
              <div style={styles.expiredDescription}>Expired:</div>
              <div style={styles.expiredValue}>{expired}</div>
            </div> : ''
        }
        <div style={styles.feedback}>
          <div style={styles.feedbackNumber}>(555)555-5555</div>
          <div>5555 Graphes Rd, San Diego, CA 92510</div>
        </div>
      </div>
    </div>
  </div>
};

const styles = {
  gym: {
    fontFamily: 'Ubuntu',
    width: '100%',
    '@media (min-width: 770px)': {
      background: 'white',
      marginBottom: '10px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      display: 'flex',
      height: '125px',
    }
  },
  gymExpired: {
    opacity: '0.6',
  },
  gymImageBox: {
    '@media (min-width: 770px)': {
      width:'181px',
    }
  },
  gymImage: {
    width: '100%',
    '@media (min-width: 770px)': {
      height:'125px',
    }
  },
  gymInfoBox: {
    display: 'flex',
    flex: '1',
    padding: '2% 3% 1.8%',
    '@media (min-width: 770px)': {
      padding: '10px 15px',
    }
  },
  gymInfoMain: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: '1',
  },
  gymInfoExtra: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    textAlign: 'right',
    color: '#666666',

    '@media (max-width: 770px)':{
      justifyContent: 'flex-end',
    },
  },
  gymTitle: {
    marginBottom: '2%',
    color: '#031021',
    fontWeight: '500',
    fontSize: '17px',
  },
  partner: {
    fontSize: '13px',
    marginBottom: '6px',
    display: 'flex',
  },
  zeamoIcon: {
    width: '14px',
    height: '14px',
    margin: 'auto 1.5% auto 0',
  },
  partnerDescription: {
    color: '#666666',
  },
  position: {
    fontSize: '13px',
    color: '#666666',
    fontWeight: '300',
  },
  positionText: {
    marginRight: '10px',
    '@media (max-width: 1024px)':{
      marginRight: '5px',
    },
  },
  costDescription: {
    fontSize: '13px',
    fontWeight: '300',

    '@media (min-width: 770px)': {
      display: 'inline-block',
      marginRight: '5px',
    }
  },
  costAmount: {
    color: 'black',
    fontSize: '24px',
    fontWeight: '500',

    '@media (min-width: 770px)': {
      display: 'inline-block',
    },
  },
  feedback: {
    fontSize: '13px',
    '@media (max-width: 970px)': {
      display: 'none',
    },
  },
  feedbackNumber: {
    marginBottom: '6px',
  },
  contentPasses: {
    '@media (min-width: 770px)': {
      flex: '0.83',
    }
  },
  expiresDescription: {
    color: '#666666',
    fontSize: '13px',
    '@media (min-width: 770px)': {
      display: 'inline-block',
      marginRight: '5px',
    }
  },
  expiresAmount: {
    color: 'black',
    fontWeight: '500',
    fontSize: '17px',
    '@media (min-width: 770px)': {
      display: 'inline-block',
    }
  },
  useDescription: {
    color: '#666666',
    fontSize: '13px',
    '@media (min-width: 770px)': {
      display: 'inline-block',
      marginRight: '5px',
    }
  },
  useAmount: {
    fontSize: '13px',
    color: '#999999',
    '@media (min-width: 770px)': {
      display: 'inline-block',
    }
  },
  expiredDescription:{
    color: '#666666',
    fontSize: '13px',
    '@media (min-width: 770px)': {
      display: 'inline-block',
      marginRight: '5px',
    }
  },
  expiredValue: {
    fontSize: '13px',
    color: '#999999',
    '@media (min-width: 770px)': {
      display: 'inline-block',
    }
  },
  dayPass: {
    fontSize: '13px',
    color: '#666666',
  },
};

export default Radium(Gym);