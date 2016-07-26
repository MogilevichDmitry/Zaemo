import React from 'react';
import Radium from 'radium';
import ZeamoIcon from '../../images/layout/ZeamoIcon.svg';

const Gym = ({ src, title, dayPass, expiresIn, useBy, expired }) => {
  return <div style={styles.gym}>
    <div style={styles.gymImageBox}>
      <img src={src} style={styles.gymImage}/>
    </div>
    <div style={styles.gymInfoBox}>
      <div style={styles.gymInfoMain}>
        <div>
          <div style={styles.gymTitle}>{title}</div>
          {
            dayPass ?
              <div style={styles.partner}>
                <img src={ZeamoIcon} style={styles.zeamoIcon} />
                <span style={styles.partnerDescription}>Zaemo Partner</span>
              </div> : ''
          }
          {
            expiresIn || useBy || expired ?
              <div style={styles.partner}>
                <img src={ZeamoIcon} style={styles.zeamoIcon} />
                <span style={styles.partnerDescription}>Zaemo Partner</span>
                <div>Day pass</div>
              </div> : ''
          }
        </div>
        <div style={styles.position}>
          <span style={styles.positionText}>2.1mi</span>
          <span style={styles.positionText}>Mission Valley</span>
          <span style={[styles.positionText, styles.positionLink]}>Open now</span>
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
            <div style={styles.cost}>
              <div style={styles.costDescription}>Expires in:</div>
              <div style={styles.costAmount}>
                {`${expiresIn.hour}h ${expiresIn.minutes}m ${expiresIn.seconds}s`}
              </div>
            </div> : ''
        }
        {
          useBy ?
            <div style={styles.cost}>
              <div style={styles.costDescription}>Use by:</div>
              <div style={styles.costAmount}>{useBy}</div>
            </div> : ''
        }
        {
          expired ?
            <div style={styles.cost}>
              <div style={styles.costDescription}>Expired:</div>
              <div style={styles.costAmount}>{expired}</div>
            </div> : ''
        }
        <div style={styles.feedback}>
          <div style={styles.feedbackNumber}>(555)555-5555</div>
          <div>5555 Graphes Rd, San Diego, CA 92510</div>
        </div>
      </div>
    </div>
  </div>
}

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
    padding: '2.5% 3% 1.5%',

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
  position: {
    fontSize: '14px',
    color: '#666666',
    fontWeight: '300',
    opacity: '0.7',
  },
  positionText: {
    marginRight: '10px',
    '@media (max-width: 1024px)':{
      marginRight: '5px',
    },
  },
  costDescription: {
    fontSize: '14px',
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
    fontSize: '14px',
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
};

export default Radium(Gym);