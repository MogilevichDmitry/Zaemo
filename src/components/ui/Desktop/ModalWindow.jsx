import React from 'react';
import Radium from 'radium';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import Dialog from 'material-ui/Dialog';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
import { uiDesktopModalWindow  } from '../../../styles';

const styles = uiDesktopModalWindow;

const ModalWindow =({ children, title, open, close }) => {
  return <div>
    <Dialog
      modal={true}
      open={open}
      autoScrollBodyContent={true}
      style={styles.dialog}
    >
      <AppBar
        title={title}
        showMenuIconButton={false}
        style={styles.appBar}
        iconElementRight={
        <IconButton onClick={close}>
          <NavigationClose color={'#4877f9'} />
        </IconButton>
      }
      />
      <div style={styles.children}>
        {children}
      </div>
    </Dialog>
  </div>;
};

export default Radium(ModalWindow);