import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import config from "../../common/configure/config"
import { Env } from "../../common/enum/app-enum"

export interface AppState {
	isDebug: boolean
	loading: {
		name: string
		show: boolean
	}
}

export const AppSlice = createSlice({
	name: "App",
	initialState: {
		isDebug: config.env !== Env.PRODUCTION,
		loading: {
			name: "loading",
			show: false,
		},
	} as AppState,
	reducers: {
		setDebug: (state, action: PayloadAction<{ show: boolean }>) => {
			state.isDebug = action.payload.show
		},
		setLoading: (state, action: PayloadAction<{ loading: boolean; name?: string }>) => {
			const { loading, name } = action.payload
			state.loading = {
				name: name ?? "loading",
				show: loading,
			}
		},
	},
})

export const { setDebug, setLoading } = AppSlice.actions

export default AppSlice.reducer
