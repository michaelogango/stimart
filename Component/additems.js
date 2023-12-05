import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddItemScreen = () => {
  const [stationName, setStationName] = useState('');
  const [chargingStations, setChargingStations] = useState('');
  const [location, setLocation] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('mpesa');

  const handlePaymentMethodChange = (value) => {
    setPaymentMethod(value);
  };

  const handleSubmit = async () => {
    // Handle form submission
    const token = await AsyncStorage.getItem('token');
    console.log('Station Name:', stationName);
    console.log('Charging Stations:', chargingStations);
    console.log('Location:', location);
    console.log('Payment Method:', paymentMethod);
    console.log('Token:', token);

  
    try {
      // Get the JWT token from local storage
  
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
  
      // Add further logic based on the response if needed
  
    } catch (error) {
      console.error('Error during charging station submission:', error);
    }
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
       <GooglePlacesAutocomplete
  placeholder={'Add a charging location'}
  onPress={(data, details = null) => {
    const placeId = data.place_id;
    console.log('we are hhhhhhhheeeeeerrrrrrreeeeee')
    console.log('Place ID:', placeId);
    axios.get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=AIzaSyC6EFdTlrjLRjiLEzHoauP2CXM9ZLPHUgo`)
      .then(response => {
        if (response.data.result.geometry) {
          const location = response.data.result.geometry.location;
          console.log('Location:', location); // Logs { lat: ..., lng: ... }
          const { lat, lng } = location;
          console.log(lat,lng)
          setLocation({ name: data.description, coordinates: [lng, lat] });
        } else {
          console.log('Location details are not available');
        }
      })
      .catch(error => console.error(error));
  }}
  
  query={{
    key: 'AIzaSyC6EFdTlrjLRjiLEzHoauP2CXM9ZLPHUgo',
    language: 'en',
    components: 'country:ke', // Limit results to Kenya
    
}}
  styles={{
    textInput: { flex: 1, paddingVertical: 0, borderBottomColor: '#ccc', borderBottomWidth: 1,width:'100%' },
  }}
  
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
