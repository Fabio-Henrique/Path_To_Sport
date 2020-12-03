import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Perfil from "../Views/Perfil";
import { MaterialIcons } from "@expo/vector-icons";
import Peneira from "../Views/Peneira";

const Tab = createBottomTabNavigator();

const AppInteiro = () => {


     const icones = {
    Perfil: { name: "person" },
    Peneira: { name: "apps" },
    };
    return <Tab.Navigator
    initialRouteName = "Peneira"
    tabBarOptions={{
        style: { backgroundColor: "#e7e7e7", borderTopColor: "#5e6796" },
        activeTintColor: "#25293c",
        inactiveTintColor: "#aeb3ca",
        showLabel: false,
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          const { name } = icones[route.name];
          return <MaterialIcons name={name} size={30} color={color} />;
        },
      })}
      >



    <Tab.Screen name = "Peneira" component = {Peneira}/>
    <Tab.Screen name = "Perfil" component = {Perfil}/>

    </Tab.Navigator>
}

export default AppInteiro;