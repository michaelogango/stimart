import { View, Text, StyleSheet, Image, TextInput,ScrollView,TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import InputField from '../Component/InputField'
import RadioForm from 'react-native-simple-radio-button'
import { useState } from 'react'


   const Register = ({navigation}) => {
      const [name, setName] = useState('');
      const [password, setPassword] = useState('');
      const [email, setEmail] = useState('');
      const [confirmPassword, setConfirmPassword] = useState('');
      const [location, setLocation] = useState('');
      const [phoneNumber, setPhoneNumber] = useState('');
      const items=[
        {label:"Host",value:0},
        {label:"Passenger",value:1}
      ]
    
     
      return (
        <ScrollView style={{
          marginLeft:20,
          marginRight:20
         }}>
      
          <View style={{alignItems:'center'}}>
          <Image source={require('../assets/images/Register.png')} 
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
              Create an account
            </Text>
        
           
            
      
          </View>
    
    {/* ----------------------------------------Social logins-------------------------------------------------- */}
          
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
          }}
          />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{}} style={{borderColor:'#ddd', borderWidth:2, borderRadius:10, paddingHorizontal:20, paddingVertical:7}}>
            <Image source={require('../assets/images/icons/Twitter.png')} 
          style={{
          height: 30,
          width: 30,
         }}
          />
            </TouchableOpacity>
    
            <TouchableOpacity onPress={()=>{}}style={{borderColor:'#ddd', borderWidth:2, borderRadius:10, paddingHorizontal:20, paddingVertical:7}}>
            <Image source={require('../assets/images/icons/Facebook.png')} 
          style={{
          height: 30,
          width: 30,
         }}
          />
            </TouchableOpacity>
         
          </View>
          {/* --------------------------------------------------------------------------------------------------------------------- */}
    
          <Text style={{textAlign:'center', color:'#F9B34B', marginBottom:10}}> Or Signup With email</Text>
            
      {/* -----------------------------------------------InputFields--------------------------------------------------------------- */}
         
    
    
    {/* -----------------------------------------------Radio Button--------------------------------------------------------------- */}
         <View style={{padding:10}}>
          <Text style={{color:'black', fontWeight:'bold', fontSize: 15, marginBottom:20, marginLeft:'auto', marginRight:'auto'}}>
            Who are you Registering in as?
          </Text>
         {/* 
          <RadioForm 
          radio_props={items} 
          buttonSize={20}
          initial={value}
           onPress={(value)=>setValue(value)}
           buttonColor='#ccc'
           labelColor='#ccc'
           selectedButtonColor='#000000'
           selectedLabelColor='#000000'
           labelHorizontal={false}
           formHorizontal={true}
           inital={null}
           radioStyle={{paddingRight:15}}
           style={{marginLeft:'auto', marginRight:'auto'}}
       
           />
        */}
         </View>
    
    {/* -----------------------------------------------Radio Button--------------------------------------------------------------- */}
    
    
    
    <InputField 
            label={'Full Name'}
            icon={<Ionicons name='person-outline' 
          size={20}
          color='#666'
          style={{marginRight:5}}
          change={(text) => setName(text)}
          />
          // onChangeText={setName}
        }
          /> 
     <InputField
          label={'Email ID'}
         icon= {<MaterialIcons name='alternate-email' size={20} 
         color="#666" 
         style={{marginRight:5, paddingVertical:0}}
         //change={(text)=> setEmail(text)}
         />}
        
          />
    
    <InputField
          label={'Phone Number'}
         icon= {<Feather name='phone' 
         size={20} 
         color="#666" 
         style={{marginRight:5, paddingVertical:0}}/>}
         inputType="numeric"
         //change={(text)=> setPhoneNumber(text)}
         
          />
    
    
    <InputField
          label={'Password'}
         icon= {<Ionicons name='ios-lock-closed-outline' 
         size={20} color="#666" 
         style={{marginRight:5, paddingVertical:0}}/>}
         inputType="password"
         //change={(text)=> setPassword(text)}
          />
    
    <InputField
          label={'Confirm Password'}
         icon= {<Ionicons name='ios-lock-closed' size={20} color="#666" style={{marginRight:5, paddingVertical:0}}/>}
         inputType="password"
          />
           <InputField
          label={'Location'}
         icon= {<MaterialIcons name='alternate-email' size={20} color="#666" style={{marginRight:5, paddingVertical:0}}/>}
        
          />
    
          {/* --------------------------------------------End of Input Fields---------------------------------------------- */}
    
           <View style={{flexDirection:'row', borderBottomColor:'#ccc', borderBottomWidth:1, paddingBottom:8, marginBottom:30}}>
    
          <Ionicons 
          name='calendar-outline' 
          size={20}
          color='#666'
          style={{marginRight:5}}
          />
          <TouchableOpacity onPress={()=>{}}>
            <Text style={{color:'#666', marginLeft:5,marginTop:5}}>Date of Birth </Text>
           
    
          </TouchableOpacity>
          </View> 
          {/* <DatePicker
          modal
          open={open}
          date={date}
          mode={'date'}
          maximumDate={new Date('2005-01-01')}
          minimumDate={new Date('1980-01-01')}
          onConfirm={(date)=>{
            setDate(false)
            setOpen(date)
            setDoblabel(date.toDateString());
          }}
          onCancel={()=>{
            setOpen(false)
          }}
          /> */}
          {/* -------------------------------------- Button---------------------------"Already have an account"----------------- */}
          
            <TouchableOpacity onpress={()=>{}} style={{backgroundColor:'#ff9900',padding:20,borderRadius:15, marginBottom:30}}>
            <Text style={{color:'#fff', fontWeight:'700' , fontSize:16, textAlign:'center'}}>Register</Text>
            </TouchableOpacity>
           
          <View style={{flexDirection:'row', justifyContent:"center", marginBottom:30}}>
          <Text> Already have an account?</Text>
          <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
            <Text style={{color:'#C47600', fontWeight:'700' , marginLeft:6}}>Login</Text>
            </TouchableOpacity>
            </View>
        
          </ScrollView>
      
        
        );
      }
    
    
    export default Register;
    