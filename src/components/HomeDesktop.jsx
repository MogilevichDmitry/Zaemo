import React from 'react';
import Radium from 'radium';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import {Tabs, Tab} from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';

import Logo from 'material-ui/svg-icons/editor/insert-photo';

import mapBackground from '../images/layout/homeMapBg.jpg';
import gymA from '../images/content/gymA.jpg';
import gymABC from '../images/content/gymABC.jpg';

function HomeDesktop() {
  return <div>
    <div style={styles.header}>
      <div style={styles.headerTopBar}>
        <div style={styles.main}>
          <div style={styles.headerBar}>
            <div style={{color: 'white'}}>logo</div>
            <div>
              <SelectField value={1}>
                <MenuItem value={1} primaryText="Frank Hill" />
                <MenuItem value={2} primaryText="Mark Zuckerberg" />
                <MenuItem value={3} primaryText="Bill Gates" />
              </SelectField>

              <Avatar src="https://pbs.twimg.com/profile_images/761883825/MarkSmilingTwitter.jpg" />

            </div>
          </div>
        </div>
      </div>

      <div style={styles.headerBottomBar}>
        <div style={styles.main}>
          <div style={styles.headerBar}>
            <Tabs style={{width: '28%'}}>
              <Tab label="Browse"></Tab>
              <Tab label="My Passes"></Tab>
            </Tabs>

            <div style={styles.headerBottomBarAside}>
              <TextField
                floatingLabelText="Search"
                floatingLabelFixed={true}
              />

              <div>
                <span>Sort by:</span>
                <SelectField value={1}>
                  <MenuItem value={1} primaryText="Name: A-Z" />
                  <MenuItem value={2} primaryText="Name: Z-A" />
                  <MenuItem value={3} primaryText="Cost" />
                  <MenuItem value={4} primaryText="Distance" />
                </SelectField>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  <div style={styles.contentWrapper}>
      <div style={styles.main}>
        <div style={styles.content}>
          <div style={styles.contentFilter}>
            <div style={styles.contentFilterBox}>
              <h1 style={styles.title}>Filter By</h1>

              <SelectField
                floatingLabelText="Search radius"
                floatingLabelFixed={true}
                floatingLabelStyle={styles.fieldLabel}
                underlineStyle={styles.underline}
                iconStyle={styles.selectFieldIcon}
                style={styles.filterField}
              >
                <MenuItem primaryText="3 miles" />
                <MenuItem primaryText="5 miles" />
                <MenuItem primaryText="8 miles" />
                <MenuItem primaryText="6 miles" />
                <MenuItem primaryText="9 miles" />
                <MenuItem primaryText="11 miles" />
              </SelectField>

              <TextField
                floatingLabelText="Zipcode"
                floatingLabelFixed={true}
                floatingLabelStyle={styles.fieldLabel}
                underlineStyle={styles.underline}
                style={styles.filterField}
              />

              <SelectField
                floatingLabelText="State"
                floatingLabelFixed={true}
                floatingLabelStyle={styles.fieldLabel}
                underlineStyle={styles.underline}
                iconStyle={styles.selectFieldIcon}
                style={styles.filterField}
              >
                <MenuItem primaryText="CO" />
                <MenuItem primaryText="FL" />
                <MenuItem primaryText="HI" />
                <MenuItem primaryText="WY" />
                <MenuItem primaryText="CA" />
              </SelectField>
            </div>

            <div style={styles.contentFilterBox}>
              <h1 style={styles.title}>Price</h1>

              <RadioButtonGroup name="shipName" defaultSelected="not_checked">
                <RadioButton
                  label="Under $25"
                  value="$25"
                  style={styles.radioButton}
                  iconStyle={styles.radioIcon}
                />
                <RadioButton
                  label="$25 to $50"
                  value="$25to$50"
                  style={styles.radioButton}
                  iconStyle={styles.radioIcon}
                />
                <RadioButton
                  label="$50 to $100"
                  value="$50to$100"
                  style={styles.radioButton}
                  iconStyle={styles.radioIcon}
                />
                <RadioButton
                  label="$100 to $200"
                  value="$100to$200"
                  style={styles.radioButton}
                  iconStyle={styles.radioIcon}
                />
                <RadioButton
                  label="$200 & above"
                  value="$200&above"
                  style={styles.radioButton}
                  iconStyle={styles.radioIcon}
                />
              </RadioButtonGroup>
            </div>

            <div style={styles.contentFilterBox}>
              <h1 style={styles.title}>Activities</h1>

              <Checkbox
                label="Gym"
                style={styles.checkbox}
                iconStyle={styles.checkboxIcon}
              />
              <Checkbox
                label="Swimming"
                style={styles.checkbox}
                iconStyle={styles.checkboxIcon}
              />
              <Checkbox
                label="Yoga"
                style={styles.checkbox}
                iconStyle={styles.checkboxIcon}
              />
              <Checkbox
                label="Spinning"
                style={styles.checkbox}
                iconStyle={styles.checkboxIcon}
              />
              <Checkbox
                label="Kickboxing"
                style={styles.checkbox}
                iconStyle={styles.checkboxIcon}
              />
            </div>
          </div>

          <div style={styles.contentPasses}>
            <div style={styles.map}></div>

            <div>
              <div style={[styles.gym, styles.boxShadow]}>
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

              <div style={[styles.gym, styles.boxShadow]}>
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

              <div style={[styles.gym, styles.boxShadow]}>
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
          </div>
        </div>
      </div>
    </div>
  </div>;
}

const styles = {
  main: {
    width: '1024px',
    margin: '0 auto',
  },
  headerTopBar: {
    background: '#031021',
  },
  headerBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  headerBottomBar: {
    background: '#15335c',
  },
  headerBottomBarAside: {
    display: 'flex',
  },
  contentWrapper: {
    background: '#f2f2f2',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    background: '#f2f2f2',
  },
  contentFilter: {
    flex: '0.205',
    alignSelf: 'baseline',
    background: 'white',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    padding: '25px 25px 0',
  },
  contentFilterBox: {
    marginBottom: '25px',
    width: '195px',
  },
  title: {
    fontFamily: 'Ubuntu',
    fontSize: '18px',
    fontWeight: '500',
    color: '#4d4d4d',
    marginBottom: '25px',
  },
  radioButton: {
    marginBottom: '13px',
    fontWeight: '300',
    color: '#666666',
  },
  radioIcon: {
    fill: '#4877f9',
    marginRight: '10px',
  },
  checkbox: {
    marginBottom: '13px',
    fontWeight: '300',
  },
  checkboxIcon: {
    fill: '#4877f9',
    marginRight: '10px',
  },
  filterField: {
    width: '195px',
  },
  fieldLabel: {
    color: 'rgba(153, 153, 153, 1)',
  },
  underline: {
    borderColor: 'rgba(72, 119, 249, 0.7)',
  },
  selectFieldIcon: {
    fill: '#4877f9',
  },

  contentPasses: {
    flex: '0.78',
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
    background: 'white',
    marginBottom: '20px',
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
};

export default HomeDesktop = Radium(HomeDesktop);
