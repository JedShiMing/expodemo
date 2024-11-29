import { setLoading } from "../store/reducer/app-reducer"
import store from "../store/store"

export const showLoading = (name?: string) => {
	store.dispatch(setLoading({ name, loading: true }))
}

export const hideLoading = () => {
	store.dispatch(setLoading({ loading: false }))
}
