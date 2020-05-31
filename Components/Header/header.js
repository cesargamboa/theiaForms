import React from 'react';
import { Icon } from 'react-native-elements'
import { Text, View, Image,StyleSheet, TouchableOpacity , Dimensions} from 'react-native';
import { _retrieveData } from '../Login/initialStore';


const header = (props) => {
  const [userName, setUserName] =  React.useState('')

  React.useEffect(() => {
    const getUserData = async () => {
      const result = await _retrieveData('Nombre')
      setUserName(result)
    }
    getUserData();
  }, [])
  return <View style={styles.container}>
  <Text style={styles.userName}>{userName}</Text>
  <Text style={styles.mode}>{props.mode ? 'Online Mode' : 'Offline Mode'}</Text>
<Icon
      name='user'
      type='evilicon'
      size={40}
      iconStyle={styles.icon}
      color='#f82b60'
      onPress={props.goToProfile} 
    />
  </View>
}
const styles = StyleSheet.create({
  container: {
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomColor: 'hsl(0,0%,80%)',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
  },
  mode:{
    backgroundColor: 'rgba(0,0,0,0.05)',
    padding: 2,
    fontSize: 11,
    borderRadius: 11,
    color: 'hsl(0,0%,20%)'
  },
  userName: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    padding: 2,
    fontSize: 13,
    borderRadius: 11,
    color: 'hsl(0,0%,20%)'
  }
});
export default header;