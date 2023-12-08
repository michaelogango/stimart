
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
  const logout = () => {
    // Remove the token from storage
    AsyncStorage.removeItem('token');
    AsyncStorage.removeItem('role');
    // Navigate to the AuthNavigator and set it as the root
    navigation.navigate('Welcome');
  }
    const Stack = createStackNavigator();

  return (
    <View>
      <TouchableOpacity style={tw`absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg bg-gray-200 `}
      onPress={logout}>
        <Icon
        name="home"/>
        <Text> LogOut</Text>

  
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
