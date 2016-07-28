import React from 'react';
import Radium from 'radium';
import GymPass from './GymPass.jsx';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import background from '../../../../images/layout/myPassesBg.jpg';
import gymA from '../../../../images/content/gymMyPass.jpg';

const Expired = () => {
  return <div style={styles.wrapper}>
    <GymPass
      src={gymA}
      barTitle="Active pass"
      gymTitle="GymA"
      status="Expired 2 days ago"
    />

    <div style={styles.statusWrapper}>
      <div style={styles.buttonBox}>
        <RaisedButton label="Purchase Again" primary={true} fullWidth={true} />
      </div>

      <div>
        <div style={styles.statusTitle}>Other available passes</div>

        <div style={styles.passSelect}>
          <div>
            <div style={styles.passSelectTitle}>Month pass</div>
            <div>
              <span>Price: </span>
              <span style={styles.passSelectCost}>$50.00 dlls</span>
            </div>
          </div>
          <FlatButton
            label="select"
            primary={true}
            style={styles.passSelectButton}
          />
        </div>
        <div style={styles.passSelect}>
          <div>
            <div style={styles.passSelectTitle}>Annual pass</div>
            <div>
              <span>Price: </span>
              <span style={styles.passSelectCost}>$50.00 dlls</span>
            </div>
          </div>
          <FlatButton
            label="select"
            primary={true}
            style={styles.passSelectButton}
          />
        </div>
      </div>
    </div>
  </div>;
};

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    minHeight: '100vh',
    fontFamily: 'Ubuntu',
    paddingBottom: '25px',
  },
  statusWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '0 5px',
    fontSize: '13px',
    color: '#cccccc',
  },
  buttonBox: {
    width: '60%',
    margin: '0 auto 20px',
  },
  statusTitle: {
    padding: '0 20px 15px',
    borderBottom: '1px solid #9a918a',
  },
  passSelect: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '15px 20px',
    borderBottom: '1px solid #9a918a',
  },
  passSelectTitle: {
    margin: 'auto 0',
    color: 'white',
  },
  passSelectCost: {
    margin: 'auto 10px auto 2px',
    color: 'white',
  },
  passSelectButton: {
    margin: 'auto 0',
  },
};

export default Radium(Expired);