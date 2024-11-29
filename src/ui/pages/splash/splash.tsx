import { CommonActions } from "@react-navigation/native"
import { useEffect } from "react"
import { View } from "react-native"
import { NavProp } from "../../../model/navigation-model"
import { StorageUtil } from "../../../utils/storage"

export const SplashScreen = (props: NavProp) => {
	useEffect(() => {
		StorageUtil.getItem("login").then(res => {
			console.log("获取登录信息= ", res)
			// 重置路由到首页/登录页
			props.navigation.dispatch(
				CommonActions.reset({
					index: 0,
					routes: [{ name: res ? "HomeStack" : "LoginStack" }],
				}),
			)
		})
	}, [])
	return <View />
}
