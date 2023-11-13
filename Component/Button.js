import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native'
const Button = ({ onPress, title }) => {
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  };


const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ff9900', 
    padding: 20,
    borderRadius: 15,
    width:"70%",
    marginLeft:"auto",
    marginRight:"auto",
    
  },
  buttonText: {
    color: '#FFFFFF', // Replace with the desired text color
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

export default Button