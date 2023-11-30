import { View, Text, StyleSheet, Image, TextInput,ScrollView,TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import InputField from '../Component/InputField'
import RadioForm from 'react-native-simple-radio-button'
import { useState } from 'react'
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import { Alert } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';

import axios from 'axios';


   const Register = ({navigation}) => {
      const [name, setName] = useState('');
      const [password, setPassword] = useState('');
      const [email, setEmail] = useState('');
      const [confirmPassword, setConfirmPassword] = useState('');
      const [location, setLocation] = useState('');
      const [phoneNumber, setPhoneNumber] = useState('');
      const [value, setValue] = useState(0);
      const [open, setOpen] = useState(false);
      const [date, setDate] = useState(new Date());
      const [dobLabel, setDobLabel] = useState('');

      const [mode, setMode] = useState('date');
      const [show, setShow] = useState(false);
      const [showAddLocation, setShowAddLocation] = useState(true);
      const [chargingLocations, setChargingLocations] = useState([]);
      const [Username,setUserName]=useState('')


    
// Function to add a new charging location

const showDatePicker = () => {
  setShow(true);
};
const onSignUpPress = async () => {

  try {
  
    if (password!== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Username:', Username);
    console.log('Location:', location);
    console.log('Phone Number:', phoneNumber);
    console.log('Date of Birth:', date);
    console.log('Charging Stations:', chargingLocations);
    console.log('Role:', value);
    
    const response = await axios.post('https://c846-196-207-134-81.ngrok-free.app/users/signup', {
      name,
      email,
      password,
      Username,
      role: value === 0 ? 'host' : 'passenger', // Assuming 0 represents 'host' in your RadioForm
      location,
      phoneNumber,
      dob: date,
      chargingStations: chargingLocations,
    });
    
    // Assuming your backend sends a token upon successful registration
    const { token } = response.data;
    console.log(response.data);

    // Save the token in your preferred storage method (AsyncStorage, Redux, etc.)
    // Example using AsyncStorage:
    // await AsyncStorage.setItem('token', token);

    // Navigate to the 'Welcome' screen
    const decodedToken = jwt.decode(token);

    // Check the user's role
    if (decodedToken.role === 'host') {
      // Navigate to the 'WelcomeHost' screen
      navigation.navigate('WelcomeHost');
    } else {
      // Navigate to the 'Welcome' screen
      navigation.navigate('Welcome');
    }
  } catch (error) {
    console.error('Error during signup:', error);
    Alert.alert('Error', 'Registration failed. Please try again.',error);
  }
};

// Function to update a charging location



      const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
      };
  
    
  
      const items=[
        {label:"Admin",value:0},
        {label:"Customer",value:1}
      ]
      const handlePress = () => {
        setOpen(!open); // Toggle the state (open/close)
      };
      const handlePresss = () => {
        setShowAddLocation(!showAddLocation);
      };
    

     
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
    
            <TouchableOpacity onPress={() => onFacebookButtonPress().then(() => console.log('Signed in with Facebook!'))}style={{borderColor:'#ddd', borderWidth:2, borderRadius:10, paddingHorizontal:20, paddingVertical:7}}>
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
         {
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
        }
         </View>
    
    {/* -----------------------------------------------Radio Button--------------------------------------------------------------- */}
    
    
    <InputField 
            label={'Full name'}
            icon={<Ionicons name='person-outline' 
          size={20}
          color='#666'
          style={{marginRight:5}}
          ></Ionicons>}
          value={name} // Pass the state variable
          change={(text) => setName(text)}
          />
       
            
    <InputField 
            label={'Username'}
            icon={<Ionicons name='person-outline' 
          size={20}
          color='#666'
          style={{marginRight:5}}
          ></Ionicons>}
          value={Username} // Pass the state variable
          change={(text) => setUserName(text)}
          />
        


     <InputField
          label={'Email '}
         icon= {<MaterialIcons name='alternate-email' size={20} 
         color="#666" 
         style={{marginRight:5, paddingVertical:0}}
         ></MaterialIcons>}
         value={email} // Pass the state variable
         change={(text) => setEmail(text)} // Pass the state update function
          />
    
    <InputField
        label={'Phone Number'}
        icon={<Feather name='phone' size={20} color="#666" style={{ marginRight: 5, paddingVertical: 0 }} />}
        inputType="numeric"
        value={phoneNumber} // Pass the state variable
        change={(text) => setPhoneNumber(text)} // Pass the state update function
      />
    
    
    <InputField
          label={'Password'}
         icon= {<Ionicons name='ios-lock-closed-outline' 
         size={20} color="#666" 
         style={{marginRight:5, paddingVertical:0}}/>}
         inputType="password"
         value={password} // Pass the state variable
         change={(text) => setPassword(text)} // Pass the state update function
       
          />
    
    <InputField
          label={'Confirm Password'}
         icon= {<Ionicons name='ios-lock-closed' size={20} color="#666" style={{marginRight:5, paddingVertical:0}}/>}
         inputType="password"
         value={confirmPassword} // Pass the state variable
         change={(text) => setConfirmPassword(text)} // Pass the state update function
          />
           <InputField
          label={'Location'}
         icon= {<MaterialIcons name='alternate-email' size={20} color="#666" style={{marginRight:5, paddingVertical:0}}/>}
         inputType="text"
         value={location} // Pass the state variable
         change={(text) => setLocation(text)} // Pass the state update function
        
          />
    
          {/* --------------------------------------------End of Input Fields---------------------------------------------- */}
    
           <View style={{flexDirection:'row', borderBottomColor:'#ccc', borderBottomWidth:1, paddingBottom:8, marginBottom:30}}>
    
          <Ionicons 
          name='calendar-outline' 
          size={20}
          color='#666'
          style={{marginRight:5}}
          />
      <TouchableOpacity  onPress={showDatePicker}>
        <Text style={{color:'#666', marginLeft:5,marginTop:5}}>Date of Birth</Text>
      </TouchableOpacity>
          </View> 
          {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
      {date && (
  <View >
    <Text style={{ color: 'black', fontSize: 18 }}>
      Selected Date: {date.toLocaleDateString()}
    </Text>
  </View>
)}
      
     

{value === 0 && (
        <InputField
          label={'Charging Location'}
          icon={<Feather name='map-pin' size={20} color="#666" style={{ marginRight: 5, paddingVertical: 0 }} />}
          inputType="text"
          value={chargingLocations}
          change={(text) => setChargingLocations(text)}
        />
      )}

          {/* -------------------------------------- Button---------------------------"Already have an account"----------------- */}
          
          <TouchableOpacity onPress={onSignUpPress} style={{backgroundColor:'#ff9900', padding:20, borderRadius:15, marginBottom:30}}>
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
    