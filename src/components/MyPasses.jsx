import React from 'react';
import Radium from 'radium';
import AppBar from 'material-ui/AppBar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Header from './ui/Desktop/Header.jsx';
import Gym from './ui/Gym.jsx';
import GymMobile from './ui/Mobile/Gym.jsx';
import {Tabs, Tab} from 'material-ui/Tabs';

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
    <div style={styles.wrapper}>
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
      {/*
       <AppBar title="My Passes" />
       <Tabs style={{background: 'blue'}}>
       <Tab label="New">
       <div style={{background: 'white'}}>
       <GymMobile src={gymA} title="Gym A" />
       <GymMobile src={gymA} title="Aqua Gym" partner={false} />
       </div>
       </Tab>
       <Tab label="Active" />
       <Tab label="Expired" />
       </Tabs>
      */}
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
  wrapper: {
    background: '#f2f2f2',
    '@media (min-width: 770px)': {
      minHeight: '100vh',
      paddingBottom: '40px',
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
};

export default Radium(MyPasses);