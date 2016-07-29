import React from 'react';
import Radium from 'radium';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Header from './ui/Desktop/Header.jsx';
import Gym from './ui/Gym.jsx';
import GymMobile from './ui/Mobile/Gym.jsx';
import {Tabs, Tab} from 'material-ui/Tabs';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import gymReady from '../images/content/gymMyPass.jpg';
import gymExpired from '../images/content/gymMyPassExpired.jpg';
import gymActive from '../images/content/gymMyPassActive.jpg';
import { myPasses } from '../styles';

const styles = myPasses;

const expiresIn = {
  hours: '23',
  minutes: '15',
  seconds: '10',
};

const MyPasses = () => {
  return <div>
    <div style={styles.wrapperDesktop}>
      <Header />

      <div style={styles.main}>
        <DropDownMenu
          value={1}
          style={styles.changer}
          underlineStyle={styles.underline}
          iconStyle={styles.icon}
        >
          <MenuItem value={1} primaryText="All" />
          <MenuItem value={2} primaryText="Active" />
          <MenuItem value={3} primaryText="Ready to use" />
          <MenuItem value={4} primaryText="Expired" />
        </DropDownMenu>
        <div>
          <Gym src={gymReady} title="Gym A" expiresIn={expiresIn} />
          <Gym src={gymActive} title="Gym ABC" useBy="6/2/17" />
          <Gym src={gymExpired} title="Gym ACD" expired="2 days ago" />
        </div>
      </div>
    </div>

    <div style={styles.wrapperMobile}>
      <AppBar
        title="My Passes"
        style={styles.appBar}
        iconElementLeft={<IconButton><MenuIcon color={'#4877f9'} /></IconButton>}
        zDepth={0}
      />
      <Tabs style={styles.tabs}>
        <Tab label="New">
          <div style={styles.tabWrapper}>
            <div style={styles.gymBox}>
              <GymMobile src={gymReady} title="Gym A" />
            </div>
            <div style={styles.gymBox}>
              <GymMobile src={gymActive} title="Aqua Gym" partner={false} />
            </div>
          </div>
        </Tab>
        <Tab label="Active" />
        <Tab label="Expired" />
      </Tabs>
    </div>
  </div>;
};

export default Radium(MyPasses);