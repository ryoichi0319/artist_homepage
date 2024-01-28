"use client"
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from '@react-google-maps/api';
import { useState } from 'react';
import styles from "../../styles/address.module.css"
 

const Access = () => {

    const containerStyle = {
        width: '100%',
        height: '600px',
        marginLeft: '30px', 
      };

  const center = {
    lat: 34.61777632406608,
    lng: 135.53829496091254,
  };

  const marking = {
    lat: 34.61777632406608,
    lng: 135.53829496091254,
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY || '',
    
  });



  const onLoad = () => {
    console.log('Marker loaded at', marking.lat, marking.lng);
  };

  if (!isLoaded) {
    // Handle the case where Google Maps API is not loaded
    return <div>Error loading Google Maps API</div>;
  }

  return (
    <div className={styles.map}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
        <Marker onLoad={onLoad} visible={true} position={marking} />
        <InfoWindow position={marking} >
          <p className={styles.map_name}>****</p>
        </InfoWindow>
      </GoogleMap>
      <div className={styles.address}>
        <h3 className="address-name">****</h3>
        <p className="access-address">
          ***-** <br />*******************
        </p>
        <p>TEL: *********</p> <p>FAX: *********</p>
      </div>
    </div>
  );
};

export default Access;


 