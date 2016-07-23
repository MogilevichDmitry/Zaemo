import React from 'react';
import Radium from 'radium';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import ListItem from 'material-ui/List/ListItem';
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
    <div>
      <div>
        <SelectField value={1}>
          <MenuItem value={1} primaryText="Frank Hill" />
          <MenuItem value={2} primaryText="Mark Zuckerberg" />
          <MenuItem value={3} primaryText="Bill Gates" />
        </SelectField>

        <ListItem
          disabled={true}
          rightAvatar={
            <Avatar src="https://pbs.twimg.com/profile_images/761883825/MarkSmilingTwitter.jpg" />
          }
        />
      </div>

      <div>
        <Tabs>
          <Tab label="Browse"></Tab>
          <Tab label="My Passes"></Tab>
        </Tabs>

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

    <div>
      <div>
        <div>
          <h1>Filter By</h1>

          <SelectField
            floatingLabelText="Search radius"
            floatingLabelFixed={true}
          >
            <MenuItem primaryText="5 miles" />
            <MenuItem primaryText="3 miles" />
            <MenuItem primaryText="6 miles" />
            <MenuItem primaryText="9 miles" />
            <MenuItem primaryText="11 miles" />
          </SelectField>

          <TextField
            floatingLabelText="Zipcode"
            floatingLabelFixed={true}
          />

          <SelectField
            floatingLabelText="State"
            floatingLabelFixed={true}
          >
            <MenuItem primaryText="CO" />
            <MenuItem primaryText="FL" />
            <MenuItem primaryText="HI" />
            <MenuItem primaryText="WY" />
            <MenuItem primaryText="CA" />
          </SelectField>
        </div>

        <div>
          <h1>Price</h1>

          <RadioButtonGroup name="shipName" defaultSelected="not_checked">
            <RadioButton label="Under $25" value="$25" />
            <RadioButton label="$25 to $50" value="$25to$50" />
            <RadioButton label="$50 to $100" value="$50to$100" />
            <RadioButton label="$100 to $200" value="$100to$200" />
            <RadioButton label="$200 & above" value="$200&above" />
          </RadioButtonGroup>
        </div>

        <div>
          <h1>Activities</h1>

          <Checkbox label="Gym" />
          <Checkbox label="Swimming" />
          <Checkbox label="Yoga" />
          <Checkbox label="Spinning" />
          <Checkbox label="Kickboxing" />
        </div>
      </div>

      <div>
        <div style={styles.map}></div>

        <div>
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
};

export default HomeDesktop = Radium(HomeDesktop);