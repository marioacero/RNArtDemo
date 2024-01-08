import {combineReducers} from 'redux';
import favSlice from './favorites';
import {configureStore} from '@reduxjs/toolkit';

const combined = combineReducers({
  favorites: favSlice,
});

const store = configureStore({reducer: combined});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
