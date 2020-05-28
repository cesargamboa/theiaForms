import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { _deleteData } from '../Login/initialStore';
const perfil = (props) => {
  const cleanStorage = () => {
    _deleteData('Nombre')
    props.navigation.navigate('Login')
  }
  return <View>
     <Text>Perfil Usuario</Text>
     <TouchableOpacity onPress={cleanStorage}><Text>Salir</Text></TouchableOpacity>
  </View>
}
export default perfil;