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
import { gymDetail } from '../styles';

const styles = gymDetail;

class GymDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    },

    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleOpen() {
    this.setState({open: true});
  };

  handleClose() {
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
            iconElementLeft={<IconButton><ArrowBack /></IconButton>}
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
};

export default Radium(GymDetail);
