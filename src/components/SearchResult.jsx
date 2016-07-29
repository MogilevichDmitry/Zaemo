import React, { Component } from 'react';
import Radium from 'radium';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import { Link } from 'react-router';
import Gym from './ui/Gym.jsx';
import Logo from 'material-ui/svg-icons/editor/insert-photo';
import FilterListIcon from 'material-ui/svg-icons/content/filter-list';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import gymA from '../images/content/gymA.jpg';
import gymABC from '../images/content/gymABC.jpg';
import { searchResult } from '../styles';

const styles = searchResult;

const SearchResult = () => {
  return  <div>
    <AppBar
      title="Pilates"
      style={styles.appBar}
      iconElementLeft={
        <Link to="/">
          <IconButton><ArrowBack color={'#4877f9'} /></IconButton>
        </Link>
      }
      iconElementRight={<IconButton><FilterListIcon color={'#4877f9'} /></IconButton>}
    />

    <div style={styles.map}></div>

    <Gym src={gymA} title="Pilates" dayPass="$15.00" />
    <Gym src={gymABC} title="Pilates" dayPass="$15.00" />
    <Gym src={gymA} title="Pilates" dayPass="$15.00" />

  </div>;
};

export default Radium(SearchResult);
