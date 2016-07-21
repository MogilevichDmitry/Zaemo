import React from 'react';
import Radium from 'radium';
import AppBar from 'material-ui/AppBar';
import FilterListIcon from 'material-ui/svg-icons/content/filter-list';
import SearchIcon from 'material-ui/svg-icons/action/search';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

function Home() {
 return <AppBar
    title="Zeamo"
    style={styles.appBar}
    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
  >
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
      <SearchIcon style={{display: 'flex', color:'white'}}/>
      <FilterListIcon style={{display: 'flex', color: 'white'}}/>
    </div>
  </AppBar>;
}

const styles = {
  appBar: {
    backgroundColor: '#162233',
  },
}

Home = Radium(Home);
export default Home;