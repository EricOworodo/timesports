import { createSlice } from '@reduxjs/toolkit';

const initialStore = { 
  post : {},
  
}
export const postSlice = createSlice({
  name: "post",
  initialState: initialStore ,
  reducers: {
   
   
     addPost: (state, action) => action.payload      
  }
});


// Action creators are generated for each case reducer function
export const {addPost} = postSlice.actions;

export default postSlice.reducer;