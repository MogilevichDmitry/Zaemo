import React from 'react';
import Radium from 'radium';

import ZeamoIcon from '../../../images/layout/ZeamoIcon.svg';
import LocationOn from 'material-ui/svg-icons/communication/location-on';

const Gym = ({ src, title, partner }) => {
  return <div style={styles.gym}>
    <div style={styles.gymImageBox}>
      <img src={src} style={styles.gymImage}/>
    </div>

    <div>
      <div>
        <div style={styles.gymTitle}>{title}</div>
        <div>Day pass</div>
      </div>
      
      {
        partner === false ?
          '' :
          <div style={styles.partner}>
            <img src={ZeamoIcon} style={styles.zeamoIcon} />
            <span style={styles.partnerDescription}>Zaemo Partner</span>
          </div>
      }

      <div style={styles.feedback}>
        <LocationOn />
        <div>5555 Graphes Rd, San Diego, CA 92510</div>
      </div>

      <div>
        <span>2.1mi</span>
        <span>Use by: 6/2/2017</span>
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