import { View, Text, StyleSheet } from 'react-native'
import MapView, { Marker,PROVIDER_GOOGLE } from 'react-native-maps';
import React, { useEffect } from 'react'
import {selectDestination, selectOrigin, setDestination, setOrigin, setTravelTimeInformation} from '../Slices/navslice'
import { useDispatch, useSelector } from 'react-redux';
import MapViewDirections from 'react-native-maps-directions';
import { useRef } from 'react';
import { Dispatch } from 'react';


const apikey='AIzaSyC6EFdTlrjLRjiLEzHoauP2CXM9ZLPHUgo'

const Map = () => {
const origin=useSelector(selectOrigin);
const destination=useSelector(selectDestination)
const mapRef=useRef(origin)
const dispatch=useDispatch();

useEffect(()=>{
if (!origin|| !destination) return;

//to zoom in
mapRef.current.fitToSuppliedMarkers(['origin','destination'], {
    edgePadding: {top:30, right:30, left:30, bottom:30},
})
}, [origin, destination]);
useEffect(()=>{
  if (!origin|| !destination) return;
  const getTravelTime= async()=>{
    fetch(
      `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${apikey}`)
    .then((res)=>res.json()) 
    .then((data) => {
      dispatch(setTravelTimeInformation(data.rows[0].elements[0]))
    });
  }
  getTravelTime();
},[origin,destination,apikey])

 // ...

return (
  <View style={{ height: '100%' }}>
    <View style={{ flex: 1 }}>
      <MapView
        ref={mapRef}
        style={{
          flex: 1,
          paddingTop: 40,
          height: '100%',
          width: 'auto',
        }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: origin?.location?.lat || 0,
          longitude: origin?.location?.lng || 0,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        {origin && destination && (
          <MapViewDirections
            origin={origin?.description || ""}
            destination={destination?.description || ""}
            apikey={apikey}
            strokeWidth={5}
            strokeColor="#ff9900"
          />
        )}

        {origin?.location && (
          <Marker
            coordinate={{
              latitude: origin.location.lat,
              longitude: origin.location.lng,
            }}
            title="My location"
            description={origin.description}
            identifier="origin"
          />
        )}

        {destination?.location && (
          <Marker
            coordinate={{
              latitude: destination.location.lat,
              longitude: destination.location.lng,
            }}
            title="Destination"
            description={destination.description}
            identifier="destination"
          />
        )}
      </MapView>
    </View>
  </View>
);

}

export default Map