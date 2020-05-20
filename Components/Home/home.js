import React from 'react';
import { Text, View, Image,StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const home = (props) => {
  return <View style={styles.container}><Text style={styles.text}>Aca va el form</Text>
  <TouchableOpacity style={styles.textButton} onPress={() => props.navigation.navigate('Maps')}><Text>Ir a Mapa</Text></TouchableOpacity>
 

  </View>
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#4facfe',
    zIndex: 20,
    fontSize: 23
  },
  textButton: {
    color: '#fff',
    fontSize: 18,
    zIndex: 3,
    alignItems: "center",
    backgroundColor: "#4facfe",
    padding: 11,
    width: 150,
    borderRadius: 5,
    marginTop: 60,
  }

});
export default home;