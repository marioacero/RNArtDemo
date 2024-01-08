import AsyncStorage from '@react-native-async-storage/async-storage';
import {STORAGE_KEY, restoreFav} from '@state/favorites';

export const loadFavFromStorage = () => async (dispatch: any) => {
  try {
    const storedData = await AsyncStorage.getItem(STORAGE_KEY);
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      dispatch(restoreFav(parsedData));
    }
  } catch (error) {
    console.error('Error loading from AsyncStorage:', error);
  }
};
