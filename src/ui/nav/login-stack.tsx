import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { LoginScreen } from "../pages/login/login"
import { LoginAccount } from "../pages/login/login-account"

/**
 * 登录模块
 */
const LoginStack = createNativeStackNavigator()
export const LoginModule = () => {
	return (
		<LoginStack.Navigator
			initialRouteName={"Debug"}
			screenOptions={{
				headerShown: false,
			}}
		>
			<LoginStack.Screen
				name={"LoginScreen"}
				component={LoginScreen}
				options={
					{
						// headerShown: true,
						// animation: 'fade_from_bottom',
					}
				}
			/>
			<LoginStack.Screen
				name={"LoginAccount"}
				component={LoginAccount}
				options={{
					// headerShown: true,
					animation: "fade_from_bottom",
				}}
			/>
		</LoginStack.Navigator>
	)
}
