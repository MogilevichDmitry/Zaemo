import React  from 'react';
import Radium from 'radium';

const Tabs = ({ children, desktop }) => {

 const style = desktop ? [styles, stylesDesktop] : styles;

  return <div style={style}>
    {children}
  </div>;
};

const styles = {
  fontFamily: 'Ubuntu',
  fontSize: '16px',
  color: '#dce1e7',
  width: '100%',
};

const stylesDesktop = {
   width: 'auto',
};

export default Radium(Tabs);
