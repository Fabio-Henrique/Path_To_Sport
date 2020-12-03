import React, { useState } from "react";
import {Text, View, TouchableOpacity, ImageBackground, Image} from "react-native";



function Perfil ({navigation}) {

  
 

    return (    

        <View>

        <View style = {{width: "100%", height: 95, backgroundColor: "#b8b8b8"}}>


        </View>
            <View style = {{ alignItems: "center",  top: -60 ,marginBottom: 0}}>
        <Image source = {require("../assets/euzin.jpg")} style = {{height: 150, width : 150, borderRadius: 100, borderWidth: 2, borderColor: "white" }}/>
        <View style = {{alignItems: "center"}}>
            <Text style = {{marginTop: 10, fontFamily: "Trebuchet MS", fontWeight: "600", fontSize: 16}}> 
                Fabio Henrique
            </Text>
            
        <View style = {{flexDirection : "row", alignItems : "center"}}>


            <Text style = {{marginTop: 5, fontFamily: "Trebuchet MS", fontSize: 13, color: "#4c4c4c", marginRight: 4}}> 
              2003, 
            </Text>

            <Text style = {{marginTop: 5, fontFamily: "Trebuchet MS", fontSize: 13, color: "#4c4c4c"}}> 
              Hortolândia
            </Text>
            </View>
            <Text style = {{marginTop: 5, fontFamily: "Trebuchet MS", fontSize: 13, color: "#4c4c4c"}}> 
              Futebol
            </Text>
        </View>
            </View>


        </View>

    )
    

    }
export default Perfil;
