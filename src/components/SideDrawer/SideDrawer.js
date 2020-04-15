import React from 'react';


import './SideDrawer.css'


export default class sideDrawer extends React.Component{

  state = {
    
  }

  constructor(props){
    super(props)
  }

  render(){
    let drawerClasses = 'side-drawer';
    if (this.props.show) {
      drawerClasses='side-drawer open';
    }
    
    
  
  
    return (
      <nav className={drawerClasses}>
        <div>

        </div>
      </nav>
    );
  }

}
