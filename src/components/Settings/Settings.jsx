import React from 'react';
import Radium from 'radium';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import Header from './../ui/Desktop/Header.jsx';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router';

import MenuIcon from 'material-ui/svg-icons/navigation/menu';

const Settings = () => {
  return <div style={styles.wrapper}>
    <Header search={false} sort={false} />

    <div style={styles.onlyMobile}>
      <AppBar
        title="Settings"
        style={styles.appBar}
        iconElementLeft={<IconButton><MenuIcon color={'#4877f9'} /></IconButton>}
        iconStyleLeft={styles.appBarLeftIcon}
      />
    </div>

    <div style={styles.main}>
      <div style={styles.content}>
        <div style={styles.onlyDesktop}>
          <div style={styles.heading}>Settings</div>

          <div style={styles.settingsBox}>
            <div style={styles.title}>Edit your workout preferences</div>

            <div style={styles.checkboxGroup}>
              <Checkbox label="Gym" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
              <Checkbox label="Swimming" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
              <Checkbox label="Yoga" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
              <Checkbox label="Spinning" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
              <Checkbox label="Kickboxing" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
              <Checkbox label="Boot Camp" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
              <Checkbox label="Dancing" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
              <Checkbox label="Pilates" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
              <Checkbox label="Fencing" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
              <Checkbox label="Squash" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
              <Checkbox label="Zumba" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
              <Checkbox label="Physiotherapy" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
              <Checkbox label="Barre" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
              <Checkbox label="Rock Climbng" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
              <Checkbox label="Tennis" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
              <Checkbox label="Personal Training" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
              <Checkbox label="Cycling" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
              <Checkbox label="Martial Arts" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
              <Checkbox label="Basketball" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
              <Checkbox label="Soccer" style={styles.checkbox} iconStyle={styles.checkboxIcon} />
            </div>
          </div>

          <div style={styles.settingsBox}>
            <div style={styles.title}>Edit your personal information</div>

            <div style={styles.boxColumn}>
              <div style={styles.boxRow}>
                <TextField
                  floatingLabelText="Name"
                  underlineStyle={styles.underline}
                  style={styles.fieldName}
                />
                <TextField
                  defaultValue="(555)555-5555"
                  floatingLabelText="Phone Number"
                  underlineStyle={styles.underline}
                  style={styles.fieldPhone}
                />
              </div>

              <div style={styles.boxRow}>
                <TextField
                  defaultValue="frank.hill@gmail.com"
                  floatingLabelText="Email"
                  underlineStyle={styles.underline}
                  style={styles.fieldEmail}
                />
                <TextField
                  type="password"
                  defaultValue="1111111111111111111111"
                  floatingLabelText="Password"
                  underlineStyle={styles.underline}
                  style={styles.fieldPassword}
                />
              </div>
            </div>
          </div>

          <div style={styles.settingsBox}>
            <div style={styles.title}>Edit your payment information</div>

            <div style={styles.boxColumn}>
              <div style={styles.boxRow}>
                <TextField
                  defaultValue="John Smith"
                  floatingLabelText="Name"
                  underlineStyle={styles.underline}
                  style={styles.fieldName}
                />

                <TextField
                  defaultValue="06/18"
                  floatingLabelText="Exp. date"
                  underlineStyle={styles.underline}
                  style={styles.fieldDate}
                />
              </div>

              <div style={styles.cardInformation}>
                <TextField
                  defaultValue="1232344345456"
                  floatingLabelText="Card Number"
                  underlineStyle={styles.underline}
                  style={styles.fieldCardNumber}
                />

                <TextField
                  defaultValue="06/18"
                  floatingLabelText="cvv"
                  underlineStyle={styles.underline}
                  style={styles.fieldCvv}
                />
              </div>

            </div>
          </div>

          <div style={styles.buttonBox}>
            <RaisedButton
              label="save changes"
              primary={true}
              fullWidth={true}
            />
          </div>
        </div>

        <div style={styles.onlyMobile}>
          <Link to="/settings/workout" style={styles.link}>
            <div style={styles.settingsBox}>
              <h1 style={styles.title}>Edit your workout preferences</h1>
              <div>Gym, swimming, yoga, spinning, pilates...</div>
            </div>
          </Link>

          <Link to="/settings/personal" style={styles.link}>
            <div style={styles.settingsBox}>
              <h1 style={styles.title}>Edit your personal information</h1>
              <div>Name, email, phone number...</div>
            </div>
          </Link>

          <Link to="/settings/payment" style={styles.link}>
            <div style={styles.settingsBoxLast}>
              <h1 style={styles.title}>Edit your payment information</h1>
              <div>Card number *******5555</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>;
};

const styles = {
  wrapper: {
    fontFamily: 'Ubuntu',
    color: 'black',
    paddingBottom: '45px',
    '@media (min-width: 770px)': {
      background: '#f2f2f2',
    },
  },
  main: {
    margin: '0 auto',
    '@media (min-width: 770px)': {
      maxWidth: '700px',
      textAlign: 'center',
    },
    '@media (min-width: 960px)': {
      maxWidth: '820px',
    },
  },
  onlyMobile: {
    '@media (min-width: 770px)': {
      display: 'none',
    },
  },
  onlyDesktop: {
    '@media (max-width: 770px)': {
      display: 'none',
    }
  },
  appBar: {
    background: '#162233',
  },
  content: {
    '@media (max-width: 770px)': {
      padding: '15px 2.5% 0',
    },
    '@media (min-width: 770px)': {
      marginTop: '40px',
    },
  },
  heading: {
    fontSize: '17px',
    fontWeight: '500',
    marginBottom: '15px',
    textAlign: 'center',
  },
  settingsBox: {
    '@media (max-width: 770px)': {
      padding: '4% 4.5%',
      borderBottom: '1px solid #d9d9d9',
    },
    '@media (min-width: 770px)': {
      background: 'white',
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      marginBottom: '15px',
      padding: '20px 35px 35px',
    },
  },
  settingsBoxLast: {
    padding: '4% 4.5%',
  },
  title: {
    fontSize: '17px',
    fontWeight: '500',
    marginBottom: '30px',
    '@media (max-width: 770px)': {
      color: '#4d4d4d',
      marginBottom: '10px',
    },
  },
  checkboxGroup: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  checkbox: {
    textAlign: 'left',
    marginBottom: '14px',
    width: 'auto',
    minWidth: '186px',
    fontWeight: '300',
    fontSize: '13px',
  },
  checkboxIcon: {
    fill: '#4877f9',
    marginRight: '10px',
  },
  boxColumn: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  boxRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '5px',
  },
  underline: {
    borderColor: 'rgba(72, 119, 249, 0.7)',
  },
  fieldName: {
    flex: '0.72',
    fontSize: '14px',
  },
  fieldPhone: {
    flex: '0.24',
    fontSize: '14px',
  },
  fieldEmail: {
    flex: '0.47',
    fontSize: '14px',
  },
  fieldPassword: {
    flex: '0.47',
    fontSize: '14px',
  },
  fieldDate: {
    flex: '0.24',
    fontSize: '14px',
  },
  cardInformation: {
    display: 'flex',
  },
  fieldCardNumber: {
    flex: '0.25',
    fontSize: '14px',
    marginRight: '20px',
  },
  fieldCvv: {
    flex: '0.12',
    fontSize: '14px',
  },
  buttonBox: {
    marginTop: '30px',
  },
  link: {
    textDecoration: 'none',
    color: '#666666'
  },
};

export default Radium(Settings);