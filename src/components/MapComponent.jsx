import React, { Component } from 'react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import { mapStyles } from '../assets/mapStyle.js';

const containerStyle = {
  width: '400px',
  height: '400px',
};
const options = {
  styles: mapStyles
};

const center = {
  lat: 40.92994302844781,
  lng: -74.06895898012745
};
const onLoad = (marker) => {
  console.log("marker: ", marker);
};
const showInMapClicked = () => {
  window.open("https://www.google.com/maps/dir//40.929943,-74.068959/@40.929943,-74.0711477,17z/data=!4m8!1m5!3m4!2zNDDCsDU1JzQ3LjgiTiA3NMKwMDQnMDguMyJX!8m2!3d40.929943!4d-74.068959!4m1!3e2?entry=ttu");
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
          options={options}
        >
          <MarkerF
            onClick={showInMapClicked}
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