import React, { Component } from 'react';
import Radium from 'radium';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';

import Logo from 'material-ui/svg-icons/editor/insert-photo';
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

    this.handleOpenSearchBar = this.handleOpenSearchBar.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
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

  render() {
    return (
      <div>
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
                <IconButton>
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
              <NavigationClose style={styles.appBarSearchClose} color={'#4877f9'}/>
            </AppBar>
        }

        {
          this.state.text.length > 0 ?
            <List>
              <ListItem
                primaryText={
                  <p style={styles.listMainInfo}>Pilates Club</p>
                }
                secondaryText="5222 Peaches Rd, San Diego CA, 92141"
                leftIcon={<SearchIcon />}
              />
              <ListItem
                primaryText={
                  <p style={styles.listMainInfo}>Pilates Club</p>
                }
                secondaryText="8451 Lychee Rd, San Diego CA, 93589"
                leftIcon={<SearchIcon />}
              />
              <ListItem
                primaryText={
                  <p style={styles.listMainInfo}>Pilates Club</p>
                }
                secondaryText="3488 Grapes Rd, San Diego CA, 9741"
                leftIcon={<SearchIcon />}
              />
            </List> : ''
        }

        <div style={styles.map}></div>

        <div style={styles.gym}>
          <img src={gymA} style={styles.gymImage}/>
          <div style={styles.gymInfoBox}>
            <div style={styles.gymTitle}>Gym A</div>
            <div style={styles.gymDescription}>
              <div style={styles.gymInfo}>
                <div style={styles.partner}>
                  <Logo style={styles.logo} />
                  <span style={styles.partnerDescription}>Zaemo Partner</span>
                </div>
                <div style={styles.position}>
                  <span style={styles.positionDistance}>2.1mi</span>
                  <span>Mission Valley</span>
                </div>
              </div>
              <div style={styles.cost}>
                <div style={styles.costDescription}>Day pass</div>
                <div style={styles.costAmount}>$15.00</div>
              </div>
            </div>
          </div>
        </div>

        <div style={styles.gym}>
          <img src={gymABC} style={styles.gymImage}/>
          <div style={styles.gymInfoBox}>
            <div style={styles.gymTitle}>Gym ABC</div>
            <div style={styles.gymDescription}>
              <div style={styles.gymInfo}>
                <div style={styles.partner}>
                  <Logo style={styles.logo} />
                  <span style={styles.partnerDescription}>Zaemo Partner</span>
                </div>
                <div style={styles.position}>
                  <span style={styles.positionDistance}>2.1mi</span>
                  <span>Mission Valley</span>
                </div>
              </div>
              <div style={styles.cost}>
                <div style={styles.costDescription}>Day pass</div>
                <div style={styles.costAmount}>$15.00</div>
              </div>
            </div>
          </div>
        </div>

        <div style={styles.gym}>
          <img src={gymA} style={styles.gymImage}/>
          <div style={styles.gymInfoBox}>
            <div style={styles.gymTitle}>Gym A</div>
            <div style={styles.gymDescription}>
              <div style={styles.gymInfo}>
                <div style={styles.partner}>
                  <Logo style={styles.logo} />
                  <span style={styles.partnerDescription}>Zaemo Partner</span>
                </div>
                <div style={styles.position}>
                  <span style={styles.positionDistance}>2.1mi</span>
                  <span>Mission Valley</span>
                </div>
              </div>
              <div style={styles.cost}>
                <div style={styles.costDescription}>Day pass</div>
                <div style={styles.costAmount}>$15.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
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
    fontWeight: '500',
  },
  inputHintStyle: {
    fontWeight: 400,
  },
  listMainInfo: {
    fontWeight: '500',
  },
  map: {
    width: '100%',
    height: '26vh',
    backgroundImage: `url(${mapBackground})`,
    backgroundSize: 'cover',
  },
  gym: {
    fontFamily: 'Ubuntu',
    width: '100%',
  },
  gymImage: {
    width: '100%',
  },
  gymInfoBox: {
    padding: '2.5% 3% 1.5%',
  },
  gymTitle: {
    marginBottom: '2%',
    color: '#031021',
    fontWeight: '500',
    fontSize: '20px',
  },
  gymDescription: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  gymInfo: {
    flex: '1',
  },
  partner: {
    marginBottom: '2%',
    display: 'flex',
  },
  logo: {
    width: '16px',
    height: '16px',
    margin: 'auto 1.5% auto 0',
    color: '#4877f9',
  },
  partnerDescription: {
    color: '#666666',
  },
  position: {
    color: '#666666',
    fontWeight: '300',
  },
  positionDistance: {
    marginRight: '3.5%',
  },
  cost: {
    color: '#666666',
  },
  costDescription: {
    fontWeight: '300',
    marginBottom: '1.5%',
  },
  costAmount: {
    fontWeight: '500',
    fontSize: '28px',
    color: 'black',
  }
}

export default Home = Radium(Home);
