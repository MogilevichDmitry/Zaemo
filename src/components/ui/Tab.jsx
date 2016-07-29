import React  from 'react';
import Radium from 'radium';
import { uiTab } from '../../styles';

const styles = uiTab.styles;
const stylesDesktop = uiTab.stylesDesktop;

const Tab = ({ label, active, desktop }) => {
  let style = desktop ? [styles.tab, stylesDesktop] : styles.tab;
  style = active ? [style, styles.tabActive] : style;

  return <div style={style}>{label}</div>;
};

export default Radium(Tab);
