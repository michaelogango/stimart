import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AddItemScreen = () => {
  const [chargingStations, setChargingStations] = useState('');
  const [location, setLocation] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('mpesa');

  const handlePaymentMethodChange = (value) => {
    setPaymentMethod(value);
  };

  const handleSubmit = async () => {
    // Handle form submission
    const token = await AsyncStorage.getItem('token');
    console.log('Location:', location);
    console.log('Payment Method:', paymentMethod);
    console.log('Token:', token);

    try {
      // Make a request to your backend to add the charging station
      const response = await axios.post(
        'https://6c8d-196-207-134-81.ngrok-free.app/chargingStations/addChargingStation',
        {
          token,
          location: location.coordinates,
          locationName: location.name,
        }
      );

      console.log('Response from backend:', response.data);

      // Check if the response indicates success
      if (response.status === 201) {
        // Show an alert for successful update
        Alert.alert('Success', 'Charging station added successfully', [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);

        // Add further logic based on the response if needed
      } else {
        // Show an alert for other response statuses (handle error cases)
        Alert.alert('Error', 'Failed to add charging station', [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);
      }
    } catch (error) {
      console.error('Error during charging station submission:', error);

      // Show an alert for general errors
      Alert.alert('Error', 'An error occurred. Please try again.', [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.bottomView}>
        <GooglePlacesAutocomplete
          placeholder={'Add a charging location'}
          onPress={(data, details = null) => {
            const placeId = data.place_id;
            axios
              .get(
                `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=AIzaSyC6EFdTlrjLRjiLEzHoauP2CXM9ZLPHUgo`
              )
              .then((response) => {
                if (response.data.result.geometry) {
                  const location = response.data.result.geometry.location;
                  const { lat, lng } = location;
                  setLocation({ name: data.description, coordinates: [lng, lat] });
                } else {
                  console.log('Location details are not available');
                }
              })
              .catch((error) => console.error(error));
          }}
          query={{
            key: 'AIzaSyC6EFdTlrjLRjiLEzHoauP2CXM9ZLPHUgo',
            language: 'en',
            components: 'country:ke', // Limit results to Kenya
          }}
          styles={{
            textInput: { flex: 1, paddingVertical: 0, borderBottomColor: '#ccc', borderBottomWidth: 1, width: '100%' },
          }}
        />

        <TextInput
          style={styles.input}
          placeholder="Amount of Charging Stations"
          value={chargingStations}
          onChangeText={setChargingStations}
          keyboardType="numeric"
        />

        <View style={styles.radioContainer}>
          <Text style={styles.paymentLabel}>Payment Method:</Text>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  bottomView: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ff9900',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  radioContainer: {
    marginBottom: 20,
  },
  paymentLabel: {
    marginBottom: 10,
    color: '#ff9900',
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#ff9900',
    borderRadius: 10,
    padding: 15,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default AddItemScreen;
