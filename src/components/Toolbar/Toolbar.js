import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';




const toolbar = props =>(
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div><DrawerToggleButton click={props.drawerClickHandler}/></div>
      <div className="toolbar_logo"><a href="/"><b>SEE</b> THE GOOD</a></div>
      <div className="spacer"></div>
      <div className="toolbar_navigation-items">
        <ul>
          <li>See the Response</li>
          <li>Deploy the Response</li>
          <li><div className="modal-Button" onClick={props.modalClickHandler}>What Is This?</div></li>
          
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;