import { createSlice } from '@reduxjs/toolkit';

const initialStore = { 
  user : {},
  
}
export const userSlice = createSlice({
  name: "user",
  initialState: initialStore ,
  reducers: {
   
    // addUser: (state, action) => {
    //     state.user = action.payload;
        
    //  },
     addUser: (state, action) => action.payload      
  }
});
console.log(userSlice)


// Action creators are generated for each case reducer function
export const {addUser} = userSlice.actions;

export default userSlice.reducer;