import React from 'react';
import Radium from 'radium';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import Tabs from '../Tabs.jsx';
import Tab from '../Tab.jsx';
import ZeamoLogo from '../../../images/layout/ZeamoLogo.svg';
import ArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down';
import avatar from '../../../images/content/avatar.png';
import { uiDesktopHeader } from '../../../styles';

const styles = uiDesktopHeader;

const Header = ({ search, sort }) => {
  return  <div style={styles.header}>
    <div style={styles.topBar}>
      <div style={styles.main}>
        <div style={styles.headerBar}>
          <div style={styles.logo}>
            <img src={ZeamoLogo} />
          </div>
          <div style={styles.profile}>
            <span style={styles.profileName}>Frank Hill</span>
            <IconMenu
              iconButtonElement={
                <IconButton><ArrowDropDown color={'#4877f9'} /></IconButton>
              }
              anchorOrigin={{horizontal: 'middle', vertical: 'bottom'}}
              targetOrigin={{horizontal: 'middle', vertical: 'top'}}
            >
              <MenuItem primaryText="Settings" />
              <MenuItem primaryText="Log out" />
            </IconMenu>
            
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
                  <span style={styles.bottomBarSortValue}>Name: A-Z</span>
                  <IconMenu
                    iconButtonElement={
                      <IconButton><ArrowDropDown color={'#4877f9'} /></IconButton>
                    }
                    anchorOrigin={{horizontal: 'middle', vertical: 'bottom'}}
                    targetOrigin={{horizontal: 'middle', vertical: 'top'}}
                    iconStyle={styles.sortIcon}
                    style={styles.bottomBarSortButton}
                  >
                    <MenuItem primaryText="Name: A-Z" />
                    <MenuItem primaryText="Name: Z-A" />
                    <MenuItem primaryText="Cost" />
                    <MenuItem primaryText="Distance" />
                  </IconMenu>
                </div>
            }
          </div>
        </div>
      </div>
    </div>
  </div>
};

export default Radium(Header);
