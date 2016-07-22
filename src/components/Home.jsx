import React from 'react';
import Radium from 'radium';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

import Logo from 'material-ui/svg-icons/editor/insert-photo';
import FilterListIcon from 'material-ui/svg-icons/content/filter-list';
import SearchIcon from 'material-ui/svg-icons/action/search';
import Menu from 'material-ui/svg-icons/navigation/menu';

import mapBackground from '../images/layout/homeMapBg.jpg';
import gymA from '../images/content/gymA.jpg';
import gymABC from '../images/content/gymABC.jpg';

function Home() {
 return <div>
    <AppBar
      title="Zeamo"
      style={styles.appBar}
      iconElementLeft={
        <IconButton>
          <Menu color={'#4877f9'} />
        </IconButton>
      }
    >
      <div style={styles.appBarRightBox}>
        <FilterListIcon color={'#4877f9'} />
        <SearchIcon color={'#4877f9'} />
      </div>
    </AppBar>

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

   </div>;
}

const styles = {
  appBar: {
    backgroundColor: '#162233',
  },
  appBarRightBox: {
    display: 'flex',
    width: '18.5%',
    justifyContent: 'space-between',
    alignItems: 'center'
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
