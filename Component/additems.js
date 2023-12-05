import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';

const AddItemScreen = () => {
  const [stationName, setStationName] = useState('');
  const [chargingStations, setChargingStations] = useState('');
  const [location, setLocation] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('mpesa');

  const handlePaymentMethodChange = (value) => {
    setPaymentMethod(value);
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log('Station Name:', stationName);
    console.log('Charging Stations:', chargingStations);
    console.log('Location:', location);
    console.log('Payment Method:', paymentMethod);
    // Add further logic as needed
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name of Station"
        value={stationName}
        onChangeText={setStationName}
      />
      <TextInput
        style={styles.input}
        placeholder="Amount of Charging Stations"
        value={chargingStations}
        onChangeText={setChargingStations}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Location"
        value={location}
        onChangeText={setLocation}
      />

      <View style={styles.radioContainer}>
        <Text>Payment Method:</Text>
        <View style={styles.radioButton}>
          <RadioButton
            value="mpesa"
            status={paymentMethod === 'mpesa' ? 'checked' : 'unchecked'}
            onPress={() => handlePaymentMethodChange('mpesa')}
          />
          <Text>M-Pesa</Text>
        </View>
        <View style={styles.radioButton}>
          <RadioButton
            value="card"
            status={paymentMethod === 'card' ? 'checked' : 'unchecked'}
            onPress={() => handlePaymentMethodChange('card')}
          />
          <Text>Card</Text>
        </View>
        <View style={styles.radioButton}>
          <RadioButton
            value="cash"
            status={paymentMethod === 'cash' ? 'checked' : 'unchecked'}
            onPress={() => handlePaymentMethodChange('cash')}
          />
          <Text>Cash</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  radioContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#3498db',
    borderRadius: 10,
    padding: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default AddItemScreen;
