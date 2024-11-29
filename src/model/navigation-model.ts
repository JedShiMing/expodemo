import { NavigationProp } from "@react-navigation/native"

// 路由props
export interface NavProp {
	// not use NavigationProp<ReactNavigation.RootParamList>
	navigation: NavigationProp<any>
}
