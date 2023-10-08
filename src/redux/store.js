import { configureStore } from '@reduxjs/toolkit'
import postReducer from './postSlice'
import userReducer from './userSlice';
import storage from 'redux-persist/lib/storage';
import {  persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit'


const persistConfig = {
  key: `root${sessionStorage.getItem('userKey') || ''}`,
  storage,
}

const reducers = combineReducers({ 
  user: userReducer,
  post: postReducer,
}) 

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
          serializableCheck: {
              ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
      }),
});