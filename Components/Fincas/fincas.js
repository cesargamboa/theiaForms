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
  const [show, setShow] = React.useState(0)

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
          <Text style={{color: '#8b46ff', fontSize: 18, flex: 1, paddingBottom: 10}}>Nombre</Text>
          <Text style={{color: '#8b46ff', fontSize: 18, flex: 1, paddingBottom: 10}}>Localidad</Text>
          <Text style={{color: '#8b46ff', fontSize: 18, flex: 1, paddingBottom: 10}}>Area Uso(ha)</Text>
        </View>
     { loading && <ActivityIndicator size="large" color="#00ff00" /> }
     {
       (fincas && fincas.length > 0) ? 
        fincas.map(((finca, i) => 
        <TouchableOpacity style={styles.rowBox} key={i} onPress={() => showRow(i)}>
          <View style={styles.rowTextContainer}>
          <Text style={styles.rowText}>{finca.data.fields.Nombre}</Text>
          <Text style={styles.rowText}>{finca.data.fields.Localidad}</Text>
          <Text style={styles.rowText}>{finca.data.fields.areaUso}</Text>
        </View>
        {
          show === i && <TouchableOpacity onPress={ () => console.log('lote')}><Text>Lotes</Text></TouchableOpacity>
        }
        </TouchableOpacity>))
       : <Text style={{color: '#333', fontSize: 18}}>No se encontraron fincas</Text>
     }
  </View>
}

const styles = StyleSheet.create({

  rowTextContainer: {
 
  borderRadius: 5,
  display: 'flex',
  flexDirection: 'row',
 
  },
  rowBox: {
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 3.85,
    backgroundColor : '#fff',
    elevation: 5,
    marginBottom: 10,
    marginTop: 10,
  },
  rowText: {
    color: 'hsl(0,0%,30%)',
    fontSize: 18,
    paddingBottom: 5,
    flex: 1
  },
  rowHeader: {
    display: 'flex', 
    flexDirection: 'row', 
    paddingLeft: 10,
    marginTop: 20, 
    marginBottom: 20, 
    marginLeft: 10, 
    marginRight: 10,
    borderBottomColor: '#8b46ff',
    borderBottomWidth: 1,
  }
})
export default fincas;