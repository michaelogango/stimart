import { View, Text,StyleSheet, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../Component/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import MapView, { Marker,PROVIDER_GOOGLE } from 'react-native-maps';
import Map from '../Component/Map';
import { useDispatch } from 'react-redux'
import {setDestination, setOrigin} from '../Slices/navslice'
import NavFavourites from '../Component/NavFavourites'

const apikey='AIzaSyC6EFdTlrjLRjiLEzHoauP2CXM9ZLPHUgo'





const HomeScreen = () => {
  const dispatch=useDispatch();
  return (
    <View style={{height:"100%"}}>
    <View style={{padding:5,marginTop:1, marginLeft:5}}>
      {/* -----------------------------------Image------------------------------------------------------------------ */}
      <Image source={require('../assets/images/logo11.png')} 
      style={{
      resizeMode:'contain',
      height: 300,
      width: 300}}
      />
 <GooglePlacesAutocomplete
     
     placeholder='Where from'
     nearbyPlacesAPI='GooglePlacesSearch'
     styles={{container:{
      flex:0
     },
     textInput:{
      fontSize:18
     },
    }}
     fetchDetails={true}
     minLength={2}
     enablePoweredByContainer={false}
     onPress={(data, details=null)=>{
      dispatch(
        setOrigin({
          location: details.geometry.location,
          description:data.description,
        })
      )

     }}
     query={{
      key:apikey,
      language:'en',
      components:'country:ke',
     }}
     />

     <NavOptions/>
     
     <NavFavourites/>

      </View>
      
         </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  
    paddingTop:40,
    height:'100%',
    width:'auto',

  },
});