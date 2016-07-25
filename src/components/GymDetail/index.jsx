import React from 'react';
import Radium from 'radium';
import HeaderDesktop from '../ui/Desktop/Header.jsx';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Tabs from '../ui/Tabs.jsx';
import Tab from '../ui/Tab.jsx';

import ArrowNearMe from 'material-ui/svg-icons/maps/near-me';
import Call from 'material-ui/svg-icons/communication/call';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import ZeamoIcon from '../../images/layout/ZeamoIcon.svg';

import gymSlider from '../../images/content/gymSlider.jpg';
import gymImage from '../../images/content/gymDetail.jpg';
import gymMap from '../../images/content/gymMap.jpg';


function GymDetail() {
  return (
    <div style={styles.wrapper}>

      <HeaderDesktop/>
      <div style={styles.headerMobile}>
        <AppBar
          style={styles.appBar}
          title="Friars Pilates Studio"
          iconElementLeft={
            <IconButton>
              <ArrowBack />
            </IconButton>
          }
        />
      </div>

      <div style={styles.main}>
        <div style={styles.content}>
          <div style={styles.mainInfo}>
            <div>
              <img src={gymImage} style={styles.gymImage} />
            </div>
            <div style={styles.gymInfo}>
              <div>
                <div style={styles.gymName}>Friars Pilates Studio</div>
                <div style={styles.partner}>
                  <img src={ZeamoIcon} style={styles.zeamoIcon} />
                  <span>Zaemo Partner</span>
                </div>
              </div>
              <div style={styles.gymInfoExtra}>
                <span>
                  <span style={styles.gymInfoExtraDistance}>2.1 mi</span>
                  <span>Mission Valley</span>
                </span>
                <span style={styles.gymInfoExtraLink}>Open now</span>
              </div>
            </div>

            <div style={styles.mapBox}>
              <img src={gymMap} style={styles.map} />
            </div>
            <div style={styles.onlyMobile}>
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

            <div style={styles.onlyDesktop}>
              <div style={styles.detailBox}>
                <h1 style={styles.boxTitle}>Purchase a pass</h1>

                <div style={styles.purchase}>
                  <div style={styles.purchaseMain}>
                    <div style={styles.purchaseTitle}>Day pass</div>
                    <div style={styles.purchaseDescription}>Time of activation - midnight</div>
                  </div>
                  <div style={styles.purchaseOption}>
                    <di>
                      <div style={styles.purchaseParam}>Price</div>
                      <div style={styles.purchaseDescription}>$15.00 dlls</div>
                    </di>
                    <div>
                      <div style={styles.purchaseParam}>Use by:</div>
                      <div style={styles.purchaseDescription}>6/2/2017</div>
                    </div>
                    <div>
                      <RaisedButton
                        label="Purchase"
                        primary={true}
                      />
                    </div>
                  </div>
                </div>

                <div style={styles.purchase}>
                  <div style={styles.purchaseMain}>
                    <div style={styles.purchaseTitle}>Month pass</div>
                    <div style={styles.purchaseDescription}>30 days</div>
                  </div>
                  <div style={styles.purchaseOption}>
                    <div>
                      <div style={styles.purchaseParam}>Price</div>
                      <div style={styles.purchaseDescription}>$50.00 dlls</div>
                    </div>
                    <div>
                      <div style={styles.purchaseParam}>Use by:</div>
                      <div style={styles.purchaseDescription}>6/2/2017</div>
                    </div>
                    <div>
                      <RaisedButton
                        label="Purchase"
                        primary={true}
                      />
                    </div>
                  </div>
                </div>

                <div style={styles.purchase}>
                  <div style={styles.purchaseMain}>
                    <div style={styles.purchaseTitle}>Year pass</div>
                    <div style={styles.purchaseDescription}>365 days</div>
                  </div>
                  <div style={styles.purchaseOption}>
                    <div>
                      <div style={styles.purchaseParam}>Price</div>
                      <div style={styles.purchaseDescription}>$500.00 dlls</div>
                    </div>
                    <div>
                      <div style={styles.purchaseParam}>Use by:</div>
                      <div style={styles.purchaseDescription}>6/2/2017</div>
                    </div>
                    <div>
                      <RaisedButton
                        label="Purchase"
                        primary={true}
                      />
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          <div style={styles.aside}>Aside</div>

        </div>
      </div>
    </div>
  );
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
  wrapper: {
    background: '#f2f2f2',
    fontFamily: 'Ubuntu',
    fontSize: '15px',
    '@media (max-width: 770px)': {
      background: '#162233',
      color: 'rgb(204, 204, 204)',
    }
  },
  noBorder: {
    border: 'none',
  },
  onlyMobile: {
    '@media (min-width: 770px)': {
      display: 'none',
    }
  },
  onlyDesktop: {
    '@media (max-width: 770px)': {
      display: 'none',
    }
  },
  headerMobile: {
    '@media (min-width: 770px)': {
      display: 'none',
    }
  },
  appBar: {
    backgroundColor: '#162233',
  },
  content: {
    '@media (min-width: 770px)': {
      display: 'flex',
      justifyContent: 'space-between',
      paddingBottom: '40px',
    },
  },
  mainInfo: {
    '@media (min-width: 770px)': {
      flex: '0.62',
      background: 'white',
    },
  },
  gymImage: {
    width: '100%',
  },
  gymInfo: {
    display: 'flex',
    padding: '10px 12px',
    justifyContent: 'space-between',
    '@media (max-width: 770px)': {
      flexDirection: 'column',
    }
  },
  gymName: {
    fontSize: '18px',
    '@media (max-width: 770px)': {
      color: 'white',
    }
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
    '@media (min-width: 770px)': {
      flexDirection: 'column',
      justifyContent: 'flex-start',
    }
  },
  gymInfoExtraDistance: {
    marginRight: '15px',
  },
  gymInfoExtraLink: {
    '@media (min-width: 770px)': {
      marginTop: '10px',
      textAlign: 'right',
    }
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
    fontSize: '18px',
    fontWeight: '500',
    borderBottom: '2px solid #4877f9',
    paddingBottom: '5px',
    '@media (max-width: 770px)': {
      color: 'white',
      borderBottom: '2px solid #727983',
    }
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
  purchase: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  purchaseMain: {
    flex: '0.35'
  },
  purchaseTitle: {
    fontSize: '18px',
    fontWeight: '500',
  },
  purchaseParam: {
    color: '#999999',
  },
  purchaseDescription: {
    color: '#666666',
  },
  purchaseOption: {
    flex: '0.6',
    display: 'flex',
    justifyContent: 'space-between',
  },

  aside: {
    flex: '0.36',
    border: '1px solid black',
    background: 'white',
    '@media (max-width: 770px)': {
      display: 'none',
    },
  },
};

export default GymDetail = Radium(GymDetail);
