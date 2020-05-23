import React from 'react';
import { Icon } from 'react-native-elements'
import { Text, View, Image,StyleSheet, TouchableOpacity , Dimensions} from 'react-native';


const header = (props) => {
  return <View style={styles.container}>
  <Text>{props.userName}</Text>
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
});
export default header;