import React, { useEffect, useState } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { DebugModule } from "./ui/nav/debug-stack"
import { HomeModule } from "./ui/nav/home-stack"
import { RootRouterContext } from "./ui/nav/route-context"
import GlobalProvider from "./ui/compts/global-provider"
import { LoginModule } from "./ui/nav/login-stack"
import { SplashScreen } from "./ui/pages/splash/splash"
import { InitService } from "./services/init-service"

/**
 * 底层路由库
 */
const RootStack = createNativeStackNavigator()
export const Root = () => {
	const [showLogin, setShowLogin] = useState(true)
	const [showDebug, setShowDebug] = useState(true)

	useEffect(() => {
		if (!showDebug) {
			setTimeout(() => {
				setShowDebug(true)
			}, 100)
		}
	}, [showDebug])

	useEffect(() => {
		if (!showLogin) {
			setTimeout(() => {
				setShowLogin(true)
			}, 100)
		}
	}, [setShowLogin])

	return (
		<GlobalProvider>
			<RootRouterContext.Provider value={{ setShowLogin, setShowDebug }}>
				<RootStack.Navigator initialRouteName="SplashScreen">
					<RootStack.Screen
						name="SplashScreen"
						component={SplashScreen}
						options={{ headerShown: false }}
					/>
					<RootStack.Screen
						name="HomeStack"
						component={HomeModule}
						options={{ headerShown: false }}
					/>
					{showLogin && (
						<RootStack.Screen
							name="LoginStack"
							component={LoginModule}
							options={{
								headerShown: false,
								animation: "fade_from_bottom",
							}}
						/>
					)}
					{showDebug && (
						<RootStack.Screen
							name="DebugStack"
							component={DebugModule}
							options={{
								headerShown: false,
								animation: "fade_from_bottom",
							}}
						/>
					)}
				</RootStack.Navigator>
			</RootRouterContext.Provider>
		</GlobalProvider>
	)
}
