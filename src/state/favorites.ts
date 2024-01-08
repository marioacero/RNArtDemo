import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from './store';
import {Event} from '@models/Event';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const STORAGE_KEY = '@MyApp:Favorites';

export interface FavState {
  value: Event[];
}

const loadInitialValues = async (): Promise<Event[]> => {
  try {
    const storedData = await AsyncStorage.getItem(STORAGE_KEY);
    return storedData ? JSON.parse(storedData) : [];
  } catch (error) {
    console.error('AsyncStorage error:', error);
    return [];
  }
};

const initialState: FavState = {
  value: [],
};

// Cargar los valores iniciales al inicio
loadInitialValues().then(initialValues => {
  initialState.value = initialValues;
});

console.log('initialState', initialState.value);
const favSlice = createSlice({
  name: 'favorites',
  initialState: initialState,
  reducers: {
    addOrRemoveFav(state, action: PayloadAction<Event>) {
      const {payload} = action;

      // Check if the event is already in the array
      if (!state.value.some(event => event.id === payload.id)) {
        // If not, add it to the array
        state.value.push(payload);
      } else {
        state.value = state.value.filter(movie => movie.id !== payload.id);
      }
      // Persist in AsyncStorage
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state.value)).catch(
        error => {
          console.error('AsyncStorage error:', error);
        },
      );
    },
    restoreFav(state, action: PayloadAction<Event[]>) {
      state.value = action.payload;
    },
  },
});

export default favSlice.reducer;
export const selectFav = (state: RootState) => state.favorites.value;
export const {addOrRemoveFav, restoreFav} = favSlice.actions;
