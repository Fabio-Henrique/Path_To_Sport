import React, { useState } from "react";
import {Text, View, TouchableOpacity, ImageBackground, Image, TextInput} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';


function Peneira ({navigation}) {

  
 

    return (    

        <View>

       
            <View style = {{ alignItems: "center", marginBottom: 0}}>
        
        <View style = {{alignItems: "center", marginTop: 20, flexDirection: "row", backgroundColor: "#999", borderRadius: 12, paddingRight: 7}}>

         <MaterialIcons name="search" size={24} color="black" style = {{padding: 6}} />

            <TextInput style = {{backgroundColor: "#999",  flex: 1, padding: 0}}
            placeholder = "Procurar"
            
            /> 

            
        </View>

        <Image source = {require("../assets/cabj.jpg")} style = {{height: 250, width: 250, marginTop: 30, borderRadius: 5}}/>

     <Text style = {{marginTop: 10, fontFamily: "Trebuchet MS", fontWeight: "600", fontSize: 16}}> 
                Boca Juniors
            </Text>
            
        <View style = {{ alignItems : "center"}}>


             <Text style = {{marginTop: 5, fontFamily: "Trebuchet MS", fontSize: 13, color: "black", maxWidth: 250, textAlign: "center"}}> 
              (19) 912929212
            </Text>
            <Text style = {{marginTop: 5, fontFamily: "Trebuchet MS", fontSize: 13, color: "#4c4c4c", maxWidth: 250, textAlign: "center"}}> 
              R.Guilherme de Camargo Suzano da Silva, 310 
            </Text>

           

            </View>
            </View>

        </View>

    )
    

    }
export default Peneira;
