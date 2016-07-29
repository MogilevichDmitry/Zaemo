import React from 'react';
import Radium from 'radium';
import ModalWindow from '../ModalWindow.jsx';
import GymPass from './GymPass.jsx';
import RaisedButton from 'material-ui/RaisedButton';
import gym from '../../../../images/content/gymMyPassExpired.jpg';
import { uiDesktopMyPassExpired } from '../../../../styles';

const styles = uiDesktopMyPassExpired;

const Expired = () => {
  return <ModalWindow title="Expired pass" open={true}>
    <div style={styles.wrapper}>
      <GymPass
        src={gym}
        title="GymA"
        status="Expired 2 days ago"
      />

      <div>
        <div style={styles.purchaseBoxHeading}>Purchase a new pass</div>
        <div style={styles.purchase}>
          <div style={styles.purchaseMain}>
            <div style={styles.purchaseTitle}>Day pass</div>
            <div style={styles.purchaseDescription}>Time of activation - midnight</div>
          </div>
          <div style={styles.purchaseOption}>
            <di>
              <div style={styles.purchaseParam}>Price</div>
              <div style={styles.purchaseParamValue}>$15.00 dlls</div>
            </di>
            <div>
              <div style={styles.purchaseParam}>Use by:</div>
              <div style={styles.purchaseParamValue}>6/2/2017</div>
            </div>
            <div>
              <RaisedButton
                label="Purchase"
                primary={true}
                labelStyle={styles.purchaseButtonLabel}
              />
            </div>
          </div>
        </div>

        <div style={styles.purchase}>
          <div style={styles.purchaseMain}>
            <div style={styles.purchaseTitle}>Month pass</div>
            <div style={styles.purchaseDescription}>30 days</div>
          </div>
          <div style={styles.purchaseOption}>
            <div>
              <div style={styles.purchaseParam}>Price</div>
              <div style={styles.purchaseParamValue}>$50.00 dlls</div>
            </div>
            <div>
              <div style={styles.purchaseParam}>Use by:</div>
              <div style={styles.purchaseParamValue}>6/2/2017</div>
            </div>
            <div>
              <RaisedButton
                label="Purchase"
                primary={true}
                labelStyle={styles.purchaseButtonLabel}
              />
            </div>
          </div>
        </div>

        <div style={styles.purchase}>
          <div style={styles.purchaseMain}>
            <div style={styles.purchaseTitle}>Year pass</div>
            <div style={styles.purchaseDescription}>365 days</div>
          </div>
          <div style={styles.purchaseOption}>
            <div>
              <div style={styles.purchaseParam}>Price</div>
              <div style={styles.purchaseParamValue}>$500.00 dlls</div>
            </div>
            <div>
              <div style={styles.purchaseParam}>Use by:</div>
              <div style={styles.purchaseParamValue}>6/2/2017</div>
            </div>
            <div>
              <RaisedButton
                label="Purchase"
                primary={true}
                labelStyle={styles.purchaseButtonLabel}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </ModalWindow>;
};

export default Radium(Expired);