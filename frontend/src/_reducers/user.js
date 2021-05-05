const { createSlice } = require('@reduxjs/toolkit');
const { signUp } = require('../_actions/user');

const initialState = {
  isSignUp: false,
  data: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOut(state, action) {
      state.data = null;
    }
  },
  extraReducers: (builder) => builder
    .addCase(signUp.pending, (state, action) => {
      state.data = null;
      state.isSignUp = true;
    })
    .addCase(signUp.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isSignUp = false;
    })
    .addCase(signUp.rejected, (state, action) => {
      state.error = action.payload;
    })
})


module.exports = userSlice;