import React from 'react';
import Radium from 'radium';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Tabs from '../Tabs.jsx';
import Tab from '../Tab.jsx';

import ZeamoLogo from '../../../images/layout/ZeamoLogo.svg';
import ArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down';

import avatar from '../../../images/content/avatar.png';

function Header({ search, sort }) {
  return  <div style={styles.header}>
    <div style={styles.topBar}>
      <div style={styles.main}>
        <div style={styles.headerBar}>
          <div style={styles.logo}>
            <img src={ZeamoLogo} />
          </div>
          <div style={styles.profile}>
            <span style={styles.profileName}>Frank Hill</span>
            <IconButton>
              <ArrowDropDown color={'#4877f9'} />
            </IconButton>

            <Avatar src={avatar} style={styles.avatar} />

          </div>
        </div>
      </div>
    </div>

    <div style={styles.bottomBar}>
      <div style={styles.main}>
        <div style={styles.headerBar}>
          <Tabs desktop={true}>
            <Tab label="Browse" desktop={true} active={true} />
            <Tab label="My passes" desktop={true} active={false} />
          </Tabs>

          <div style={styles.bottomBarAside}>
            {
              search === false ?
                '' :
                <TextField
                  hintText="Search"
                  hintStyle={styles.bottomBarSearchHint}
                  inputStyle={styles.bottomBarSearchInput}
                  underlineStyle={styles.bottomBarSearchUnderline}
                  style={styles.bottomBarSearch}
                />
            }

            {
              sort === false ?
                '' :
                <div style={styles.bottomBarSort}>
                  <span style={styles.bottomBarSortDescription}>Sort by:</span>
                  <SelectField
                    value={1}
                    underlineShow={false}
                    iconStyle={styles.sortIcon}
                    labelStyle={styles.bottomBarSortLabel}
                    style={styles.bottomBarSortButton}
                  >
                    <MenuItem value={1} primaryText="Name: A-Z" />
                    <MenuItem value={2} primaryText="Name: Z-A" />
                    <MenuItem value={3} primaryText="Cost" />
                    <MenuItem value={4} primaryText="Distance" />
                  </SelectField>
                </div>
            }
          </div>
        </div>
      </div>
    </div>
  </div>
}

const styles = {
  main: {
    '@media (min-width: 770px)': {
      maxWidth: '750px',
      margin: '0 auto',
    },
    '@media (min-width: 960px)': {
      maxWidth: '920px',
      margin: '0 auto',
    },
    '@media (min-width: 1366px)': {
      maxWidth: '1040px',
      margin: '0 auto',
    },
    '@media (min-width: 1440px)': {
      maxWidth: '1124px',
      margin: '0 auto',
    },
    '@media (min-width: 1600px)': {
      maxWidth: '1400px',
      margin: '0 auto',
    },
  },
  header: {
    '@media (max-width: 770px)': {
      display: 'none'
    }
  },
  topBar: {
    background: '#031021',
    padding: '10px 0 6px',
  },
  headerBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  logo: {
    width: '102px',
    display: 'table',
    margin: 'auto 0 auto 10px',
  },
  profile: {
    display:'flex',
    fontFamily: 'Ubuntu',
    color: 'white',
  },
  profileName: {
    margin: 'auto',
    fontSize: '17px',
  },
  avatar: {
    backgroundColor: 'none',
    margin: 'auto',
    width: '44px',
  },
  bottomBar: {
    background: '#15335c',
  },
  bottomBarAside: {
    display: 'flex',
    position: 'relative',
  },
  bottomBarSearchHint: {
    color: '#dce1e7',
    bottom: '17px',
  },
  bottomBarSearchInput: {
    color: 'white',
  },
  bottomBarSearchUnderline: {
    borderColor: '#8a99ae',
    bottom: '1px',
  },
  bottomBarSearch: {
    position: 'absolute',
    width: '150px',
    left: '-133px',
    bottom: '0',
  },
  bottomBarSort: {
    display: 'flex',
    fontFamily: 'Ubuntu',
  },
  bottomBarSortDescription: {
    color: '#dce1e7',
    margin: 'auto 10px auto 37px',
  },
  sortIcon: {
    fill: '#4877f9',
  },
  bottomBarSortButton: {
    width: 'auto',
    margin: 'auto',
  },
  bottomBarSortLabel: {
    color: 'white',
  },
};

export default Header = Radium(Header);
