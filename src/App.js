import React, {useState} from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import Footer from './components/Footer/Footer';

import ReactMapGL, {Marker} from "react-map-gl";
import * as postData from "./data/data.json";

function App() {

  const [viewport, setViewport] = useState({
    latitude: 43.6532,
    longitude: -79.3832,
    zoom: 10,
    width:"100vw",
    height:"100vh"
  });

  return (
    <div className="App">
      <Toolbar></Toolbar>
      <ReactMapGL 
        {...viewport} 
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/arrcole/ck8s41sia1kn81ijzj6hov34c"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
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

export default App;
