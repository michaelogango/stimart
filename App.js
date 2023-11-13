import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Platform, Text, View } from 'react-native';
import{Login, Signin,Welcome, Register, MapScreen} from './Screens/index';
import { StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native';
//screens

const Stack = createStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <SafeAreaView style={styles.safeArea}>
            <Stack.Navigator
      initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown:false}}/>

        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>

        <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>

      </Stack.Navigator> 
            </SafeAreaView>
        </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
    }
  })