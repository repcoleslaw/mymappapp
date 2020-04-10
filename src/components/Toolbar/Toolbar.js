import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';




const toolbar = props =>(
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div><DrawerToggleButton/></div>
      <div className="toolbar_logo"><a href="/">Project Title</a></div>
      <div className="spacer"></div>
      <div className="toolbar_navigation-items">
        <ul>
          <li><a href="/">See the Response</a></li>
          <li><a href="/">Deploy the Response</a></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;