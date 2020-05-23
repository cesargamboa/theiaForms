import React, { Component } from 'react';
import { TextInput, Text, View, Image,StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import verifyUser from './auth'

export default function UselessTextInput(props) {
  const [user, onChangeUser] = React.useState('');
  const [password, onChangePass] = React.useState('');
const submitForm = () => {
  verifyUser();
  // props.navigation.navigate('Home')
}
  return (
    <View style={styles.container}>
    <LinearGradient
          colors={['#dfe9f3', '#ffffff']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: 1000,
          }}
        />
    <Image source={require('../../assets/theia-track1-01.png')}
  style={{ width: 110, height: 50.5, marginTop: -100, marginBottom: 30, position: 'relative' }}></Image>
    <View style={styles.inputStyle}>
    <Text>user</Text>
    <TextInput
      style={{ height: 40, width: 250, borderBottomColor: '#8fd3f4', borderBottomWidth: 1 }}
      onChangeText={user => onChangeUser(user)}
      value={user}
    />
    </View>
    <View style={styles.inputStyle}>
    <Text>Contraseña</Text>
    <TextInput
      style={{ height: 40, width: 250, borderBottomColor: '#8fd3f4', borderBottomWidth: 1 }}
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButton: {
    alignItems: "center",
    backgroundColor: "#4facfe",
    padding: 11,
    width: 150,
    borderRadius: 5,
    marginTop: 60,
  },
  textButton: {
    color: '#fff',
    fontSize: 18,
    zIndex: 3
  }
});

