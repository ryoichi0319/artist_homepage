"use client"
import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'
import { MarkerF, InfoWindowF } from '@react-google-maps/api'
import { useState } from 'react'
import Address from './address'
import styles from "./address.module.css"
import './page.css'

const containerStyle = {
  width: '600px',
  height: '600px',
}

const center = {
  lat: 34.61777632406608,
  lng: 135.53829496091254
}

const marking = {
 lat: 34.61777632406608, 
  lng:135.53829496091254
}
const onLoad = (marker: google.maps.Marker) => {
  console.log('marker loaded at', marker.getPosition()?.toString())
}

const googleMapURL = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}&libraries=places`

function MyComponent() {
  const [size, setSize] = useState<undefined | google.maps.Size>(undefined);
  const infoWindowOptions = {
    pixelOffset: size,
    
  };
  const createOffsetSize = () => {
    return setSize(new window.google.maps.Size(0, -45));
  };
  
  return (
    <div className={styles.map}>
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY!}
     onLoad={() => createOffsetSize()}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
      >
     
        <MarkerF
          visible={true}
          position={marking}
        />
         <InfoWindowF position={marking} options={infoWindowOptions} >
          <p>aaaa</p>
          </InfoWindowF>
        {/* Child components, such as markers, info windows, etc. */}
        <></>
       
      </GoogleMap>
    </LoadScript>
    <Address />
    </div>
  )
}

export default React.memo(MyComponent)