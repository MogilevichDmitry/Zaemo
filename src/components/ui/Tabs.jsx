import React  from 'react';
import Radium from 'radium';
import { uiTabs } from '../../styles';

const styles = uiTabs.styles;
const stylesDesktop = uiTabs.stylesDesktop;

const Tabs = ({ children, desktop }) => {

 const style = desktop ? [styles, stylesDesktop] : styles;

  return <div style={style}>
    {children}
  </div>;
};

export default Radium(Tabs);
