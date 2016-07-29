import React from 'react';
import Radium from 'radium';
import ZeamoIcon from '../../images/layout/ZeamoIcon.svg';
import { uiGym } from '../../styles';

const styles = uiGym;

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

export default Radium(Gym);