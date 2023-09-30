import { configureStore } from '@reduxjs/toolkit'
import phoneReducer from './phoneSlice'
import electricityOrdersReducer from './electricityOrders'
import userReducer from './userSlice';


export const store = configureStore({
  reducer: {
  phone: phoneReducer,
  user: userReducer,
  electricityOrders: electricityOrdersReducer,
   },
})

export default store;