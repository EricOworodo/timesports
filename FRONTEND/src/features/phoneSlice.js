import { createSlice } from '@reduxjs/toolkit'

export const phoneSlice = createSlice({
  name: "phone",
  initialState: '',
  reducers: {
   
    userPhone: (state, action) => action.payload      
  }
})

console.log(phoneSlice)

// Action creators are generated for each case reducer function
export const {passwords, userPhone} = phoneSlice.actions

export default phoneSlice.reducer;