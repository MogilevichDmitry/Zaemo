import React from 'react';
import Radium from 'radium';
import AppBar from 'material-ui/AppBar';
import Dialog from 'material-ui/Dialog';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';

const ModalWindow =({ children, title, open, close }) => {
  return <div>
    <Dialog
      modal={true}
      open={open}
    >
      <AppBar
        title={title}
        showMenuIconButton={false}
        iconElementRight={
        <IconButton onClick={close}><NavigationClose /></IconButton>
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