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
import { settingsCommon } from '../../styles';

const styles = settingsCommon;

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

export default Radium(Settings);