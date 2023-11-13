import { View, Text, Pressable } from 'react-native'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient'
import {Image} from 'react-native'
import {Dimensions} from 'react-native'
import Button from '../Component/Button'
import { useNavigation } from '@react-navigation/native';


const Welcome = ({navigation}) => {

  const loginButton = () => {
    navigation.navigate("Login")};
  
  return (
    
    <LinearGradient
    style={{
        flex:1

    }}
    colors={['#FFA384','#702D91']}
    >
    <View style={{flex:1}}>
      <View >
        <Image source={require('../assets/images/welcome.png')} style={{width:Dimensions.get('screen').width,height:Dimensions.get('screen').height}}/>
      </View>
      <Text style={{fontSize:25,fontWeight:'bold',color:'white',position:'absolute',top:Dimensions.get('screen').height/3.4-100,left:Dimensions.get('screen').width/2.7-100}}>
         Welcome to Stimacharge</Text>
       
    </View>
    <Button 
    style={{ marginVertical:12}}
    onPress={loginButton}
     title="Join Now" 

     />
     <View style={{
      flexDirection:"row",
      marginTop:10,
      justifyContent:"center",
      marginVertical:20
  
     }}>
    <Text style={{
      color:'white',
      fontSize:15
    }}
    >Already have an account?</Text>
    <Pressable
    onPress={()=>navigation.navigate("Register")}
    >
<Text style={{
  fontSize:16,
  fontWeight:'bold',
  color:'white',
  marginLeft:4
}}>Register</Text>

    </Pressable>
     </View>
    </LinearGradient>
    
  );
};

export default Welcome;