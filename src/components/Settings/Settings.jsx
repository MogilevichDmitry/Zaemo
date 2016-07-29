import React from 'react';
import Radium from 'radium';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Header from './../ui/Desktop/Header.jsx';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router';

const Settings = () => {
  return <div style={styles.wrapper}>
    <Header search={false} sort={false} />

    <div style={styles.onlyMobile}>
      <AppBar title="Settings" />
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
                  style={styles.fieldName}
                  underlineStyle={styles.underline}
                />
                <TextField
                  defaultValue="(555)555-5555"
                  floatingLabelText="Phone Number"
                  floatingLabelFixed={true}
                  style={styles.fieldPhone}
                  underlineStyle={styles.underline}
                />
              </div>

              <div style={styles.boxRow}>
                <TextField
                  defaultValue="frank.hill@gmail.com"
                  floatingLabelText="Email"
                  floatingLabelFixed={true}
                  style={styles.fieldEmail}
                  underlineStyle={styles.underline}
                />
                <TextField
                  type="password"
                  defaultValue="1111111111111111111111"
                  floatingLabelText="Password"
                  floatingLabelFixed={true}
                  style={styles.fieldPassword}
                  underlineStyle={styles.underline}
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
                  floatingLabelFixed={true}
                  style={styles.fieldName}
                  underlineStyle={styles.underline}
                />

                <TextField
                  defaultValue="06/18"
                  floatingLabelText="Exp. date"
                  floatingLabelFixed={true}
                  style={styles.fieldDate}
                  underlineStyle={styles.underline}
                />
              </div>

              <div style={styles.boxRow}>
                <div style={styles.cardInformation}>
                  <TextField
                    defaultValue="1232344345456"
                    floatingLabelText="Card Number"
                    floatingLabelFixed={true}
                    style={styles.fieldCardNumber}
                    underlineStyle={styles.underline}
                  />

                  <TextField
                    defaultValue="06/18"
                    floatingLabelText="cvv"
                    floatingLabelFixed={true}
                    style={styles.fieldCvv}
                    underlineStyle={styles.underline}
                  />
                </div>
              </div>

            </div>
          </div>

          <RaisedButton label="save changes" primary={true} fullWidth={true} />
        </div>

        <div style={styles.onlyMobile}>
          <div>

            <Link to="/settings/workout">
              <div>
                <h1>Edit your workout preferences</h1>
                <div>Gym, swimming, yoga, spinning, pilates...</div>
              </div>
            </Link>

            <Link to="/settings/personal">
              <div>
                <h1>Edit your personal information</h1>
                <div>Name, email, phone number...</div>
              </div>
            </Link>

            <Link to="/settings/payment">
              <div>
                <h1>Edit your payment information</h1>
                <div>Card number *******5555</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>;
}

const styles = {
  wrapper: {
    background: '#f2f2f2',
    fontFamily: 'Ubuntu',
    color: 'black',
  },
  onlyMobile: {
    '@media (min-width: 770px)': {
      display: 'none',
    },
  },
  main: {
    textAlign: 'center',
    margin: '0 auto',
    '@media (min-width: 770px)': {
      maxWidth: '750px',
    },
    '@media (min-width: 960px)': {
      maxWidth: '920px',
    },
    '@media (min-width: 1366px)': {
      maxWidth: '1040px',
    },
    '@media (min-width: 1440px)': {
      maxWidth: '1124px',
    },
    '@media (min-width: 1600px)': {
      maxWidth: '1400px',
    },
  },
  content: {
    marginTop: '40px',
    marginBottom: '40px',
  },
  onlyDesktop: {
    '@media (max-width: 770px)': {
      display: 'none',
    }
  },
  heading: {
    marginBottom: '15px',
    textAlign: 'center',
    fontSize: '17px',
  },
  settingsBox: {
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    background: '#ffffff',
    marginBottom: '30px',
    padding: '25px',
  },
  title: {
    fontSize: '17px',
  },
  checkboxGroup: {
    display: 'inline-block',
    marginTop: '3%',
  },
  checkbox: {
    display: 'inline-block',
    textAlign: 'left',
    marginBottom: '2%',
    width: 'auto',
    minWidth: '186px',
    fontWeight: '300',
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
  },
  cardInformation: {
    display: 'block',
    flex: '0.5',
    justifyContent: 'space-between',
  },
  underline: {
    borderColor: 'rgba(72, 119, 249, 0.7)',
  },
  fieldName: {
    flex: '0.7',
  },
  fieldPhone: {
    flex: '0.25',
  },
  fieldEmail: {
    flex: '0.45',
  },
  fieldPassword: {
    flex: '0.45',
  },
  fieldDate: {
    flex: '0.25',
  },
  fieldCardNumber: {
    flex: '0.7',
  },
  fieldCvv: {
    flex: '0.25',
  }
};

export default Radium(Settings);