import React  from 'react';
import Radium from 'radium';

const Tab = ({ label, active, desktop }) => {
  let style = desktop ? [styles.tab, stylesDesktop] : styles.tab;
  style = active ? [style, styles.tabActive] : style;

  return <div style={style}>{label}</div>;
};

const styles = {
  tab: {
    display: 'inline-block',
    height: '100%',
    width: '50%',
    borderBottom: '1px solid #8a9099',
    cursor: 'pointer',
    paddingBottom: '5px',
    ':hover': {
      color: 'white',
    },
  },
  tabActive: {
    color: 'white',
    borderBottom: '5px solid #4877f9',
    fontWeight: '500',
  },
};

const stylesDesktop = {
  width: 'auto',
  padding: '15px 45px 18px',
  cursor: 'pointer',
  borderBottom: 'none',
};

export default Radium(Tab);
