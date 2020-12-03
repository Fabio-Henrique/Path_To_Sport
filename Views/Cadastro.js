import React, {useState} from "react";
import {Text, View, TouchableOpacity, ImageBackground, TextInput, Switch} from "react-native";
import { AntDesign } from '@expo/vector-icons';



function Cadastro ({navigation}) {

    const [email, setEmail] = useState("")
    const [repitaEmail, setRepitaEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [repitaSenha, setRepitaSenha] = useState("")
    const mudarPagina=()=> {
        navigation.navigate("Inicial");
    }
     const mudarLogin=()=> {
        navigation.navigate("Login");
     }

    const [professor, setProfessor] = useState(false);
    const mudarProfessor = () => {
        setProfessor(!professor)
    }

    return (
    <View style={{flex: 1}}>

<ImageBackground source = {require("../Image/fut.jpg")} style = {{ flex: 1, height: "100%", width: "100%"}}>
       

        <TouchableOpacity onPress={mudarPagina}> 

<AntDesign name="caretleft" size={24} color="white" style= {{padding: "5%"}}/>

        </TouchableOpacity>
    <View style = {{alignItems : "center"}}>

    <Text style={{fontSize: 40, color: "white"}}> Cadastro </Text>
        
    <View style = {{marginTop: 40}}>

    <TextInput style = {{height: 45, backgroundColor: "rgba(158, 173, 251, 0.9)", borderRadius: 5, paddingLeft: 10, width: 220,height: 30, marginBottom: 10 }}
    placeholder = "Email"
    onChangeText = {(email) => setEmail(email)}
    value = {email} />
    
    <TextInput style = {{height: 45, backgroundColor: "rgba(158, 173, 251, 0.9)", borderRadius: 5, paddingLeft: 10, width: 220, height: 30, marginBottom: 10}}
    placeholder = "Repita o Email"
    onChangeText = {(repitaEmail) => setRepitaEmail(repitaEmail)}/>

    <TextInput style = {{height: 45, backgroundColor: "rgba(158, 173, 251, 0.9)", borderRadius: 5, paddingLeft: 10, width: 220, height: 30, marginBottom: 10}}
    placeholder = "Senha"
    onChangeText = {(senha) => setSenha(senha)} />

    <TextInput style = {{height: 45, backgroundColor: "rgba(158, 173, 251, 0.9)", borderRadius: 5, paddingLeft: 10, width: 220, height: 30, marginBottom: 10}}
    placeholder = "Repita a Senha"
    onChangeText = {(repitaSenha) => setRepitaSenha(repitaSenha)}/>


    </View>

        <View style = {{marginLeft : 81, flexDirection: "row", marginTop : 5}}>

        <Text style = {{fontFamily : "Trebuchet MS", marginRight : 20, color: "white", fontSize: 15}}>
            É professor?
        </Text>

    <Switch value = {professor} onValueChange = {mudarProfessor}/>

    </View>
    <TouchableOpacity style={{borderColor:"rgba(94,103,150,0.5)" ,backgroundColor: "rgba(255,255,255,0.5)" ,borderWidth: 2, borderRadius: 5, alignItems: "center", marginBottom: 10, padding: 5, paddingHorizontal: 40, marginTop: 50}} onPress = {mudarLogin}> 

<Text style={{fontSize: 25, color: "#5e6796", fontFamily: "Trebuchet MS"}}> Casdastrar </Text>

        </TouchableOpacity>
        </View>
        </ImageBackground>
    </View>
    ) 

}
export default Cadastro;