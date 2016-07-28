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

const expiresIn = {
  hours: '23',
  minutes: '15',
  seconds: '10',
};

const MyPasses = () => {
  return (
    <div>
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
    </div>
  );
};

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    '@media (min-width: 770px)': {
      maxWidth: '700px',
      margin: '0 auto',
    },
    '@media (min-width: 960px)': {
      maxWidth: '820px',
      margin: '0 auto',
    },
    '@media (min-width: 1440px)': {
      maxWidth: '1040px',
      margin: '0 auto',
    },
  },
  wrapperDesktop: {
    background: '#f2f2f2',
    '@media (min-width: 770px)': {
      minHeight: '100vh',
      paddingBottom: '40px',
    },
    '@media (max-width: 770px)': {
      display: 'none',
    },
  },
  changer: {
    alignSelf: 'flex-end',
    marginBottom: '10px',
    minWidth: '120px',
  },
  underline: {
    borderColor: 'rgba(72, 119, 249, 0.7)',
  },
  icon: {
    fill: '#4877f9',
  },
  wrapperMobile: {
    '@media (min-width: 770px)': {
      display: 'none',
    },
  },
  appBar: {
    backgroundColor: '#162233',
  },
  tabs: {
    backgroundColor: '#162233',
    borderWidth: '4px',
  },
  tabWrapper: {
    background: 'white',
    padding: '0 2%',
  },
  gymBox: {
    padding: '15px 1%',
    borderBottom: '1px solid #d9d9d9',
  },
};

export default Radium(MyPasses);