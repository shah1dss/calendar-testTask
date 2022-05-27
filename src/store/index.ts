import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {combineReducers} from 'redux'
import reducers from './reducers';

const rootReducer = combineReducers(reducers)

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch