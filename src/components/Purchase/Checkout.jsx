import React from 'react';
import Radium from 'radium';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Create from 'material-ui/svg-icons/content/create';
import ZeamoIcon from '../../images/layout/ZeamoIcon.svg';
import { puchaseCheckout } from '../../styles';

const styles = puchaseCheckout;

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

export default Radium(Checkout);