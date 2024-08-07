import { createSlice } from '@reduxjs/toolkit'

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLoggedIn: false,
    user: "Jackie.c",
    UserId:"TestUser1"
  },
  reducers: {
    loginSuccess(state, action) {
      if (action.type === 'loginSuccess') {
        state.isLoggedIn = true
        state.user = action.payload
      }
    },
    logout(state,action) {
      if (action.type === 'logout') {
        state.isLoggedIn = false
        state.user = null
      }
    },
  },
})

export const { loginSuccess, logout } = loginSlice.actions

export default loginSlice.reducer