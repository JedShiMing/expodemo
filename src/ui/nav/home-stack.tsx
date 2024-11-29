import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { DetailScreen } from "../pages/home/detail/detail"
import { DemoScreen } from "../pages/home/demo"
import { HomeScreen } from "../pages/home/home"
import DebugButton from "../compts/debug-button"

/**
 * 主模块
 * 因为我项目里没有底部Tab模块,就直接用堆栈路由
 * 如果有底部Tab的需要改成下面Tab
 */
const HomeStack = createNativeStackNavigator()

export const HomeModule = () => {
	return (
		<>
			<HomeStack.Navigator
				initialRouteName={"SplashScreen"}
				screenOptions={{
					headerShown: false,
				}}
			>
				<HomeStack.Screen
					name={"HomeScreen"}
					component={HomeScreen}
					options={{
						gestureEnabled: false, // 禁止ios左滑手势
					}}
				/>
				<HomeStack.Screen name={"DemoScreen"} component={DemoScreen} />
				<HomeStack.Screen name={"DetailScreen"} component={DetailScreen} />
			</HomeStack.Navigator>
		</>
	)
}

/**
 * 底部tab
 */
// const TabStack = createBottomTabNavigator()
// function Tab() {
//     return (
//         <TabStack.Navigator
//             screenOptions={({ route }) => ({
//                 tabBarIcon: ({ focused }) => {
//                     return <TabIconComponent routeName={route.name} focused={focused} />
//                 }
//             })}
//         >
//             <TabStack.Screen name='Demo' component={DemoScreen} />
//             <TabStack.Screen name='Home' component={HomeScreen} />
//             <TabStack.Screen name='Profile' component={ProfileScreen} />
//         </TabStack.Navigator>
//     )
// }
