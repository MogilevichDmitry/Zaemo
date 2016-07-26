import React, { Component } from 'react';
import Radium from 'radium';
import HeaderDesktop from './ui/Desktop/Header.jsx';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Tabs from './ui/Tabs.jsx';
import Tab from './ui/Tab.jsx';
import Purchase from './ui/Desktop/Purchase.jsx';

import ArrowNearMe from 'material-ui/svg-icons/maps/near-me';
import Call from 'material-ui/svg-icons/communication/call';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import ZeamoIcon from '../images/layout/ZeamoIcon.svg';

import gymSlider from '../images/content/gymSlider.jpg';
import gymImage from '../images/content/gymDetail.jpg';
import gymMap from '../images/content/gymMap.jpg';


class GymDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    },

    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
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
            <div style={styles.mainInfoWrapper}>
              <div>
                <img src={gymImage} style={styles.gymImage} />
              </div>
              <div style={styles.mainInfo}>
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
                          <div style={styles.purchaseParamValue}>$15.00 dlls</div>
                        </di>
                        <div>
                          <div style={styles.purchaseParam}>Use by:</div>
                          <div style={styles.purchaseParamValue}>6/2/2017</div>
                        </div>
                        <div>
                          <RaisedButton
                            label="Purchase"
                            primary={true}
                            labelStyle={styles.purchaseButtonLabel}
                            onClick={this.handleOpen}
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
                          <div style={styles.purchaseParamValue}>$50.00 dlls</div>
                        </div>
                        <div>
                          <div style={styles.purchaseParam}>Use by:</div>
                          <div style={styles.purchaseParamValue}>6/2/2017</div>
                        </div>
                        <div>
                          <RaisedButton
                            label="Purchase"
                            primary={true}
                            labelStyle={styles.purchaseButtonLabel}
                            onClick={this.handleOpen}
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
                          <div style={styles.purchaseParamValue}>$500.00 dlls</div>
                        </div>
                        <div>
                          <div style={styles.purchaseParam}>Use by:</div>
                          <div style={styles.purchaseParamValue}>6/2/2017</div>
                        </div>
                        <div>
                          <RaisedButton
                            label="Purchase"
                            primary={true}
                            labelStyle={styles.purchaseButtonLabel}
                            onClick={this.handleOpen}
                          />
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                <div style={styles.onlyMobile}>
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

            </div>

            <div style={styles.aside}>
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
                <h1 style={styles.boxTitle}>Schedule</h1>
                <div style={styles.schedule}>
                  <div style={styles.scheduleItem}>
                    <span style={styles.scheduleDay}>Monday:</span>
                    <span>10:00 AM - 11:00 PM</span>
                  </div>
                  <div style={styles.scheduleItem}>
                    <span style={styles.scheduleDay}>Tuesday:</span>
                    <span>10:00 AM - 3:00 PM</span>
                  </div>
                  <div style={styles.scheduleItem}>
                    <span style={styles.scheduleDay}>Wednesday:</span>
                    <span>10:00 AM - 3:00 PM</span>
                  </div>
                  <div style={styles.scheduleItem}>
                    <span style={styles.scheduleDay}>Thursday:</span>
                    <span>10:00 AM - 11:00 PM</span>
                  </div>
                  <div style={styles.scheduleItem}>
                    <span style={styles.scheduleDay}>Friday:</span>
                    <span>10:00 AM - 3:00 PM</span>
                  </div>
                  <div style={styles.scheduleItem}>
                    <span style={styles.scheduleDay}>Saturday:</span>
                    <span>10:00 AM - 3:00 PM</span>
                  </div>
                  <div style={styles.scheduleItem}>
                    <span style={styles.scheduleDay}>Sunday:</span>
                    <span>10:00 AM - 3:00 PM</span>
                  </div>
                </div>
              </div>

              <div style={styles.detailBox}>
                <h1 style={styles.boxTitle}>Activities</h1>
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
                <h1 style={styles.boxTitle}>Amenities</h1>
                <div style={styles.list}>
                  <div style={styles.listBox}>
                    <span style={styles.listItem}>changing rooms</span>
                    <span style={styles.listItem}>showers</span>
                    <span style={styles.listItem}>sauna</span>
                  </div>
                  <div style={styles.listBox}>
                    <span style={styles.listItem}>cafeteria</span>
                    <span style={styles.listItem}>shop</span>
                    <span style={styles.listItem}>car parking lot</span>
                  </div>
                  <div style={styles.listBox}>
                    <span style={styles.listItem}>lockers</span>
                    <span style={styles.listItem}>childcare</span>
                    <span style={styles.listItem}>jacuzzi</span>
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
        </div>

        <Purchase open={this.state.open} close={this.handleClose} />
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
  wrapper: {
    background: '#f2f2f2',
    fontFamily: 'Ubuntu',
    fontSize: '15px',
    color: '#666666',
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
  mainInfoWrapper: {
    '@media (min-width: 770px)': {
      flex: '0.63',
      background: 'white',
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    },
  },
  mainInfo: {
    '@media (min-width: 770px)': {
      padding: '10px 20px',
    },
  },
  gymImage: {
    width: '100%',
  },
  gymInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 770px)': {
      flexDirection: 'column',
      padding: '10px 12px',
    }
  },
  gymName: {
    fontSize: '17px',
    color: 'black',
    '@media (max-width: 770px)': {
      color: 'white',
    }
  },
  partner: {
    fontSize: '14px',
    margin: '6px 0 10px',
    display: 'flex',
    fontWeight: '500',
    '@media (min-width: 770px)': {
      color: '#666666',
      margin: '6px 0 0',
    },
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
    margin: '30px 0 15px',
    '@media (max-width: 770px)': {
      margin: '0 0 10px',
    },
  },
  map: {
    width: '100%',
  },
  detailBox: {
    '@media (min-width: 770px)': {
      marginBottom: '20px',
    },
    '@media (max-width: 770px)': {
      padding: '0 1.75% 20px 2.5%'
    },
  },
  boxTitle: {
    fontSize: '17px',
    fontWeight: '500',
    borderBottom: '2px solid #4877f9',
    paddingBottom: '5px',
    color: 'black',
    '@media (max-width: 770px)': {
      color: 'white',
      borderBottom: '2px solid #727983',
    }
  },
  passSelect: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '15px 5px',
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
    fontSize: '13px',
  },
  scheduleItem: {
    marginBottom: '10px',
  },
  scheduleDay: {
    marginRight: '14px',
    color: '#999999',
    '@media (max-width: 770px)': {
      color: 'white',
    }
  },
  about: {
    marginTop: '10px',
    fontSize: '13px',
  },
  boxOption: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  boxOptionDescription: {
    fontSize: '13px',
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
    fontSize: '17px',
    fontWeight: '500',
    color: 'black',
  },
  purchaseParam: {
    fontSize: '14px',
    color: '#999999',
  },
  purchaseParamValue: {
    marginTop: '8px',
    fontSize: '13.5px',
  },
  purchaseDescription: {
    marginTop: '8px',
    fontSize: '12.5px',
  },
  purchaseOption: {
    flex: '0.6',
    display: 'flex',
    justifyContent: 'space-between',
  },
  purchaseButtonLabel: {
    fontSize: '16px',
    fontWeight: '400',
    textTransform: 'none',
    padding: '10px 23px'
  },
  list: {
    marginTop: '5px',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '13px',
  },
  listBox: {
    display: 'flex',
    flexDirection: 'column',
    flex: '0.32',
    padding: '0 4px',
  },
  listItem: {
    textTransform: 'capitalize',
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

  aside: {
    flex: '0.354',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    background: 'white',
    padding: '20px 10px',
    '@media (max-width: 770px)': {
      display: 'none',
    },
  },
};

export default Radium(GymDetail);
