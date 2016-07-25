import React from 'react';
import Radium from 'radium';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import ZeamoLogo from '../../../images/layout/ZeamoLogo.svg';
import ArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down';

import avatar from '../../../images/content/avatar.png';

function Header({ search, sort }) {
  return  <div style={styles.headerDesktop}>
    <div style={styles.headerTopBar}>
      <div style={styles.main}>
        <div style={styles.headerBar}>
          <div style={styles.headerLogo}>
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

    <div style={styles.headerBottomBar}>
      <div style={styles.main}>
        <div style={styles.headerBar}>
          <div style={styles.tabs}>
            <div key="tab1" style={[styles.tab, styles.tabActive]}>Browse</div>
            <div key="tab2" style={styles.tab}>My Passes</div>
          </div>

          <div style={styles.headerBottomBarAside}>
            {
              search === false ?
                '' :
                <TextField
                  hintText="Search"
                  hintStyle={styles.headerBottomBarSearchHint}
                  inputStyle={styles.headerBottomBarSearchInput}
                  underlineStyle={styles.headerBottomBarSearchUnderline}
                  style={styles.headerBottomBarSearch}
                />
            }

            {
              sort === false ?
                '' :
                <div style={styles.headerBottomBarSort}>
                  <span style={styles.headerBottomBarSortDescription}>Sort by:</span>
                  <SelectField
                    value={1}
                    underlineShow={false}
                    iconStyle={styles.sortIcon}
                    labelStyle={styles.headerBottomBarSortLabel}
                    style={styles.headerBottomBarSortButton}
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
  headerDesktop: {
    '@media (max-width: 770px)': {
      display: 'none'
    }
  },
  headerTopBar: {
    background: '#031021',
    padding: '10px 0 6px',
  },
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
  headerBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  headerLogo: {
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
  headerBottomBar: {
    background: '#15335c',
  },
  tabs: {
    fontFamily: 'Ubuntu',
    fontSize: '16px',
    color: '#dce1e7'
  },
  tab: {
    display: 'inline-block',
    height: '100%',
    padding: '15px 45px 18px',
    cursor: 'pointer',
    ':hover': {
      color: 'white',
    },
  },
  tabActive: {
    color: 'white',
    borderBottom: '5px solid #4877f9',
    fontWeight: '500',
  },
  headerBottomBarAside: {
    display: 'flex',
    position: 'relative',
  },
  headerBottomBarSearchHint: {
    color: '#dce1e7',
    bottom: '17px',
  },
  headerBottomBarSearchInput: {
    color: 'white',
  },
  headerBottomBarSearchUnderline: {
    borderColor: '#8a99ae',
    bottom: '1px',
  },
  headerBottomBarSearch: {
    position: 'absolute',
    width: '150px',
    left: '-133px',
    bottom: '0',
  },
  headerBottomBarSort: {
    display: 'flex',
    fontFamily: 'Ubuntu',
  },
  headerBottomBarSortDescription: {
    color: '#dce1e7',
    margin: 'auto 10px auto 37px',
  },
  sortIcon: {
    fill: '#4877f9',
  },
  headerBottomBarSortButton: {
    width: 'auto',
    margin: 'auto',
  },
  headerBottomBarSortLabel: {
    color: 'white',
  },
};

export default Header = Radium(Header);
