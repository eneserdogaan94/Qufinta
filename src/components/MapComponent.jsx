import React, { Component } from 'react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 40.92994302844781,
  lng: -74.06895898012745
};
const onLoad = (marker) => {
  console.log("marker: ", marker);
};
class MyComponents extends Component {
  render() {
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyD8T0do9HcSan1T2TG8fiQSRoc3KeiaGOU"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={14}
        >
          <MarkerF
          
          onLoad={onLoad} position={center}
          >

          </MarkerF>
          <></>
        </GoogleMap>
      </LoadScript>
    )
  }
}
export default MyComponents;