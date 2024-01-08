import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {MovieDetail} from '@models/Movie';
import {RootState} from './store';

export interface FavState {
  value: MovieDetail[];
}

const initialState: FavState = {
  value: [],
};

const favSlice = createSlice({
  name: 'favorites',
  initialState: initialState,
  reducers: {
    addOrRemoveFav(state, action: PayloadAction<MovieDetail>) {
      const {payload} = action;

      // Check if the movie is already in the array
      if (!state.value.some(movie => movie.id === payload.id)) {
        // If not, add it to the array
        state.value.push(payload);
      } else {
        state.value = state.value.filter(movie => movie.id !== payload.id);
      }
    },
  },
});

export default favSlice.reducer;
export const selectFav = (state: RootState) => state.favorites.value;
export const {addOrRemoveFav} = favSlice.actions;
