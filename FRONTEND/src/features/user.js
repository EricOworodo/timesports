import { createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({
  name: "user",
  initialState: {value: {phone:'', password:''} },
  reducers: {
   
    login: (state, action) => {
      state.state = action.payload;
      
    },

  },
}); 

// Action creators are generated for each case reducer function
export const { login} = userSlice.actions

export  default userSlice.reducer;