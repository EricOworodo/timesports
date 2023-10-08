import { createSlice } from '@reduxjs/toolkit'

const initialStore = { 
  electricityOrders : {},
  
}

export const electricityOrdersSlice = createSlice({
  name: "electricityOrders",
  initialState: initialStore,
  reducers: {
   
    orders: (state, action) => action.payload      
  }

})


// Action creators are generated for each case reducer function
export const {orders} = electricityOrdersSlice.actions

export default electricityOrdersSlice.reducer;