import "expo-router/entry"; 
import react from "react";
import { View, Text, StyleSheet} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import {Login,Register,Welcome} from "./Screens/index";

const Stack = createStackNavigator();
export default function () {
  return (

    <View style={styles.container}>
        <Text>hello world</Text>
        <statusbar style="auto"/>
    </View>
)
  }
  const stlye = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center",
    }
});
    