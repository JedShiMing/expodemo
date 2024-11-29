import { createSlice } from "@reduxjs/toolkit"

export interface UserState {
	token?: string
	userInfo?: any
}

export const UserSlice = createSlice({
	name: "User",
	initialState: {} as UserState,
	reducers: {
		login: (state, action) => {
			// 请求数据，从service层获取
			state.userInfo = "Jed"
			state.token = "123"
		},
		setUserInfo: (state, action) => {
			console.log("action = ", action.payload)

			state.userInfo = action.payload
		},
	},
})

export const { login, setUserInfo } = UserSlice.actions

export default UserSlice.reducer
