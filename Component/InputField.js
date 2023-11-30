// In your InputField.js
import { View, TextInput } from 'react-native';
import React from 'react';

export default function InputField({ label, icon, inputType, keyboardType, change, value }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomColor: '#ccc', // Fix the color value
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25,
      }}>
      {icon}
      {inputType === 'password' ? (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          style={{ flex: 1, paddingVertical: 0 }}
          secureTextEntry={true}
          onChangeText={change} // Use the passed change prop for updating state
          value={value} // Use the passed value prop for controlled input
        />
      ) : (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          style={{ flex: 1, paddingVertical: 0 }}
          onChangeText={change} // Use the passed change prop for updating state
          value={value} // Use the passed value prop for controlled input
        />
      )}
    </View>
  );
}
