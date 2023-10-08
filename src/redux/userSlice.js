import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    accessToken: "",
    adminAccessToken: "",
    username: "",
    isLoggedIn: false,
    isAdminLoggedIn: false,
    data: []
  },


  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setAdminAcessToken: (state, action) => {
      state.adminAccessToken = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setIsAdminLoggedIn: (state, action) => {
      state.isAdminLoggedIn = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },

     addUser: (state, action) => action.payload      
  }
});
export const {
  setAccessToken,
  setAdminAcessToken,
  setUsername,
  setIsLoggedIn,
  setIsAdminLoggedIn,
  setData,
  addUser,
} = userSlice.actions;

export default userSlice.reducer;
