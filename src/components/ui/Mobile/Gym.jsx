import React from 'react';
import Radium from 'radium';
import ZeamoIcon from '../../../images/layout/ZeamoIcon.svg';
import LocationOn from 'material-ui/svg-icons/communication/location-on';
import { uiMobileGym } from '../../../styles';

const styles = uiMobileGym;

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

export default Radium(Gym);