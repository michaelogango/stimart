import { View, Text,TouchableOpacity,TextInput } from 'react-native'
import React from 'react'

export default function InputField ({label,icon,inputType,keyboardType,change, fieldButton,fieldButtonFunction})  {
  return (    
  <View 
    style={{
        flexDirection:"row",
        borderBottomColor:'ccc',
        borderBottomWidth:1,
        paddingBottom:8,
        marginBottom:25,
    }}>
        
        
{icon}
{inputType == "password" ? (
        <TextInput 
        placeholder={label} 
        keyboardType={keyboardType}
        style={{flex:1, paddingVertical:0}}
        secureTextEntry={true}
        onChangeText={change}
             />
    ):(
        (
            <TextInput 
            placeholder={label} 
            keyboardType={keyboardType}
            style={{flex:1, 
                paddingVertical:0}} 
                />
        )
    )}
        {/* <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style={{color:'#C47600', fontWeight:'700' }}>fieldButton?</Text>
        </TouchableOpacity> */}
        </View>
    
  )
}

