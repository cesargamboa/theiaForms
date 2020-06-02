import React from 'react';
import { View } from 'react-native';
import {Calendar } from 'react-native-calendars';
import { _deleteData } from '../Login/initialStore';
const calendario = (props) => {
  return <View>
    <Calendar />
  </View>
}
export default calendario;