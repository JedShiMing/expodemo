import { StyleSheet, View } from "react-native"
import { FC, useEffect, useLayoutEffect, useRef } from "react"
import { Provider } from "react-redux"
import store from "../../store/store"
import { Loading } from "./loading"
import { Toast } from "./toast/Toast"
import DebugButton from "./debug-button"
import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native"
import { setDebug } from "../../store/reducer/app-reducer"

interface IP {
	children?: React.ReactNode
}

const GlobalProvider: FC<IP> = (props: IP) => {
	const navigationRef = useNavigationContainerRef()

	useLayoutEffect(() => {
		navigationRef.addListener("state", e => {
			// console.log("路由发生了变化", navigationRef.getCurrentRoute())
			const name = navigationRef.getCurrentRoute()?.name
			if (name?.startsWith("Debug")) {
				store.dispatch(setDebug({ show: false }))
			} else {
				store.dispatch(setDebug({ show: true }))
			}
		})
	}, [])
	return (
		<Provider store={store}>
			<NavigationContainer ref={navigationRef}>
				{props.children}
				{/* 因为DebugButton用到路由，所以必须放NavigationContainer下 */}
				<DebugButton />
			</NavigationContainer>
			<Loading />
			<Toast />
		</Provider>
	)
}

export default GlobalProvider
