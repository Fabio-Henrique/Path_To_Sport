import { StatusBar } from 'expo-status-bar';
import RotaInicial from "./Components/Stack"
import { NavigationContainer } from "@react-navigation/native";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
        <RotaInicial/>
    </NavigationContainer>
  );
}



