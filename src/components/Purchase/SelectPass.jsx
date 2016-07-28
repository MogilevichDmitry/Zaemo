import React from 'react';
import Radium from 'radium';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import NavigationClose from 'material-ui/svg-icons/navigation/close';
import ZeamoIcon from '../../images/layout/ZeamoIcon.svg';

const SelectPass = () => {
 return <div>
   <AppBar
     title="Select a pass"
     iconElementLeft={
       <IconButton><NavigationClose /></IconButton>
     }
     iconElementRight={
       <p>Step 1 of 3 </p>
     }
   />

   <SelectField>
     <MenuItem primaryText="Year pass" />
     <MenuItem primaryText="Month pass" />
     <MenuItem primaryText="Day pass" />
   </SelectField>

   <div>
     <div>Pass information</div>
     <div>
       <div>
         <div>Duration of pass</div>
         <div>Time of activation - midnight</div>
       </div>

       <div>
         <div>Price</div>
         <div>$15.00 dlls</div>
       </div>

       <div>
         <div>Use by</div>
         <div>6/2/2017</div>
       </div>
     </div>
   </div>

   <div>
     <div>Gym information</div>

     <div>
       <div>Friars Pilates Studio</div>
       <div>
         <img src={ZeamoIcon} style={styles.zeamoIcon} />
         <span>Zaemo Partner</span>
       </div>
     </div>

     <div>
       <p>5555 Graphes Rd, 92510</p>
       <p>San Diego, CA</p>
     </div>
     <div>(555)555-5555</div>
   </div>
   <RaisedButton label="Purchase" primary={true} fullWidth={true} />
 </div>
}

const styles = {
  zeamoIcon: {
    width: '14px',
    height: '14px',
    margin: 'auto 1.5% auto 0',
  },
};

export default Radium(SelectPass);