import React from 'react';
import FadeInAnimation from '../../shared/fadeInAnimation';
import { backgroundColor, boxShadow } from '../../assets/colors/colors';
import { Icon } from 'react-native-elements'
import { Text, View, Image,StyleSheet, TouchableOpacity , Dimensions} from 'react-native';
import Header from '../Header/header';

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};


const home = (props) => {
  const goToProfile =  () => {
    props.navigation.navigate('Perfil')
  }
  return <View style={styles.container}>
  <Header userName="" goToProfile={goToProfile}/>
  <View style={styles.body}>
  <FadeInAnimation duration={2000}>
    <TouchableOpacity style={styles.textButton} onPress={() => props.navigation.navigate('Registro')}>
      <Icon
      name='plus'
      type='evilicon'
      size={40}
      iconStyle={{backgroundColor : '#20c933', marginRight: 20, borderRadius: 2, padding: 2}}
      color='#fff'
    />
      <Text style={{color: '#333', fontSize: 18}}>Registro Nuevo</Text>
    </TouchableOpacity>
  </FadeInAnimation>
  <FadeInAnimation duration={3000}>
    <TouchableOpacity style={styles.textButton} onPress={console.log('hi')}>
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
    <TouchableOpacity style={styles.textButton} onPress={console.log('hi')}>
      <Icon
      name='navicon'
      type='evilicon'
      size={40}
      iconStyle={{backgroundColor : '#20d9d2', marginRight: 20, borderRadius: 2, padding: 2}}
      color='#fff'
    />
      <Text style={{color: '#333', fontSize: 18}}>Ver mis Lotes</Text>
    </TouchableOpacity>
  </FadeInAnimation>
  <FadeInAnimation duration={5000}>
    <TouchableOpacity style={styles.textButton} onPress={console.log('hi')}>
      <Icon
      name='clock'
      type='evilicon'
      size={40}
      iconStyle={{backgroundColor : '#ff6f2c', marginRight: 20, borderRadius: 2, padding: 2}}
      color='#fff'
    />
      <Text style={{color: '#333', fontSize: 18}}>Registros anteriores</Text>
    </TouchableOpacity>
  </FadeInAnimation>
  <FadeInAnimation duration={6000}>
    <TouchableOpacity style={styles.textButton} onPress={console.log('hi')}>
      <Icon
      name='chart'
      type='evilicon'
      size={40}
      iconStyle={{backgroundColor : '#fcb400', marginRight: 20, borderRadius: 2, padding: 2}}
      color='#fff'
    />
      <Text style={{color: '#333', fontSize: 18}}>Datos de Produccion</Text>
    </TouchableOpacity>
  </FadeInAnimation>
  <FadeInAnimation duration={6000}>
    <TouchableOpacity style={styles.textButton} onPress={console.log('hi')}>
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
   paddingTop: 20,
   paddingBottom: 20
  }
});
export default home;