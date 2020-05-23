import React from 'react';
import { backgroundColor, buttonSkyBlue } from '../../assets/colors/colors';
import { TextInput, Text, View, Image,StyleSheet, TouchableOpacity } from 'react-native';
import { authenticate } from './auth';

export default function UselessTextInput(props) {
  const [user, onChangeUser] = React.useState('');
  const [password, onChangePass] = React.useState('');
const submitForm = () => {
  authenticate("cesargamboaavel@gmail.com","hola1234");
  // props.navigation.navigate('Home')
}
  return (
    <View style={styles.container}>
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

