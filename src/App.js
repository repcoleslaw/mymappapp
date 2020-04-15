import React, {Component} from 'react';
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
  
  constructor(props) {
    super(props);
    this.state = {
    
      data: [],
      loading: false,
      sideDrawerOpen: false,
      modalOpen: false, 
      postOpen: false,
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
      },
    };
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

  postToggleClickHandler = () => {
    this.setState((prevState) => {
      return {postOpen: !prevState.postOpen};
    })
  };

  backdropClickHandler = () =>{
    this.setState({sideDrawerOpen: false});
    this.setState({modalOpen: false});
    this.setState({postOpen: false});
  };



  onSubmit = (model) =>{
    model.id = +new Date();
    alert(JSON.stringify(model));
    this.setState({
      data: [model, ...this.state.data]
    })
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
        mapStyle="mapbox://styles/arrcole/ck91p8iek0w0o1iqpkr759tui"
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
      <DynamicForm
        title = "POST The Good"
        model = {[
         {key: "name", label: "Name", props:{required: true}}, 
         {key: "industry", label: "Industry", props:{required: true}}, 
         {key: "serve", label: "Service", props:{required: true}}, 
         {key: "details", label: "Additional Details"}, 
         {key: "lat", label: "Latitude", type: "number", props:{required: true}}, 
         {key: "long", label: "Longititude", type: "number", props:{required: true}}, 
        ]}

        onSubmit = {(model) => {this.onSubmit(model)}}
          
        postClickHandler={this.postToggleClickHandler}
        show={this.state.postOpen} 
      />
      <pre>
        
      </pre>


      <Footer/>
    </div>
    );
  }
}




export default App;
