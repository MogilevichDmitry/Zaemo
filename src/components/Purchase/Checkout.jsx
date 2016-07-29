import React from 'react';
import Radium from 'radium';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';

import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Create from 'material-ui/svg-icons/content/create';
import ZeamoIcon from '../../images/layout/ZeamoIcon.svg';

import background from '../../images/layout/myPassesBg.jpg';

const Checkout = () => {
  return <div style={styles.wrapper}>
    <AppBar
      title="Checkout"
      iconElementLeft={<IconButton><NavigationClose color={'#4877f9'} /></IconButton>}
      iconElementRight={<p style={styles.appBarLeftInfo}>Step 3 of 3 </p>}
      zDepth={0}
      iconStyleRight={styles.appBarRightIcon}
      style={styles.appBar}
    />
    
    <div style={styles.main}>
      <div style={styles.passInfo}>
        <div style={styles.heading}>
          <span style={styles.headingText}>Pass information</span>
          <IconButton><Create color={'#4877f9'} /></IconButton>
        </div>

        <div style={styles.options}>
          <div style={styles.option}>
            <div style={styles.optionName}>Duration of pass</div>
            <div style={styles.optionValue}>Time of activation - midnight</div>
          </div>

          <div style={styles.option}>
            <div style={styles.optionName}>Price</div>
            <div style={styles.optionValue}>$15.00 dlls</div>
          </div>

          <div style={styles.option}>
            <div style={styles.optionName}>Use by</div>
            <div style={styles.optionValue}>6/2/2017</div>
          </div>
        </div>
        <div>
          <div style={styles.optionName}>Gym information</div>

          <div>
            <div>Friars Pilates Studio</div>
            <div style={styles.partner}>
              <img src={ZeamoIcon} style={styles.zeamoIcon} />
              <span>Zaemo Partner</span>
            </div>
          </div>

          <div>
            <p>5555 Graphes Rd, 92510</p>
            <p>San Diego, CA</p>
          </div>

          <div style={styles.number}>(555)555-5555</div>
        </div>
      </div>

      <div>
        <div style={styles.heading}>
          <span style={styles.headingText}>Payment information</span>
          <IconButton><Create color={'#4877f9'} /></IconButton>
        </div>

        <div>
          <div style={styles.options}>
            <div style={styles.option}>
              <div style={styles.optionName}>Name</div>
              <div style={styles.optionValue}>John Smith</div>
            </div>
          </div>

          <div style={styles.optionsFlexStart}>
            <div style={styles.optionFlexStart}>
              <div style={styles.optionName}>Card number</div>
              <div style={styles.optionValue}>*******5555</div>
            </div>

            <div style={styles.option}>
              <div style={styles.optionName}>Exp. date</div>
              <div style={styles.optionValue}>06/18</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <RaisedButton label="Submit" primary={true} fullWidth={true} />
  </div>
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
    color: 'white',
    fontSize: '13px',
  },
  appBar: {
    background: 'none',
  },
  appBarLeftInfo: {
    fontSize: '13px',
    color: '#cccccc',
  },
  appBarRightIcon: {
    margin: 'auto',
  },
  main: {
    flex: '1',
    padding: '0 10px',
  },
  passInfo: {
    marginBottom: '20px',
  },
  heading: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '17px',
    marginBottom: '15px',
    borderBottom: '1px solid white',
  },
  headingText: {
    alignSelf: 'center',
  },
  options: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  optionsFlexStart: {
    display: 'flex',
  },
  option: {
    marginRight: '20px',
    marginBottom: '20px',
  },
  optionFlexStart: {
    marginRight: '50px',
    marginBottom: '20px',
  },
  optionName: {
    color: '#cccccc',
    marginBottom: '10px',
  },
  partner: {
    margin: '5px 0 13px',
  },
  zeamoIcon: {
    width: '14px',
    height: '14px',
    margin: 'auto 1.5% auto 0',
  },
  number: {
    marginTop: '13px',
  }
};

export default Radium(Checkout);