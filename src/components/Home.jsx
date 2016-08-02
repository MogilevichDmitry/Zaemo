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
import gymA from '../images/content/gymA.jpg';
import gymABC from '../images/content/gymABC.jpg';
import { home } from '../styles';
import GoogleMap from './GoogleMap.jsx';

const styles = home;

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchBar: false,
      text: '',
    };

    this.handleOpenSearchBar = this.handleOpenSearchBar.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleBackToAppBar = this.handleBackToAppBar.bind(this);
  }

  handleOpenSearchBar() {
    this.setState({
      searchBar: !this.state.searchBar,
    });
  }

  handleSearch(e) {
    const text = e.target.value;

    this.setState({
      text,
    });
  }

  handleBackToAppBar() {
    this.setState({
      searchBar: !this.state.searchBar,
    })
  }

  render() {
    return <div style={styles.home}>
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
                  primaryText={<p style={styles.listMainInfo}>Pilates Club</p>}
                  secondaryText="5222 Peaches Rd, San Diego CA, 92141"
                  leftIcon={<SearchIcon />}
                />
              </Link>

              <Link to="/search-result" style={styles.listLink}>
                <ListItem
                  primaryText={<p style={styles.listMainInfo}>Pilates Club</p>}
                  secondaryText="8451 Lychee Rd, San Diego CA, 93589"
                  leftIcon={<SearchIcon />}
                />
              </Link>

              <Link to="/search-result" style={styles.listLink}>
                <ListItem
                  primaryText={<p style={styles.listMainInfo}>Pilates Club</p>}
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

            <div style={styles.map}><GoogleMap /></div>

            <Gym src={gymA} title="Gym A" dayPass="$15.00" />
            <Gym src={gymABC} title="Gym ABCDCD" dayPass="$15.00" />
            <Gym src={gymA} title="Gym A" dayPass="$15.00" />
          </div>
        </div>
      </div>
    </div>;
  }
};

export default Radium(Home);
