"use client"
import React, { useState } from 'react';
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from '@react-google-maps/api';
import styles from "../../styles/address.module.css"
 

const Access = () =>{
const [size, setSize] = useState<undefined | google.maps.Size>(undefined);
  const containerStyle = {
    width: '100%',
    height: '600px',
    'margin-left': '30px', // 引用符で囲む
  };

  const center = {
    lat: 34.61777632406608,
    lng: 135.53829496091254,
  };

  const marking = {
    lat: 34.61777632406608,
    lng: 135.53829496091254,
  };

  const infoWindowOptions = {
    pixelOffset: size,
  };

  // const createOffsetSize = () => {
  //   return setSize(new window.google.maps.Size(0, -45));
  // };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY || '',
  });

  const onLoad = (marker: google.maps.Marker) => {
    console.log('Marker loaded at', marker.getPosition()?.toString());
  };

    return (

      <div className={styles.map}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
          <Marker onLoad={onLoad} visible={true} position={marking} />
          <InfoWindow position={marking} options={infoWindowOptions}>
            <p className={styles.map_name}>Acht8</p>
          </InfoWindow>
        </GoogleMap>
        <div className={styles.address}>
        <h3 className="address-name">Acht8</h3>
        <p className="access-address">
          546-0012 <br /> 大阪市東住吉区中野3-12-3 ドミール春光1F
        </p>
        <p>TEL: 092-626-1777</p> <p>FAX: 092-626-1781</p>
      </div>
      </div>
    );
  
}

export default Access;
