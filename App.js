import React from 'react';
import 'react-native-gesture-handler';

import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Components/Login/login'
import Home from './Components/Home/home.js'
import Header from './Components/Header/header'
import RecoleccionDatos from './Components/RecoleccionDatos/recolectarDatosLote'
import Perfil from './Components/PerfilUsuario/perfil'

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer style={styles.container}>
      <Stack.Navigator>
      <Stack.Screen name="Login">
        {props => <Login {...props} />}
      </Stack.Screen>
      <Stack.Screen name="Home">
        {props => <Home {...props} />}
      </Stack.Screen>
      <Stack.Screen name="Header">
        {props => <Header {...props} />}
      </Stack.Screen>
      <Stack.Screen name="Registro">
        {props => <RecoleccionDatos {...props} />}
      </Stack.Screen>
      <Stack.Screen name="Perfil">
        {props => <Perfil {...props} />}
      </Stack.Screen>
      </Stack.Navigator>
      </NavigationContainer>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
