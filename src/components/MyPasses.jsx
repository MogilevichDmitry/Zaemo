import React from 'react';
import Radium from 'radium';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Header from './ui/Desktop/Header.jsx';
import Gym from './ui/Gym.jsx';

import gymABC from '../images/content/gymABC.jpg';
import gymA from '../images/content/gymA.jpg';

const expiresIn = {
  hours: '23',
  minutes: '15',
  seconds: '10',
};

const MyPasses = () => {
  return (
    <div>
      <Header />

      <div>
        <DropDownMenu value={1} >
          <MenuItem value={1} primaryText="All" />
          <MenuItem value={2} primaryText="Active" />
          <MenuItem value={3} primaryText="Ready to use" />
          <MenuItem value={4} primaryText="Expired" />
        </DropDownMenu>

        <Gym src={gymA} title="Gym A" expiresIn={expiresIn} />
        <Gym src={gymABC} title="Gym ABC" useBy="6/2/17" />
        <Gym src={gymA} title="Gym ACD" expired="2 days ago" />
      </div>
    </div>
  );
}

export default Radium(MyPasses);