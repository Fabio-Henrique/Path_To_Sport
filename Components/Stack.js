import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Inicial from "../Views/Inicial";
import Login from "../Views/Login";
import Cadastro from "../Views/Cadastro";
import AppInteiro from "./Tab";

const Stack = createStackNavigator();

const RotaInicial = () => { 

    return (

        <Stack.Navigator initialRouteName = "Inicial" > 
        
        <Stack.Screen

        name= "Inicial"
        component= {Inicial}
        options={{
          headerShown: false,
        }}

        />
        <Stack.Screen

        name= "Login"
        component= {Login}
        options={{
          headerShown: false,
        }}

        />
        <Stack.Screen

        name= "Cadastro"
        component= {Cadastro}
        options={{
          headerShown: false,
        }}


        />
        <Stack.Screen

        name= "Perfil"
        component= {AppInteiro}
        options={{
          headerShown: false,
        }}

        />

        </Stack.Navigator>


    )

}
export default RotaInicial;