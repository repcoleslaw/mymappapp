import React from 'react';

import './SideDrawer.css'

const sideDrawer = props => {

  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses='side-drawer open';
  }

  return (
    <nav className={drawerClasses}>
      <h1>What is this?</h1>
      <ul>
        <li><a href='/'>Page 1</a></li>
        <li><a href='/'>Page 2</a></li>
      </ul>
    </nav>
  );
};

export default sideDrawer;