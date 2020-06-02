import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { _retrieveData } from '../Login/initialStore';
const fincas = (props) => {
  const [ fincas, setFincas ] =  React.useState([])
  React.useEffect(()=> {
    const getFincasFromStorage = async () =>{
      const fincasS  = await _retrieveData('Fincas');
      setFincas(JSON.parse(fincasS))
    }
    getFincasFromStorage();
  }, [])
  return <View>
    {console.log('test', fincas.length)}
     {
       fincas.length > 0 ? 
        fincas.map((finca => <Text>{finca.Nombre}</Text>))
      : <ActivityIndicator size="large" color="#00ff00" /> 
     }
  </View>
}
export default fincas;