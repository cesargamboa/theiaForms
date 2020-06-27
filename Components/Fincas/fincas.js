import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { _retrieveData } from '../Login/initialStore';
import { unsubscribe } from '../../shared/checkConnection';
import Header from '../Header/header';
const fincas = (props) => {
  const goToProfile =  () => {
    props.navigation.navigate('Perfil')
  }
  const [ fincas, setFincas ] =  React.useState([])
  const [ loading, setLoading ] =  React.useState(true)
  React.useEffect(()=> {
    const getFincasFromStorage = async () =>{
      const fincasS  = await _retrieveData('Fincas');
      setLoading(false)
      setFincas(JSON.parse(fincasS))
    }
    getFincasFromStorage();
  }, [])
  return <View style={{flex:1, backgroundColor: 'white'}}>
      <Header userName={_retrieveData('Nombre')} mode= {unsubscribe} goToProfile={goToProfile}/>
      <View style={{display: 'flex', flexDirection: 'row', borderBottom: 'rgba(0, 0, 0, 0.03)', borderBottomWidth: 1, marginTop: 20, marginBottom: 10, marginLeft: 10, marginRight: 10}}>
          <Text style={{color: '#333', fontSize: 18, flex: 1}}>Nombre</Text>
          <Text style={{color: '#333', fontSize: 18, flex: 1}}>Localidad</Text>
          <Text style={{color: '#333', fontSize: 18, flex: 1}}>Propietario</Text>
        </View>
     { loading && <ActivityIndicator size="large" color="#00ff00" /> }
     {
       fincas.length > 0 ? 
        fincas.map(((finca, i) => 
        <View key={i} style={{display: 'flex', flexDirection: 'row', marginLeft: 10, marginRight: 10}}>
          <Text style={{color: '#333', fontSize: 18, flex: 1}}>{finca.Nombre}</Text>
          <Text style={{color: '#333', fontSize: 18, flex: 1}}>{finca.Localidad}</Text>
          <Text style={{color: '#333', fontSize: 18, flex: 1}}>{finca.Propietario}</Text>
        </View>))
       : <Text style={{color: '#333', fontSize: 18}}>No se encontraron fincas</Text>
     }
  </View>
}
export default fincas;