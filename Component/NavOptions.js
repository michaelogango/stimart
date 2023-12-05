import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'




const data=[
    {
        id:'123',
        title:'Get your bus',
        image: require('../assets/images/car.png'),
        screen:"MapScreen"
      
    },
    {
        id:'456',
        title:'My profile',
        image: require('../assets/images/profile.png'),
        screen:"Profile screen" //this will need to change
      
    }
]


const NavOptions = () => {
  const navigation=useNavigation();
  return (
    <FlatList
  data={data}
  horizontal
  keyExtractor={(item)=>item.id}
  renderItem={({item})=>(
    <TouchableOpacity
    style={tw`p-2 pl-2 pb-8 pt-4 bg-gray-200 m-2 w-40`}
    onPress={()=> navigation.navigate(item.screen)}
    >
        <View>
            <Image
                style={{width:120, height:120, resizeMode:"contain"}}
                source={item.image}
            />
            <Text style={tw `mt-2  text-lg font-semibold`}>{item.title}</Text>
            <Ionicons name="arrow-forward-circle" size={40} style={{marginLeft:'auto', marginRight:'auto'}}
          />
        </View>
    </TouchableOpacity>
  )
}
    />
  )
}

export default NavOptions

