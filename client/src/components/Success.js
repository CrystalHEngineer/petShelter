import React from 'react'
import { GoogleMap, LoadScript, Marker, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import {GOOGLE_MAPS} from '../../src/GoogleMap';


function Success() {
  const [response, setResponse] = React.useState(null)

  const containerStyle = {
    width: '500px',
    height: '500px',
    margin: '0 auto'
  };
  
  const directionsCallback = React.useCallback((res) => {
    console.log(res)

    if (res !== null) {
      if (res.status === 'OK') {
        setResponse(res)
      } else {
        console.log('response: ', res)
      }
    }
  }, [])
  
  const start = {
    lat: 39.136222651497995,
    lng: -119.42480255813634
  };
  
  const center = {
    lat: 38.136222651497995,
    lng: -115.42480255813634
  };
  
  const directionsOption = {
    origin: start,
    destination: center,
    travelMode: "DRIVING",
  };

  const directionsRendererOptions = React.useMemo(() => {
    return {
      directions: response,
    }
  }, [])


  return (
    <LoadScript
      googleMapsApiKey= {GOOGLE_MAPS}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <DirectionsService callback={directionsCallback} options={directionsOption} />
        <Marker position={center}></Marker>
        {response !== null && (
            <DirectionsRenderer options={directionsRendererOptions} />
          )}
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Success);