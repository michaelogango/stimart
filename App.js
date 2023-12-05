import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Platform, Text, View, KeyboardAvoidingView } from 'react-native';
import{Login, Signin,Welcome, Register, AdminDash,MapScreen, HomeScreen} from './Screens/index';
import { StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
//screens

const Stack = createStackNavigator();
export default function App() {
    return (
      <Provider store={store}>
        <NavigationContainer>
            <SafeAreaView style={styles.safeArea}>
            <Stack.Navigator
      initialRouteName="HomeScreen">
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown:false}}/>

        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>

        <Stack.Screen name="AdminDash" component={AdminDash} options={{headerShown:false}}/>

        <Stack.Screen name="Register" component={Register} options={{headerShown:false}}/>

        <Stack.Screen name="MapScreen" component={MapScreen} options={{headerShown:false}}/>

        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
        
        

      </Stack.Navigator> 
            </SafeAreaView>
        </NavigationContainer>
        </Provider>
    );
}
const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
    }
  })