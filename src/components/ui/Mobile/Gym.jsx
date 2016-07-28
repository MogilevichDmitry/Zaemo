import React from 'react';
import Radium from 'radium';

import ZeamoIcon from '../../../images/layout/ZeamoIcon.svg';
import LocationOn from 'material-ui/svg-icons/communication/location-on';

const Gym = ({ src, title, partner }) => {
  return <div style={styles.gym}>
    <div style={styles.imageBox}>
      <img src={src} style={styles.image}/>
    </div>

    <div style={styles.infoBox}>
      <div style={styles.boxColumn}>
      <div style={styles.boxRow}>
        <div style={styles.title}>{title}</div>
        <div>Day pass</div>
      </div>

        <div>
          {
            partner === false ?
              '' :
              <div style={styles.partner}>
                <img src={ZeamoIcon} style={styles.zeamoIcon} />
                <span>Zaemo Partner</span>
              </div>
          }

          <div style={styles.location}>
            <LocationOn style={styles.locationIcon} />
            <span style={styles.locationDecription}>5555 Graphes Rd, San Diego, CA 92510</span>
          </div>
        </div>
      </div>

      <div style={styles.boxRow}>
        <span>2.1mi</span>
        <span>
          <span>Use by: </span>
          <span style={styles.date}>6/2/2017</span>
        </span>
      </div>
    </div>
  </div>
};

const styles = {
  gym: {
    fontFamily: 'Ubuntu',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  imageBox: {
   flex: '0.25',
  },
  image: {
    width: '100%',
  },
  infoBox: {
    display: 'flex',
    flex: '0.715',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  boxRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '13px',
    color: '#999999',
  },
  boxColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    marginBottom: '6px',
    color: '#4d4d4d',
    fontWeight: '500',
    fontSize: '17px',
  },
  partner: {
    display: 'flex',
    fontSize: '13px',
    marginBottom: '4px',
    color: '#666666',
  },
  zeamoIcon: {
    width: '14px',
    height: '14px',
    margin: 'auto 1.5% auto 0',
  },
  location: {
    display: 'flex',
    fontSize: '13px',
    color: '#999999',
    marginBottom: '4px',
  },
  locationIcon: {
    fill: '#4877f9',
    width: '17px',
    height: '17px',
    margin: 'auto 1% auto -1.2px',
  },
  locationDecription: {
    margin: 'auto 0',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    '@media (max-width: 370px)': {
      width: '180px',
    }
  },
  date: {
    color: '#4d4d4d',
    fontWeight: '500',
  },
};

export default Radium(Gym);