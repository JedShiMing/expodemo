import { configureStore } from "@reduxjs/toolkit"
import userReducer, { UserState } from "./reducer/user-reducer"
import appReducer, { AppState } from "./reducer/app-reducer"

export interface IStore {
	app: AppState
	user: UserState
}

export default configureStore({
	reducer: {
		app: appReducer,
		user: userReducer,
	},
})
