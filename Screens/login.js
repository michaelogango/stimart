import { View, Text, StyleSheet, Image, TextInput,TouchableOpacity} from 'react-native'
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

//import GoogleSVG from '../assets/images/icons/Google.svg'

const Login = ({navigation}) => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        // Navigate if the token exists
        //navigation.navigate('AdminDash');

        console.log('Decoded token:', decodedToken);

      }
    };
  
    checkToken();
  }, []);
  
  

  const handleLoginPress = async () => {
    console.log('email', email)
    console.log('password', password)
    try {
      const response = await axios.post('https://6c8d-196-207-134-81.ngrok-free.app/users/login', {
        username: email,
        password,
      })

      if (response.status === 200) {
        
        console.log('response', response.data)
      // Store the token in local storage
      console.log("token",response.data.token)
      const token = response.data.token;
      await AsyncStorage.setItem('token', token);
        if (response.data.role === 'Admin') {
          navigation.navigate('AdminDash')
        } 
        if (response.data.role === 'Customer') {
          navigation.navigate('HomeScreen')
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
   <View style={{
    marginLeft:20,
    marginRight:20
   }}>

    <View style={{alignItems:'center'}}>
    <Image source={require('../assets/images/Bus.png')} 
    style={{
    alignItems:"center",
    resizeMode:'cover',
    marginVertical:12,
    height: 270,
    width: 320}}
    />
    </View>
    <View>
    <Text style={{
        fontSize:20,
        fontWeight:'bold',
        marginVertical:12,
        color:'#000000'
      }}>
        Login
      </Text>
  
     
      

    </View>
    <View style={{
      flexDirection:"row",
      borderBottomColor:'ccc',
      borderBottomWidth:1,
      paddingBottom:8,
      marginBottom:10,
  }}>
      <MaterialIcons name='alternate-email' size={20} color="#666" style={{marginRight:5, paddingVertical:0}}/>
      <TextInput
          placeholder='username'
          style={{ flex: 1, paddingVertical: 0 }}
          keyboardType='email-address'
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={{
      flexDirection:"row",
      borderBottomColor:'ccc',
      borderBottomWidth:1,
      paddingBottom:8,
      marginBottom:10,
  }}>
      <Ionicons name='ios-lock-closed-outline' size={20} color="#666" style={{marginRight:5, paddingVertical:0}}/>
      <TextInput
          placeholder='Password'
          style={{ flex: 1, paddingVertical: 0 }}
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
              <TouchableOpacity onPress={()=>{}}>
      <Text style={{color:'#C47600', fontWeight:'700' }}>Forgot?</Text>
      </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleLoginPress} style={{backgroundColor:'#ff9900',padding:20,borderRadius:15, marginBottom:30}}>
      <Text style={{color:'#fff', fontWeight:'700' , fontSize:16, textAlign:'center'}}>Login</Text>
      </TouchableOpacity>
      <Text style={{textAlign:'center', color:'#F9B34B', marginBottom:30}}> Or Login With...</Text>
      
      <View style={{
          flexDirection:'row',
          justifyContent:'space-evenly',
          marginBottom:20
          
        }}>
        <TouchableOpacity onPress={()=>{}} style={{borderColor:'#ddd', borderWidth:2, borderRadius:10, paddingHorizontal:20, paddingVertical:7}}>
        <Image source={require('../assets/images/icons/Google.png')} 
      style={{
      height: 25,
      width: 25,
      marginLeft:'auto',
      marginRight:'auto'}}
      />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{}} style={{borderColor:'#ddd', borderWidth:2, borderRadius:10, paddingHorizontal:20, paddingVertical:7}}>
        <Image source={require('../assets/images/icons/Twitter.png')} 
      style={{
      height: 30,
      width: 30,
      marginLeft:'auto',
    marginRight:'auto'}}
      />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{}}style={{borderColor:'#ddd', borderWidth:2, borderRadius:10, paddingHorizontal:20, paddingVertical:7}}>
        <Image source={require('../assets/images/icons/Facebook.png')} 
      style={{
      height: 30,
      width: 30,
      marginLeft:'auto',
    marginRight:'auto'}}
      />
        </TouchableOpacity>
     
      </View>
      <View style={{flexDirection:'row', justifyContent:"center", marginBottom:30}}>
      <Text> Dont have an account?</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
        <Text style={{color:'#C47600', fontWeight:'700', marginLeft:6 }}>Register</Text>
        </TouchableOpacity>
        </View>

    </View>

  
  );
}

export default Login

