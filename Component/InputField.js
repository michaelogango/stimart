import React from 'react';
import { View, TextInput } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

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
            const { name, geometry } = details;
            const { location } = geometry;
            const { lat, lng } = location;
            change({ name, coordinates: [lng, lat] });
          }}
          query={{
            key: 'AIzaSyATR4shLx3yAHIijF8AinfuZdG0bc-lTEU',
            language: 'en',
            components: 'country:ke', // Limit results to Kenya
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
