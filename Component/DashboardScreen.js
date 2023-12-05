import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      {/* Box 1: Number of Stations */}
      <View style={styles.box}>
        <Text style={styles.boxTitle}>Number of Stations</Text>
        <Text style={styles.boxContent}>10</Text>
      </View>

      {/* Box 2: Number of Clicked Stations */}
      <View style={styles.box}>
        <Text style={styles.boxTitle}>Clicked Stations</Text>
        <Text style={styles.boxContent}>5</Text>
      </View>

      {/* Box 3: Amount of Charge */}
      <View style={styles.box}>
        <Text style={styles.boxTitle}>Amount of Charge</Text>
        <Text style={styles.boxContent}>80%</Text>
      </View>

      {/* Box 4: Money Received */}
      <View style={styles.box}>
        <Text style={styles.boxTitle}>Money Received</Text>
        <Text style={styles.boxContent}>$100</Text>
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
