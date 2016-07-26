import React from 'react';
import Radium from 'radium';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import Dialog from 'material-ui/Dialog';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';

const ModalWindow =({ children, title }) => {
  return <div>
    <Dialog
      modal={true}
      open={true}
      style={styles.dialog}
    >
      <AppBar
        title={title}
        showMenuIconButton={false}
        style={styles.appBar}
        iconElementRight={
        <IconButton><NavigationClose /></IconButton>
      }
      />
      <div>
        {children}
      </div>
    </Dialog>

  </div>;
}

const styles = {
  dialog: {
    position: 'relative',
  },
  appBar: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
  }
};

export default Radium(ModalWindow);