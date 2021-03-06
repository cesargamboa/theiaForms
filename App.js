import React from 'react';
import 'react-native-gesture-handler';
import { _retrieveData} from './Components/Login/initialStore'

import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Components/Login/login'
import Home from './Components/Home/home.js'
import Header from './Components/Header/header'
import RecoleccionDatos from './Components/RecoleccionDatos/recolectarDatosLote'
import Perfil from './Components/PerfilUsuario/perfil'
import Planillas from './Components/Planillas/planillas';
import Calendario from './Components/Calendario/calendario';
import Fincas from'./Components/Fincas/fincas';

const Stack = createStackNavigator();
export default function App() {
  const [userName, setUserName] =  React.useState('')

  React.useEffect(() => {
    const getUserData = async () => {
      const result = await _retrieveData('Nombre')
      setUserName(result)
    }
    getUserData();
  }, [])
  return (
    
      userName === ''?  
       <View><ActivityIndicator size="large" color="#00ff00" /></View> :
       <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName={ userName === null?  "Login" : "Home"}>
      <Stack.Screen options={{headerShown: false}} name="Login">
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
      <Stack.Screen name="Fincas">
        {props => <Fincas {...props} />}
      </Stack.Screen>
      <Stack.Screen name="Calendario">
        {props => <Calendario {...props} />}
      </Stack.Screen>
      <Stack.Screen name="Planillas">
        {props => <Planillas {...props} />}
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
