import { View, Text,SafeAreaView, TouchableOpacity, FlatList, Image } from 'react-native'
import React ,{useEffect} from 'react'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectTravelTimeInformation } from '../Slices/navslice'
import axios from 'axios'
// import alert from react native 
import { Alert } from 'react-native';

const data=[
  {
      id:'Mini_Bus',
      title:'Van',
      multiplier:1,
      image: require('../assets/images/van.png'),
    
  },
  {
    id:'Main_Bus',
    title:'Bus',
    multiplier:1,
    image: require('../assets/images/bus(1).png'),
    
  }, 
  {
    id:'MotoBike',
    title:'Bike',
    multiplier:1.5,
    image: require('../assets/images/bike.png'),
    
  },

]


const RideOptions = ({navigation}) => {
  const [selected,setSelected]=useState(null);
  const travelTimeInformation=useSelector(selectTravelTimeInformation)

  const [chargingStations, setChargingStations] = useState([]);

  useEffect(() => {
    const fetchChargingStations = async () => {
      try {
        // Make a GET request to the provided endpoint
        const response = await axios.get('https://6c8d-196-207-134-81.ngrok-free.app/chargingStations/getAllChargingStations');
        // Filter out data with missing coordinates
        const filteredData = response.data.filter(station => 
          station.chargingStations &&
          station.chargingStations.length > 0 &&
          station.chargingStations[0].location &&
          station.chargingStations[0].location.coordinates &&
          station.chargingStations[0].location.coordinates[0] !== null &&
          station.chargingStations[0].location.coordinates[1] !== null
        );        console.log('Filtered data:', filteredData);
        // Update the state with the filtered charging stations
        setChargingStations(filteredData);
      } catch (error) {
        console.error('Error fetching charging stations:', error);
      }
    };

    // Fetch charging stations when the component mounts
    fetchChargingStations();
  }, []);

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity 
        onPress={()=>navigation.navigate("NavigationCard")}
        style={tw`absolute top-3 left-5 p-3 rounded-full`}>
          <Icon
          name="chevron-left"
          type='fontawesome'/>
        </TouchableOpacity>
    <Text style={tw`text-center py-5 text-lg font-semibold`}>
      Pick close Station- {travelTimeInformation?.distance.text}
    </Text>
    </View>
    <FlatList
        data={chargingStations}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              // Handle the onPress event as needed
              console.log('Charging Station Pressed:', item);
              // send a alert
              Alert.alert('Success', 'Charging station added successfully', [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
              ]); 

            }}
            style={{ padding: 15, borderBottomWidth: 1, borderBottomColor: '#ccc' }}
          >
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
            <Text>{`Location: ${item.chargingStations[0].locationName}`}</Text>
            <Text>{`Coordinates: ${item.chargingStations[0].location.coordinates[0]}, ${item.chargingStations[0].location.coordinates[1]}`}</Text>
          </TouchableOpacity>
        )}
      />
    <View>
      <TouchableOpacity disabled={!selected} style={tw`bg-black py-3 m-4 rounded-md ${!selected && "bg-gray-300"}`}>
        <Text style={tw`text-center text-white text-lg `}>Choose {selected?.locationName}</Text>
      </TouchableOpacity>
    </View>

  
    </SafeAreaView>
  )
}

export default RideOptions