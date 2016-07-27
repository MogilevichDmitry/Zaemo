import React, { Component } from 'react';
import Radium from 'radium';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import { List, ListItem } from 'material-ui/List';
import { Link } from 'react-router';
import Header from './ui/Desktop/Header.jsx';
import Gym from './ui/Gym.jsx';

import FilterListIcon from 'material-ui/svg-icons/content/filter-list';
import SearchIcon from 'material-ui/svg-icons/action/search';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import mapBackground from '../images/layout/homeMapBg.jpg';
import gymA from '../images/content/gymA.jpg';
import gymABC from '../images/content/gymABC.jpg';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchBar: false,
      text: '',
    };
  }

  handleOpenSearchBar = () => {
    this.setState({
      searchBar: !this.state.searchBar,
    });
  }

  handleSearch = (e) => {
    const text = e.target.value;

    this.setState({
      text,
    });
  }

  handleBackToAppBar = () => {
    this.setState({
      searchBar: !this.state.searchBar,
    })
  }

  render() {
    return (
      <div style={styles.home}>
        <Header />

        <div style={styles.headerMobile}>
          {
            this.state.searchBar === false ?
              <AppBar
                title="Zeamo"
                style={styles.appBar}
                iconElementLeft={
                  <IconButton>
                    <MenuIcon color={'#4877f9'} />
                  </IconButton>
                }
              >
                <div style={styles.appBarRightBox}>
                  <FilterListIcon color={'#4877f9'} />
                  <SearchIcon color={'#4877f9'} onClick={this.handleOpenSearchBar} />
                </div>
              </AppBar> :
              <AppBar
                style={styles.appBarSearch}
                iconElementLeft={
                  <IconButton onClick={this.handleBackToAppBar}>
                    <ArrowBack color={'#4877f9'} />
                  </IconButton>
                }
              >
                <TextField
                  style={styles.appBarSearchInput}
                  id="search"
                  hintText="search"
                  hintStyle={styles.inputHintStyle}
                  onChange={this.handleSearch}
                />
                <NavigationClose style={styles.appBarSearchClose} color={'#4877f9'} onClick={this.handleBackToAppBar} />
              </AppBar>
          }

          {
            this.state.text.length > 0 ?
              <List>
                <Link to="/search-result" style={styles.listLink}>
                  <ListItem
                    primaryText={
                    <p style={styles.listMainInfo}>Pilates Club</p>
                  }
                    secondaryText="5222 Peaches Rd, San Diego CA, 92141"
                    leftIcon={<SearchIcon />}
                  />
                </Link>

                <Link to="/search-result" style={styles.listLink}>
                  <ListItem
                    primaryText={
                      <p style={styles.listMainInfo}>Pilates Club</p>
                    }
                    secondaryText="8451 Lychee Rd, San Diego CA, 93589"
                    leftIcon={<SearchIcon />}
                  />
                </Link>

                <Link to="/search-result" style={styles.listLink}>
                  <ListItem
                    primaryText={
                      <p style={styles.listMainInfo}>Pilates Club</p>
                    }
                    secondaryText="3488 Grapes Rd, San Diego CA, 9741"
                    leftIcon={<SearchIcon />}
                  />
                </Link>
              </List> : ''
          }
        </div>

        <div style={styles.main}>
          <div style={styles.content}>
            <div style={styles.contentFilter}>
              <div style={styles.contentFilterBox}>
                <h1 style={styles.filterFirstTitle}>Filter by</h1>

                <SelectField
                  floatingLabelText="Search radius"
                  floatingLabelFixed={true}
                  floatingLabelStyle={styles.fieldLabel}
                  underlineStyle={styles.underline}
                  iconStyle={styles.selectFieldIcon}
                  style={styles.filterField}
                >
                  <MenuItem primaryText="3 miles" />
                  <MenuItem primaryText="5 miles" />
                  <MenuItem primaryText="8 miles" />
                  <MenuItem primaryText="6 miles" />
                  <MenuItem primaryText="9 miles" />
                  <MenuItem primaryText="11 miles" />
                </SelectField>

                <TextField
                  floatingLabelText="Zipcode"
                  floatingLabelFixed={true}
                  floatingLabelStyle={styles.fieldLabel}
                  underlineStyle={styles.underline}
                  style={styles.filterField}
                />

                <SelectField
                  floatingLabelText="State"
                  floatingLabelFixed={true}
                  floatingLabelStyle={styles.fieldLabel}
                  underlineStyle={styles.underline}
                  iconStyle={styles.selectFieldIcon}
                  style={styles.filterField}
                >
                  <MenuItem primaryText="CO" />
                  <MenuItem primaryText="FL" />
                  <MenuItem primaryText="HI" />
                  <MenuItem primaryText="WY" />
                  <MenuItem primaryText="CA" />
                </SelectField>
              </div>

              <div style={styles.contentFilterBox}>
                <h1 style={styles.title}>Price</h1>

                <RadioButtonGroup name="shipName" defaultSelected="not_checked">
                  <RadioButton
                    label="Under $25"
                    value="$25"
                    style={styles.radioButton}
                    iconStyle={styles.radioIcon}
                  />
                  <RadioButton
                    label="$25 to $50"
                    value="$25to$50"
                    style={styles.radioButton}
                    iconStyle={styles.radioIcon}
                  />
                  <RadioButton
                    label="$50 to $100"
                    value="$50to$100"
                    style={styles.radioButton}
                    iconStyle={styles.radioIcon}
                  />
                  <RadioButton
                    label="$100 to $200"
                    value="$100to$200"
                    style={styles.radioButton}
                    iconStyle={styles.radioIcon}
                  />
                  <RadioButton
                    label="$200 & above"
                    value="$200&above"
                    style={styles.radioButton}
                    iconStyle={styles.radioIcon}
                  />
                </RadioButtonGroup>
              </div>

              <div style={styles.contentFilterBox}>
                <h1 style={styles.title}>Activities</h1>

                <Checkbox
                  label="Gym"
                  style={styles.checkbox}
                  iconStyle={styles.checkboxIcon}
                />
                <Checkbox
                  label="Swimming"
                  style={styles.checkbox}
                  iconStyle={styles.checkboxIcon}
                />
                <Checkbox
                  label="Yoga"
                  style={styles.checkbox}
                  iconStyle={styles.checkboxIcon}
                />
                <Checkbox
                  label="Spinning"
                  style={styles.checkbox}
                  iconStyle={styles.checkboxIcon}
                />
                <Checkbox
                  label="Kickboxing"
                  style={styles.checkbox}
                  iconStyle={styles.checkboxIcon}
                />
              </div>
            </div>
            <div style={styles.contentPasses}>
              <div style={styles.map}></div>
              
              <Gym src={gymA} title="Gym A" dayPass="$15.00" />
              <Gym src={gymABC} title="Gym ABCDCD" dayPass="$15.00" />
              <Gym src={gymA} title="Gym A" dayPass="$15.00" />
            </div>
          </div>
        </div>

      </div>
    );
  }
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
  home: {
    background: '#f2f2f2',

    '@media (min-width: 770px)': {
      paddingBottom: '40px',
    },

    '@media (max-width: 770px)': {
      background: 'white',
    },
  },
  headerMobile: {
    '@media (min-width: 770px)': {
      display: 'none'
    }
  },
  appBar: {
    backgroundColor: '#162233',
  },
  appBarRightBox: {
    display: 'flex',
    width: '70px',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appBarSearch: {
    position: 'relative',
    backgroundColor: '#fafafa',
  },
  appBarSearchClose: {
    position: 'absolute',
    top: '20px',
    right: '24px',
  },
  appBarSearchInput: {
    position: 'absolute',
    left: '72px',
    width: '45%',
    fontWeight: '500',
  },  
  content: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  contentFilter: {
    '@media (max-width: 770px)': {
      display: 'none',
    },
    flex: '0.16',
    alignSelf: 'baseline',
    background: 'white',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    padding: '16px 24px 0',
  },
  contentFilterBox: {
    marginBottom: '30px',
  },
  filterFirstTitle: {
    fontFamily: 'Ubuntu',
    fontSize: '18px',
    fontWeight: '500',
    color: '#4d4d4d',
    margin: '0 0 16px 4px',
  },
  title: {
    fontFamily: 'Ubuntu',
    fontSize: '18px',
    fontWeight: '500',
    color: '#4d4d4d',
    marginBottom: '25px',
  },
  radioButton: {
    marginBottom: '13px',
    fontSize: '14px',
    fontWeight: '300',
    color: '#666666',
  },
  radioIcon: {
    fill: '#4877f9',
    marginRight: '10px',
  },
  checkbox: {
    marginBottom: '13px',
    fontSize: '14px',
    fontWeight: '300',
  },
  checkboxIcon: {
    fill: '#4877f9',
    marginRight: '10px',
  },
  filterField: {
    width: '151px',
  },
  fieldLabel: {
    fontSize: '16px',
    color: 'rgba(153, 153, 153, 1)',
  },
  underline: {
    borderColor: 'rgba(72, 119, 249, 0.7)',
  },
  selectFieldIcon: {
    fill: '#4877f9',
  },
  contentPasses: {
    '@media (min-width: 770px)': {
      flex: '0.83',
    }
  },
  inputHintStyle: {
    fontWeight: '400',
  },
  listLink: {
    textDecoration: 'none',
  },
  listMainInfo: {
    fontWeight: '500',
  },
  map: {
    width: '100%',
    height: '26vh',
    backgroundImage: `url(${mapBackground})`,
    backgroundSize: 'cover',
    '@media (min-width: 770px)': {
      height: '225px',
      marginBottom: '10px',
    },
  },
};

export default Radium(Home);
