import React from 'react';
import { Text, View, Image,StyleSheet, TouchableOpacity , Dimensions} from 'react-native';
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};


const home = (props) => {
  const [ latitude, setLat] = React.useState(0);
  const [ longintud, setLong] = React.useState(0);
  const obtenerCoordenadas = () => {
    const success = (pos) => {
      console.log('Here')
      var crd = pos.coords;
    
      console.log('Your current position is:');
      console.log('Latitude : ' + crd.latitude);
      console.log('Longitude: ' + crd.longitude);
      lat = crd.latitude;
      long = crd.longitude;
      setLat(lat)
      setLong(long)
      console.log('More or less ' + crd.accuracy + ' meters.');
    };
    
    const error = (err) => {
      console.warn('ERROR(' + err.code + '): ' + err.message);
    };
    navigator.geolocation.getCurrentPosition(success, error, options);
  }
  return <View style={styles.container}>
  <TouchableOpacity style={styles.textButton} onPress={obtenerCoordenadas}><Text>Ver mis coordenadas</Text></TouchableOpacity>
  <Text>Lat: {latitude}, Long{longintud}</Text>
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
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

});
export default home;