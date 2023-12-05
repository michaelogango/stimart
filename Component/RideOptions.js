import { View, Text,SafeAreaView, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectTravelTimeInformation } from '../Slices/navslice'

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
      Pick mode of transport- {travelTimeInformation?.distance.text}
    </Text>
    </View>
    <FlatList
    data={data}
    keyExtractor={(item)=>item.id}
    renderItem={({item: {id,title,multiplier,image},item})=>(
      <TouchableOpacity
      onPress={()=>setSelected(item)}
      style={tw`flex-row justify-between items-center px-10 ${id===selected?.id && "bg-gray-200"}`}
      >
       <Image 
       style={{width:55,
       height:55,
       resizeMode:'contain'}}
       source={item.image}/>
<View style={tw`-ml-6`}>
  <Text style={tw`text-base font-semibold `}>{title}</Text>
  <Text>{travelTimeInformation?.duration.text}</Text>
</View>
<Text style={tw`text-base`}>Ksh50</Text>
      </TouchableOpacity>

    )}
    />
    <View>
      <TouchableOpacity disabled={!selected} style={tw`bg-black py-3 m-4 rounded-md ${!selected && "bg-gray-300"}`}>
        <Text style={tw`text-center text-white text-lg `}>Choose {selected?.title}</Text>
      </TouchableOpacity>
    </View>

  
    </SafeAreaView>
  )
}

export default RideOptions