import { AsyncStorage } from 'react-native';

export const _storeData = async (key, data) => {
  try {
    await AsyncStorage.setItem(
      `${key}`,
      `${data}`
    );
  } catch (error) {
    console.log('Error saving data', error);
  }
};
export const _retrieveData = async (item) => {
  try {
    const value = await AsyncStorage.getItem(`${item}`);
    if (value !== null) {
      // We have data!!
      console.log('we have data');
    }
    return value
  } catch (error) {
    console.log('data error', error)
  }
};

export const _deleteData = async (itemId) => {
  try {
    await AsyncStorage.removeItem(itemId);
  } catch (error) {
    // Error retrieving data
    console.log(error.message);
  }
}