import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the FontAwesome icon from react-native-vector-icons
import { RadioButton } from 'react-native-paper';
import Additems from '../Component/additems';
import Dashboardscreen from '../Component/DashboardScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
const HomeScreen = () => {

  return (
    <View style={styles.container}>
      <Dashboardscreen/>
     
    </View>
  );
};

const AddItemScreen = () => {
  return (
    <View style={styles.container}>
      <Additems/>
    </View>
  );
};

const Tab = createBottomTabNavigator();

const Dashboard = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#3498db',
        inactiveTintColor: 'gray',
        labelStyle: {
          fontSize: 14,
        },
        style: {
          backgroundColor: '#ecf0f1', // Background color of the tab bar
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => <Icon name="home" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="AddItem"
        component={AddItemScreen}
        options={{
          tabBarLabel: 'Add Item',
          tabBarIcon: ({ color, size }) => <Icon name="plus-square" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
};

const DashboardWrapper = ({navigation}) => {
  const logout = () => {
    // Remove the token from storage
    AsyncStorage.removeItem('token');
    AsyncStorage.removeItem('role');
    // Navigate to the AuthNavigator and set it as the root
    navigation.navigate('Welcome');
  }
  return (
    <View style={{ flex: 1 }}>
      <Dashboard />
      <TouchableOpacity style={styles.plusButton} onPress={logout}>
        <Text> Log Out </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  plusButton: {
    position: 'absolute',
    bottom: 55,
    right: 20,
    backgroundColor: '#3498db',
    borderRadius: 30,
    padding: 15,
    elevation: 5, // Add elevation for a slight shadow effect
  },
});

export default DashboardWrapper;
