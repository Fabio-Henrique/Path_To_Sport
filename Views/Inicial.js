import React, { useState } from "react";
import {Text, View, TouchableOpacity, ImageBackground} from "react-native";



function Inicial ({navigation}) {

   
    const mudarPaginaLogin=()=> {
        navigation.navigate("Login");
    }
    const mudarPaginaCadastro=()=> {
        navigation.navigate("Cadastro");
    }

    return (
    <View style={{flex: 1, flexDirection: "column", alignItems: "center"}}>
    <ImageBackground source = {require("../Image/fut.jpg")} style = {{ flex: 1, height: "100%", width: "100%", alignItems: "center"}}>
       
         <Text style={{fontSize: 25, color: "white", textAlign: "center", marginTop: "40%", fontFamily: "Trebuchet MS", fontWeight: 500}}> O maior app de peneiras esportivas! </Text>
        
        <View style={{ justifyContent: "center", width: 90, alignItems : "center", }}>

            
        <TouchableOpacity onPress={mudarPaginaLogin} style={{borderColor:"rgba(94,103,150,0.5)" ,backgroundColor: "rgba(255,255,255,0.5)" ,borderWidth: 2, borderRadius: 5, alignItems: "center", marginBottom: 15, padding: 5, paddingHorizontal: 48, marginTop: 150}}> 

<Text style={{fontSize: 25, color: "#5e6796", fontFamily: "Trebuchet MS"}}> Login </Text>

        </TouchableOpacity>
        <TouchableOpacity onPress={mudarPaginaCadastro} style={{borderColor:"rgba(94,103,150,0.5)" ,backgroundColor: "rgba(255,255,255,0.5)",borderWidth: 2, borderRadius: 5, alignItems: "center", padding: 5, paddingHorizontal: 30}}> 

<Text style={{fontSize: 25, color: "#5e6796", fontFamily: "Trebuchet MS"}}> Cadastro </Text>

        </TouchableOpacity>
</View>
   
   </ImageBackground>
    </View>
    ) 

}
export default Inicial;

//