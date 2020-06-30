import React from 'react';
import FadeInAnimation from '../../shared/fadeInAnimation';
import { boxShadow, backgroundColor } from '../../assets/colors/colors';
import { Icon } from 'react-native-elements'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../Header/header';
import { _retrieveData, _storeData, _deleteData, retrieveDataPromise, storeDataPromise } from '../Login/initialStore';
import { unsubscribe } from '../../shared/checkConnection';
import { generateURL } from '../../shared/airtableConfig';
import axios from 'axios'

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};


const home = (props) => {
  const [userID, setUserId] =  React.useState('')
  const [ fincasUsuario, setFincas ] = React.useState([])
  const [lotes, setLotes] = React.useState([])
  const [lotesObj, setLotesObj] = React.useState([{}])
  const [loading, setLoading] = React.useState(true)
  const goToProfile =  () => {
    props.navigation.navigate('Perfil')
  }
  React.useEffect(() => {
    // check if user is online first
    retrieveDataPromise('IdUsuario')
    .then(userID => {
      return axios.get(generateURL('Usuarios', userID))
    })
    .then((userData)=>{
      return userData.data.fields.Finca;
    })
    .then((fincas) => {
      return Promise.all(fincas.map((f) => axios.get(generateURL('Fincas', f))))
    })
    .then((fincas) => {
      let lotes = [];
      fincas.map((finca) => {
        lotes.push(finca.data.fields.Lotes)
      })
      return Promise.all([setLotes(lotes), storeDataPromise('Fincas', JSON.stringify(fincas))])
    })
    .then(async() => {
      let lotTemp = []
      await lotes.flat().map((l) => {
         axios.get(generateURL('Lotes', l))
        .then((lote) => {
          lotTemp.push(lote.data.fields)
        })
      })
      return setLotesObj(lotTemp)
    })
    .then((e) => {
      return storeDataPromise('Lotes', JSON.stringify(lotesObj))
    })
    .then(() =>  setLoading(false))
    .catch(e => console.log(e))
  }, [])
  return <View style={styles.container}>
  <Header userName={_retrieveData('Nombre')} mode= {unsubscribe} goToProfile={goToProfile}/>
  <View style={styles.body}>
  <FadeInAnimation duration={2000}>
    <TouchableOpacity style={styles.textButton} onPress={() => props.navigation.navigate('Planillas')}>
      <Icon
      name='plus'
      type='evilicon'
      size={40}
      iconStyle={{backgroundColor : '#20c933', marginRight: 20, borderRadius: 2, padding: 2}}
      color='#fff'
    />
      <Text style={{color: '#333', fontSize: 18}}>Planillas</Text>
    </TouchableOpacity>
  </FadeInAnimation>
  <FadeInAnimation duration={3000}>
    <TouchableOpacity style={styles.textButton} onPress={() => props.navigation.navigate('Fincas')}>
      <Icon
      name='navicon'
      type='evilicon'
      size={40}
      iconStyle={{backgroundColor : '#8b46ff', marginRight: 20, borderRadius: 2, padding: 2}}
      color='#fff'
    />
      <Text style={{color: '#333', fontSize: 18}}>Ver mis fincas</Text>
    </TouchableOpacity>
  </FadeInAnimation>
  <FadeInAnimation duration={4000}>
  </FadeInAnimation>
  <FadeInAnimation duration={5000}>
    <TouchableOpacity style={styles.textButton} onPress={() => props.navigation.navigate('Calendario')}>
      <Icon
      name='calendar'
      type='evilicon'
      size={40}
      iconStyle={{backgroundColor : '#f82b60', marginRight: 20, borderRadius: 2, padding: 2}}
      color='#fff'
    />
      <Text style={{color: '#333', fontSize: 18}}>Calendario</Text>
    </TouchableOpacity>
  </FadeInAnimation>
  </View>
  </View>
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  body: {
    flex: 7,
    backgroundColor: '#fff',
  },
  text: {
    color: '#4facfe',
    zIndex: 20,
    fontSize: 23
  },
  textButton: {
    display: 'flex',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 20,
    borderBottomColor: boxShadow,
    borderBottomWidth: 2,
    color: 'hsl(0,0%,20%)',
   paddingTop: 20,
   paddingBottom: 20
  }
});
export default home;