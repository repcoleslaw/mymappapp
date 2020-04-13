import React, {useState, Component} from 'react';
import ReactMapGL, {Marker, NavigationControl, GeolocateControl} from "react-map-gl";
import * as postData from "./data/data.json";

import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Modal from './components/modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';
import Footer from './components/Footer/Footer';
import DynamicForm from './components/Form/Form';




class App extends Component {

  state = {
    sideDrawerOpen: false,
    modalOpen: false 
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.SideDrawerOpen};
    })
  };

  modalToggleClickHandler = () => {
    this.setState((prevState) => {
      return {modalOpen: !prevState.modalOpen};
    })
  };

  backdropClickHandler = () =>{
    this.setState({sideDrawerOpen: false})
    this.setState({modalOpen: false});;
  };

  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 43.65,
        longitude: -79.38,
        zoom: 8,
        width:'100vw',
        height:'100vh',
        maxZoon: 15,
        touchZoom: true,
        dragRotate: false,
        touchRotate: false,
      }
    };
  }

  render(){
    
    let backDrop;


    if (this.state.sideDrawerOpen){
      backDrop = <Backdrop click={this.backdropClickHandler}/>
    }
    if (this.state.modalOpen){
      backDrop = <Backdrop click={this.backdropClickHandler}/>
    }

    return (
    <div className="App">
      <Toolbar 
      drawerClickHandler={this.drawerToggleClickHandler}
      modalClickHandler={this.modalToggleClickHandler}/>
      <SideDrawer show={this.state.sideDrawerOpen}/>
      <Modal show={this.state.modalOpen}/>

      {backDrop}

      {/* Map Stuff */}
      <ReactMapGL 
        {...this.state.viewport} 
        mapboxApiAccessToken="pk.eyJ1IjoiYXJyY29sZSIsImEiOiJjazFpODM1eWowMGFnM2lwN2M1a3hheHczIn0.or7eL1mNGyvc2t1f8yypKA"
        mapStyle="mapbox://styles/arrcole/ck8s41sia1kn81ijzj6hov34c"
        onViewportChange={viewport => this.setState({viewport})}
        
               
      >
        
        <div className='mapController'>
          <NavigationControl/>
          <GeolocateControl
          positionOptions={{enableHighAccuracy:true}}
          trackUserLocation={true}
        />
        </div>
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
      <DynamicForm />

      <Footer/>
    </div>
    );
  }
}




export default App;
