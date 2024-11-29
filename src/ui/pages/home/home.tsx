import React, { useEffect, useRef } from "react"
import { BackHandler, Button, Platform, Pressable, Text, ToastAndroid, View } from "react-native"
import SafeTouchable from "../../compts/safe-touchable"
import { useDispatch, useSelector } from "react-redux"
import { IStore } from "../../../store/store"
import { translate } from "../../../common/translations/translation"
import { NavProp } from "../../../model/navigation-model"

export const HomeScreen = (props: NavProp) => {
	const { navigation } = props
	const { userInfo } = useSelector((state: IStore) => state.user)
	// last click backPress
	const lastBackPress = useRef(0)
	const dispatch = useDispatch()
	useEffect(() => {
		if (Platform.OS === "android") {
			// 禁止安卓物理返回键
			const onBackPress = () => {
				// 如果在底层路由
				if (!navigation.canGoBack()) {
					const currentTime = Date.now()
					const timer = currentTime - lastBackPress.current
					if (timer < 2000) {
						BackHandler.exitApp()
					} else {
						ToastAndroid.show("2s内再按一次退出APP", ToastAndroid.SHORT)
						lastBackPress.current = currentTime
					}
					return true
				}
				return false
			}

			const backHandler = BackHandler.addEventListener("hardwareBackPress", onBackPress)

			return () => backHandler.remove()
		}
	}, [])

	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text>HomeScreen!</Text>
			<Pressable
				onPress={() => {
					console.log("点击了 detail")
					navigation.navigate("DetailScreen")
				}}
			>
				<Text>Hello, 点我去详情页</Text>
			</Pressable>
			<Text>userInfo : {userInfo}</Text>
			<SafeTouchable>
				<Button
					title={`${translate("login")}`}
					onPress={() => {
						navigation.navigate("LoginStack")
					}}
				/>
			</SafeTouchable>
		</View>
	)
}
