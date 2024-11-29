import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { LoginScreen } from "../pages/login/login"
import { DebugScreen } from "../pages/debug/debug"
import { DeviceInfoDemo } from "../pages/debug/pages/device-info"
import { TestApiDemo } from "../pages/debug/pages/test-api"
import { NetworkLoggerDemo } from "../pages/debug/pages/network-logger"

/**
 * Debug模块
 */
const DebugStack = createNativeStackNavigator()
// 必须Debug开头，否则会造成debug按钮不识别
export const DebugModule = () => {
	return (
		<DebugStack.Navigator
			initialRouteName={"Debug"}
			screenOptions={{
				headerShown: false,
			}}
		>
			<DebugStack.Screen name={"Debug"} component={DebugScreen} />
			<DebugStack.Screen
				name={"Debug-DeviceInfoDemo"}
				component={DeviceInfoDemo}
				options={{
					animation: "slide_from_right",
				}}
			/>
			<DebugStack.Screen
				name={"Debug-TestApiDemo"}
				component={TestApiDemo}
				options={{
					animation: "slide_from_right",
				}}
			/>
			<DebugStack.Screen
				name={"Debug-NetworkLoggerDemo"}
				component={NetworkLoggerDemo}
				options={{
					animation: "slide_from_right",
				}}
			/>
		</DebugStack.Navigator>
	)
}
