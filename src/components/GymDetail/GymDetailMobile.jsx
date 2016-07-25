import React from 'react';
import Radium from 'radium';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import Tabs from '../ui/Tabs.jsx';
import Tab from '../ui/Tab.jsx';

import ArrowNearMe from 'material-ui/svg-icons/maps/near-me';
import Call from 'material-ui/svg-icons/communication/call';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import ZeamoIcon from '../../images/layout/ZeamoIcon.svg';

import gymSlider from '../../images/content/gymSlider.jpg';
import gymImage from '../../images/content/gymDetail.jpg';
import gymMap from '../../images/content/gymMap.jpg';

function GymDetailMobile() {
  return (
    <div style={styles.wrapper}>
      <AppBar
        style={styles.appBar}
        title="Friars Pilates Studio"
        iconElementLeft={
          <IconButton>
            <ArrowBack />
          </IconButton>
        }
      />
      <div style={styles.detail}>
        <div>
          <img src={gymImage} style={styles.gymImage} />
        </div>
        <div style={styles.gymInfo}>
          <div style={styles.gymName}>Friars Pilates Studio</div>
          <div style={styles.partner}>
            <img src={ZeamoIcon} style={styles.zeamoIcon} />
            <span>Zaemo Partner</span>
          </div>
          <div style={styles.gymInfoExtra}>
            <span>
              <span style={styles.gymInfoExtraDistance}>2.1 mi</span>
              <span>Mission Valley</span>
            </span>
            <span>Open now</span>
          </div>
        </div>

        <div style={styles.mapBox}>
          <img src={gymMap} style={styles.map} />
        </div>

        <div style={styles.detailBox}>
          <h1 style={styles.boxTitle}>Available passes</h1>
          <div style={styles.passSelect}>
            <div style={styles.passSelectTitle}>Day pass</div>
            <div style={styles.passSelectOption}>
              <div style={styles.passSelectCost}>$15.00 dlls</div>
              <FlatButton
                label="select"
                primary={true}
                style={styles.passSelectButton}
              />
            </div>
          </div>
          <div style={styles.passSelect}>
            <div style={styles.passSelectTitle}>Month pass</div>
            <div style={styles.passSelectOption}>
              <div style={styles.passSelectCost}>$50.00 dlls</div>
              <FlatButton
                label="select"
                primary={true}
                style={styles.passSelectButton}
              />
            </div>
          </div>
          <div style={[styles.passSelect, styles.noBorder]}>
            <div style={styles.passSelectTitle}>Year pass</div>
            <div style={styles.passSelectOption}>
              <div style={styles.passSelectCost}>$500.00 dlls</div>
              <FlatButton
                label="select"
                primary={true}
                style={styles.passSelectButton}
              />
            </div>
          </div>
        </div>

        <div style={styles.detailBox}>
          <h1 style={styles.boxTitle}>Schedule</h1>
          <div style={styles.schedule}>
            <div>
              <span style={styles.scheduleDay}>Monday:</span>
              <span style={styles.scheduleTime}>10:00 AM - 11:00 PM</span>
            </div>
            <div>
              <span style={styles.scheduleDay}>Tuesday:</span>
              <span style={styles.scheduleTime}>10:00 AM - 3:00 PM</span>
            </div>
            <div>
              <span style={styles.scheduleDay}>Wednesday:</span>
              <span style={styles.scheduleTime}>10:00 AM - 3:00 PM</span>
            </div>
            <div>
              <span style={styles.scheduleDay}>Thursday:</span>
              <span style={styles.scheduleTime}>10:00 AM - 11:00 PM</span>
            </div>
            <div>
              <span style={styles.scheduleDay}>Friday:</span>
              <span style={styles.scheduleTime}>10:00 AM - 3:00 PM</span>
            </div>
            <div>
              <span style={styles.scheduleDay}>Saturday:</span>
              <span style={styles.scheduleTime}>10:00 AM - 3:00 PM</span>
            </div>
            <div>
              <span style={styles.scheduleDay}>Sunday:</span>
              <span style={styles.scheduleTime}>10:00 AM - 3:00 PM</span>
            </div>
          </div>
        </div>

        <div style={styles.detailBox}>
          <h1 style={styles.boxTitle}>About</h1>
          <div style={styles.about}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed placerat tortor ut lorem pretium pulvinar.
            Pellentesque justo felis, pulvinar ac urna ac, imperdiet malesuada purus.
            Sed et libero sed nisi sagittis vestibulum nec eu lectus.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus, mauris
          </div>
        </div>

        <div style={styles.detailBox}>
          <h1 style={styles.boxTitle}>Location</h1>
          <div style={styles.boxOption}>
            <div style={styles.boxOptionDescription}>
              <div>5555 Grapes Rd, 925100</div>
              <div>San Diego,CA</div>
            </div>
            <IconButton style={styles.boxOptionButton}>
              <ArrowNearMe color={'#4877f9'} />
            </IconButton>
          </div>
        </div>

        <div style={styles.detailBox}>
          <h1 style={styles.boxTitle}>Phone number</h1>
          <div style={styles.boxOption}>
            <div style={styles.boxOptionDescription}>(555)555-5555</div>
            <IconButton style={styles.boxOptionButton}>
              <Call color={'#4877f9'} />
            </IconButton>
          </div>
        </div>
        <div style={styles.detailBox}>
          <Tabs>
            <Tab label="Activities" active={true} />
            <Tab label="Amenities" />
          </Tabs>
          <div style={styles.list}>
            <div style={styles.listBox}>
              <span style={styles.listItem}>gym</span>
              <span style={styles.listItem}>swimming</span>
              <span style={styles.listItem}>yoga</span>
              <span style={styles.listItem}>spinning</span>
              <span style={styles.listItem}>kickboxing</span>
              <span style={styles.listItem}>boot camp</span>
              <span style={styles.listItem}>dancing</span>
            </div>
            <div style={styles.listBox}>
              <span style={styles.listItem}>pilates</span>
              <span style={styles.listItem}>fencing</span>
              <span style={styles.listItem}>squash</span>
              <span style={styles.listItem}>zumba</span>
              <span style={styles.listItem}>physiotherapy</span>
              <span style={styles.listItem}>barre</span>
              <span style={styles.listItem}>rock climbng</span>
            </div>
            <div style={styles.listBox}>
              <span style={styles.listItem}>tennis</span>
              <span style={styles.listItem}>personal training</span>
              <span style={styles.listItem}>cycling</span>
              <span style={styles.listItem}>martial arts</span>
              <span style={styles.listItem}>basketball</span>
              <span style={styles.listItem}>soccer</span>
            </div>
          </div>
        </div>

        <div style={styles.detailBox}>
          <h1 style={styles.boxTitle}>Photos</h1>
          <div style={styles.slider}>
            <div style={styles.sliderItem}>
              <img src={gymSlider} style={styles.sliderImage} />
            </div>
            <div style={styles.sliderItem}>
              <img src={gymSlider} style={styles.sliderImage} />
            </div>
            <div style={styles.sliderItem}>
              <img src={gymSlider} style={styles.sliderImage} />
            </div>
            <div style={styles.sliderItem}>
              <img src={gymSlider} style={styles.sliderImage} />
            </div>
            <div style={styles.sliderItem}>
              <img src={gymSlider} style={styles.sliderImage} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    background: '#162233',
    color: 'rgb(204, 204, 204)',
    fontFamily: 'Ubuntu',
    fontSize: '15px',
  },
  noBorder: {
    border: 'none',
  },
  appBar: {
    backgroundColor: '#162233',
  },
  detail: {
    paddingBottom: '30px',
  },
  gymImage: {
    width: '100%',
  },
  gymInfo: {
    padding: '10px 12px',
  },
  gymName: {
    color: 'white',
    fontSize: '18px',
  },
  partner: {
    fontSize: '14px',
    margin: '10px 0',
    display: 'flex',
  },
  zeamoIcon: {
    width: '14px',
    height: '14px',
    margin: 'auto 1.5% auto 0',
  },
  gymInfoExtra: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '13px',
  },
  gymInfoExtraDistance: {
    marginRight: '15px',
  },
  mapBox: {
    marginBottom: '30px',
  },
  map: {
    width: '100%',
  },
  detailBox: {
    padding: '0 1.75% 20px 2.5%'
  },
  boxTitle: {
    color: 'white',
    fontSize: '18px',
    fontWeight: '500',
    borderBottom: '2px solid #727983',
    paddingBottom: '5px',
  },
  passSelect: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px 5px',
    borderBottom: '1px solid #323c4b',
    color: 'white',
  },
  passSelectTitle: {
    margin: 'auto 0',
  },
  passSelectOption: {
    display: 'flex',
  },
  passSelectCost: {
    margin: 'auto 10px auto 0',
    fontSize: '16px',
  },
  passSelectButton: {
    margin: 'auto 0',
  },
  schedule: {
    marginTop: '10px',
  },
  scheduleDay: {
    color: 'white',
    marginRight: '5px',
  },
  about: {
   marginTop: '10px',
  },
  boxOption: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  boxOptionDescription: {
    margin: 'auto 0',
  },
  boxOptionButton: {
    margin: 'auto 0',
  },
  list: {
    marginTop: '5px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  listBox: {
    display: 'flex',
    flexDirection: 'column',
    flex: '0.3',
  },
  listItem: {
    marginTop: '15px',
  },
  slider: {
    display: 'block',
    overflow: 'hidden',
    marginTop: '10px',
    whiteSpace: 'nowrap',
  },
  sliderItem: {
    display: 'inline-block',
    width: '20%',
    marginRight: '9px',
  },
  sliderImage: {
    width: '100%',
  },
};

export default GymDetailMobile = Radium(GymDetailMobile);
