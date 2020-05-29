import React, { useState, useEffect } from 'react';
import { backgroundColor, buttonSkyBlue } from '../../assets/colors/colors';
import axios from 'axios'
import { TextInput, Text, View, Image,StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { _retrieveData, _storeData } from './initialStore';

export default function UselessTextInput(props) {
  const [user, onChangeUser] = useState('');
  const [password, onChangePass] = useState('');
  const [errorMessage, onChangeError] = useState('');
  const [loading , setLoading] = useState(false)
const submitForm =  async () =>  {
  setLoading(true)
  const users = await axios.get('https://api.airtable.com/v0/app4MqpvYJy5fPAhr/Usuarios?api_key=keyNmRNp3M2oIpnfF')
  const { records } = users.data
  const userData = records.filter(result => ((result.fields.Usuario === user)&&(result.fields.password === password)))
  if(userData.length > 0){
    setLoading(false)
    _storeData('Nombre', userData[0].fields.Nombre)
    props.navigation.navigate('Home')
  }
  else{
    setLoading(false)
    onChangeError('Correo o contrasena incorrectos')
  }
}
  return (
    <View style={styles.container}>
    <View>{loading ? <ActivityIndicator size="large" color="#00ff00" /> : null}</View>
    <Text style={errorMessage ? styles.error : ''}>{errorMessage}</Text>
    <Image source={require('../../assets/theia-track1-01.png')}
  style={{ width: 110, height: 50.5, marginTop: -100, marginBottom: 30, position: 'relative' }}></Image>
    <View style={styles.inputStyle}>
    <Text>Email</Text>
    <TextInput
      style={styles.inputBorder}
      onChangeText={user => onChangeUser(user)}
      value={user}
    />
    </View>
    <View style={styles.inputStyle}>
    <Text>Contraseña</Text>
    <TextInput
      style={styles.inputBorder}
      onChangeText={pass => onChangePass(pass)}
      secureTextEntry={true} 
      value={password}
    />
    </View>
    <View>
    <TouchableOpacity
        style={styles.submitButton}
        onPress={submitForm}
      >
        <Text style={styles.textButton}>Ingresar</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}


const styles = StyleSheet.create({
  inputStyle: {
    marginTop: 20,
  },
  error: {
    color: '#fff',
    backgroundColor: '#fcb400',
    position: 'absolute',
    top: 10,
    width: '100%',
    textAlign: 'center',
    fontSize: 15,
    padding: 15
  },
  inputBorder: {
    borderBottomColor: `rgba(0,0,0,0.1)`,
    borderBottomWidth: 1,
    height: 40,
    width: 250 
  },
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButton: {
    alignItems: "center",
    backgroundColor: buttonSkyBlue,
    padding: 11,
    width: 150,
    borderRadius: 2,
    marginTop: 60,
  },
  textButton: {
    color: '#fff',
    fontSize: 18,
    zIndex: 3
  }
});

