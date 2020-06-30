import React from 'react';
import { Text, View, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import { _retrieveData, retrieveDataPromise } from '../Login/initialStore';
import { unsubscribe } from '../../shared/checkConnection';
import Header from '../Header/header';
const fincas = (props) => {
  const goToProfile =  () => {
    props.navigation.navigate('Perfil')
  }
  const [ fincas, setFincas ] =  React.useState([])
  const [ loading, setLoading ] =  React.useState(true)
  const [show, setShow] = React.useState(1)

  const showRow = (key) => {
    setShow(key)
  }
  React.useEffect(()=> {

    retrieveDataPromise('Fincas')
    .then((fincasR) => {
      setFincas(JSON.parse(fincasR))
    })
    .then(() => {
      setLoading(false)
    })
  }, [])
  return <View style={{flex:1, backgroundColor: 'white'}}>
      <Header userName={_retrieveData('Nombre')} mode= {unsubscribe} goToProfile={goToProfile}/>
      <View style={styles.rowHeader}>
          <Text style={{color: '#333', fontSize: 18, flex: 1}}>Nombre</Text>
          <Text style={{color: '#333', fontSize: 18, flex: 1}}>Localidad</Text>
          <Text style={{color: '#333', fontSize: 18, flex: 1}}>Area Uso(ha)</Text>
        </View>
     { loading && <ActivityIndicator size="large" color="#00ff00" /> }
     {
       (fincas && fincas.length > 0) ? 
        fincas.map(((finca, i) => 
        <TouchableOpacity  key={i} onPress={() => showRow(i)}>
          <View style={styles.rowBox}>
          <Text style={styles.rowText}>{finca.data.fields.Nombre}</Text>
          <Text style={styles.rowText}>{finca.data.fields.Localidad}</Text>
          <Text style={styles.rowText}>{finca.data.fields.areaUso}</Text>
        </View>
        {
          show === i && <TouchableOpacity onPress={ () => console.log('lote')}><Text>Row</Text></TouchableOpacity>
        }
        </TouchableOpacity>))
       : <Text style={{color: '#333', fontSize: 18}}>No se encontraron fincas</Text>
     }
  </View>
}

const styles = StyleSheet.create({
  rowBox: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
  paddingTop: 25,
  paddingBottom: 25,
  paddingLeft: 10,
  borderRadius: 5,
  shadowOpacity: 0.22,
  shadowRadius: 2.22,
  backgroundColor : '#fff',
  elevation: 3,
  display: 'flex',
  flexDirection: 'row',
  marginLeft: 10,
  marginRight: 10
  },
  rowText: {
    color: 'hsl(0,0%,30%)',
    fontSize: 18,
    flex: 1
  },
  rowHeader: {
    display: 'flex', 
    flexDirection: 'row', 
    paddingLeft: 10,
    paddingHorizontal: 10,
    marginTop: 20, 
    marginBottom: 20, 
    marginLeft: 10, 
    marginRight: 10
  }
})
export default fincas;