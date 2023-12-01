import React from 'react';
import { View, TextInput } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import axios from 'axios';
export default function InputField({
  label,
  icon,
  inputType,
  keyboardType,
  change,
  value,
  isLocationInput = false,
}) {

  return (
    <View style={{ marginBottom: 25 }}>
      {icon}
      {inputType === 'password' ? (
        // Your existing password input logic
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          style={{ borderBottomColor: '#ccc', borderBottomWidth: 1, paddingBottom: 8 }}
          secureTextEntry={true}
          onChangeText={change}
          value={value}
        />
      ) : isLocationInput ? (
        // Location input using Google Places API
        <GooglePlacesAutocomplete
          placeholder={label}
          onPress={(data, details = null) => {
            const placeId = data.place_id;
            console.log('we are hhhhhhhheeeeeerrrrrrreeeeee')
            console.log('Place ID:', placeId);
            axios.get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=AIzaSyCkJueJ-kYff4oR_aqwM3Ot5oIln8ikJx0`)
              .then(response => {
                if (response.data.result.geometry) {
                  const location = response.data.result.geometry.location;
                  console.log('Location:', location); // Logs { lat: ..., lng: ... }
                  const { lat, lng } = location;
                  change({ name: data.description, coordinates: [lng, lat] });
                } else {
                  console.log('Location details are not available');
                }
              })
              .catch(error => console.error(error));
          }}
          
          query={{
            key: 'AIzaSyCkJueJ-kYff4oR_aqwM3Ot5oIln8ikJx0',
            language: 'en',
            components: 'country:ke', // Limit results to Kenya
            fields: ['geometry'], // Add this line

        }}
          styles={{
            textInput: { flex: 1, paddingVertical: 0, borderBottomColor: '#ccc', borderBottomWidth: 1 },
          }}
          textInputProps={{
            keyboardType: keyboardType,
          }}
        />
      ) : (
        // Regular text input
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          style={{ flex: 1, paddingVertical: 0, borderBottomColor: '#ccc', borderBottomWidth: 1 }}
          onChangeText={change}
          value={value}
        />
      )}
    </View>
  );
}
