
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Map from '../Component/Map';
import tw from 'tailwind-react-native-classnames'
import MapView, { Marker,PROVIDER_GOOGLE } from 'react-native-maps';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationCard from '../Component/NavigationCard';
import RideOptions from '../Component/RideOptions';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


const MapScreen = ({navigation}) => {
    const Stack = createStackNavigator();

  return (
    <View>
      <TouchableOpacity style={tw`absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg bg-gray-200 `}
      onPress={()=>navigation.navigate("Welcome")}>
        <Icon
        name="home"/>
      </TouchableOpacity>
        <View style={tw`h-1/2`}>
            <Map/>
        </View>
        <View style={tw`h-1/2`}>
            <Stack.Navigator>
                <Stack.Screen 
                name="NavigationCard"
                component={NavigationCard}
                options={{
                headerShown:false
                }}>
                </Stack.Screen>

                <Stack.Screen 
                name="RideOptions"
                component={RideOptions}
                options={{
                headerShown:false
                }}>
                </Stack.Screen>

            </Stack.Navigator>
            
             </View>
     
    </View>
  )
}

export default MapScreen
