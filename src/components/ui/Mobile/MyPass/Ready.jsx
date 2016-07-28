import React from 'react';
import Radium from 'radium';
import GymPass from './GymPass.jsx';
import RaisedButton from 'material-ui/RaisedButton';

import background from '../../../../images/layout/myPassesBg.jpg';
import gymA from '../../../../images/content/gymMyPass.jpg';

const Ready = () => {
  return <div style={styles.wrapper}>
    <GymPass
      src={gymA}
      barTitle="New day pass"
      gymTitle="GymA"
      status="ready"
    />

    <div style={styles.statusWrapper}>
      <div style={styles.description}>
        Pass will activate and count down to expiration will begin
        when pressing "Check in"
      </div>
      <div style={styles.buttonBox}>
        <RaisedButton label="Activate" primary={true} fullWidth={true} />
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
    padding: '0 30px',
    textAlign: 'center',
  },
  description: {
    fontSize: '13px',
    color: '#cccccc',
    marginBottom: '15px',
  },
  buttonBox: {
    width: '100%',
    margin: '0 auto',
    '@media (min-width: 480px)': {
      width: '65%',
    },
  }
};

export default Radium(Ready);