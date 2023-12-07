import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const DashboardScreen = () => {
  const [numberOfStations, setNumberOfStations] = useState(0);
  const [amountOfCharge, setAmountOfCharge] = useState(0);
  const [moneyReceived, setMoneyReceived] = useState(0);

  useEffect(() => {
    // Make a GET request to fetch dashboard information
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        console.log('Token:', token);
        const response = await axios.get(
          'https://6c8d-196-207-134-81.ngrok-free.app/chargingStations/getDashboardInfo',
          {
            params: {
              token,
            },
          }
        );
  
        const { numberOfStations, amountOfCharge, moneyReceived } = response.data;
        setNumberOfStations(numberOfStations);
        setAmountOfCharge(amountOfCharge);
        setMoneyReceived(moneyReceived);
      } catch (error) {
        console.error('Error fetching dashboard information:', error);
      }
    };
  
    // Call fetchData immediately and then every 15 seconds
    fetchData();
    const intervalId = setInterval(fetchData, 15000);
  
    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);
  


  return (
    <View style={styles.container}>
      {/* Box 1: Number of Stations */}
      <View style={styles.box}>
        <Text style={styles.boxTitle}>Number of Stations</Text>
        <Text style={styles.boxContent}>{numberOfStations}</Text>
      </View>
      {/* Box 3: Amount of Charge */}
      <View style={styles.box}>
        <Text style={styles.boxTitle}>Amount of Charge</Text>
        <Text style={styles.boxContent}>{`${amountOfCharge}%`}</Text>
      </View>

      {/* Box 4: Money Received */}
      <View style={styles.box}>
        <Text style={styles.boxTitle}>Money Received</Text>
        <Text style={styles.boxContent}>{`$${moneyReceived}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff', // Background color
  },
  box: {
    width: '80%',
    height: 120,
    backgroundColor: '#3498db', // Box color
    borderRadius: 15,
    marginBottom: 20,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Add elevation for a slight shadow effect
  },
  boxTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff', // Text color
  },
  boxContent: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', // Text color
  },
});

export default DashboardScreen;
