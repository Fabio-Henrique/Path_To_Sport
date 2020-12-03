import React, {useState} from "react";
import {Text, View, TouchableOpacity, ImageBackground, TextInput} from "react-native";
import { AntDesign } from '@expo/vector-icons';


function Login ({navigation}) {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const mudarPagina=()=> {
        navigation.navigate("Inicial");
    }
    const Logar=() => {
        navigation.navigate("Perfil")
    }

    return (
    <View style={{flex: 1}}>

<ImageBackground source = {require("../Image/fut.jpg")} style = {{ flex: 1, height: "100%", width: "100%"}}>
       

        <TouchableOpacity onPress={mudarPagina}> 

<AntDesign name="caretleft" size={24} color="white" style= {{padding: "5%"}}/>

        </TouchableOpacity>
    <View style = {{alignItems : "center"}}>

    <Text style={{fontSize: 40, color: "white"}}> Login </Text>
        
    <View style = {{marginTop: 40}}>
    <TextInput style = {{height: 45, backgroundColor: "rgba(158, 173, 251, 0.9)", borderRadius: 5, paddingLeft: 10, width: 220}}
    placeholder = "Email"
    onChangeText = {(email) => setEmail(email)}
    value = {email}
    />
    <TextInput style = {{marginTop:15, height: 45, backgroundColor: "rgba(158, 173, 251, 0.9)", borderRadius: 5, paddingLeft: 10, width: 220}}
    placeholder = "Senha"
    onChangeText = {(email) => setSenha(senha)}
    value = {senha}
    />
    </View>
    <TouchableOpacity style={{borderColor:"rgba(94,103,150,0.5)" ,backgroundColor: "rgba(255,255,255,0.5)" ,borderWidth: 2, borderRadius: 5, alignItems: "center", marginBottom: 10, padding: 5, paddingHorizontal: 48, marginTop: 50}} onPress = {Logar}> 

<Text style={{fontSize: 25, color: "#5e6796", fontFamily: "Trebuchet MS"}}> Logar </Text>

        </TouchableOpacity>
        </View>
        </ImageBackground>
    </View>
    ) 
}
export default Login;