import React from 'react';
import Radium from 'radium';
import ModalWindow from '../ModalWindow.jsx';
import GymPass from './GymPass.jsx';
import RaisedButton from 'material-ui/RaisedButton';

import gym from '../../../../images/content/gymMyPassExpired.jpg';

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

const styles = {
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
  purchaseBoxHeading: {
    fontSize: '13px',
    color: '#999999',
  },
  purchase: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  purchaseMain: {
    flex: '0.35'
  },
  purchaseTitle: {
    fontSize: '17px',
    fontWeight: '500',
    color: 'black',
  },
  purchaseParam: {
    fontSize: '14px',
    color: '#999999',
  },
  purchaseParamValue: {
    marginTop: '8px',
    fontSize: '13.5px',
  },
  purchaseDescription: {
    marginTop: '8px',
    fontSize: '12.5px',
  },
  purchaseOption: {
    flex: '0.6',
    display: 'flex',
    justifyContent: 'space-between',
  },
  purchaseButtonLabel: {
    fontSize: '16px',
    fontWeight: '400',
    textTransform: 'none',
    padding: '10px 23px'
  },
};

export default Radium(Expired);