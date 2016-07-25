import React from 'react';
import AppBar from 'material-ui/AppBar';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';

export default function ModalWindow({ children, title, width, height }) {
  return <div style={{width: width, height: height}}>
    <AppBar
      title={title}
      showMenuIconButton={false}
      iconElementRight={
        <IconButton><NavigationClose /></IconButton>
      }
    />
    <div>
      {children}
    </div>
  </div>;
}