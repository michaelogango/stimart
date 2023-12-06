import { View, Text,SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete, GooglePlacesAutocompleteProps } from 'react-native-google-places-autocomplete'
import MapView, { Marker,PROVIDER_GOOGLE } from 'react-native-maps';
import { useDispatch } from 'react-redux'
import {setDestination, setOrigin} from '../Slices/navslice'
import { useNavigation } from '@react-navigation/native'
import NavFavourites from './NavFavourites';
import { Icon } from 'react-native-elements';



const apikey='AIzaSyC6EFdTlrjLRjiLEzHoauP2CXM9ZLPHUgo'

const NavigationCard = ({navigation}) => {
    const dispatch=useDispatch();
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
    <Text style={tw`text-center py-5 text-xl`}>Welcome back user</Text>
    <View style={tw`border-t border-gray-200 flex-shrink`}>
        <GooglePlacesAutocomplete
        styles={InputBoxStyle}
        fetchDetails={true}
        returnKeyType={"search"}
        onPress={(data,details=null)=>{
            dispatch(
                setDestination({
                  location: details.geometry.location,
                  description:data.description,
                })
              )
              navigation.navigate("RideOptions")

        }}
        enablePoweredByContainer={false}
        query={{
            key:apikey,
            language:'en',
            components:'country:ke',
           }}
        
        placeholder='Where are you going'
        nearbyPlacesAPI='GooglePlacesSearch'/>

    </View>
    <NavFavourites/>
    <View style={tw`flex-row bg-white justify-evenly py-2 my-auto border-t border-gray-100`}>
      <TouchableOpacity
      onPress={()=>navigation.navigate('RideOptions')}
      style={tw`flex flex-row bg-black px-4 justify-between py-3 rounded-full w-24`}>
        <Icon 
        name="car"
        type="font-awesome"
        color="white"
        size={16}/>
        <Text style={tw`text-white text-center`}>
          Charging stations
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={tw`flex flex-row bg-black px-4 py-3 rounded-full w-24`}>
        <Icon 
        name="person-circle-outline"
        type="ionicon"
        color="white"
        size={20}/>
        <Text style={tw`text-white text-center`}>
          Profile
        </Text>
      </TouchableOpacity>
    </View>
        
    </SafeAreaView>
      
  )
}

export default NavigationCard

const InputBoxStyle=StyleSheet.create({
    container:{
        backgroundColor:'white',
        padding:20,
        flex:0
    },
    textInput:{
        backgroundColor:"#ff9900",
        borderRadius:20,
        fontSize:18
    },
    TextInputContainer:{
        paddingHorizontal:20,
        paddingBottom:0
    }

})