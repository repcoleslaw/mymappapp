import React, {useState, Component} from 'react';
import {geolocated} from 'react-geolocated';
import ReactMapGL, {Marker} from "react-map-gl";
import * as postData from "./data/data.json";

import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Footer from './components/Footer/Footer';




class App extends Component {

  state = {
    sideDrawerOpen: false 
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.SideDrawerOpen};
    })
  };

  backdropClickHandler = () =>{
    this.setState({sideDrawerOpen: false});
  };

  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 37.8,
        longitude: -122.4,
        zoom: 14,
        bearing: 0,
        pitch: 0,
        width:'100vw',
        height:'100vh'
      }
    };
  }

  render(){
    let sideDrawer;
    let backDrop;


    if (this.state.sideDrawerOpen){
      backDrop = <Backdrop click={this.backdropClickHandler}/>
    }

    return (
    <div className="App">
      <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
      <SideDrawer show={this.state.sideDrawerOpen}/>
      {backDrop}
      <ReactMapGL 
        {...this.state.viewport} 
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/arrcole/ck8s41sia1kn81ijzj6hov34c"
        onViewportChange={viewport => this.setState({viewport})}
      >
        {postData.features.map(post => (
          <Marker 
          key={post.properties.POST_ID}
          latitude={post.geometry.coordinates[0]}
          longitude={post.geometry.coordinates[1]}
          >
            <svg 
            overflow="visible">
              <circle
              r={post.geometry.value}
              >
              </circle>
            </svg>
          </Marker>

        ))}
      </ReactMapGL>
      <Footer></Footer>
    </div>
    );
  }
}




export default App;
