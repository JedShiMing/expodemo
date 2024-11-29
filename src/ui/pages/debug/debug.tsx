import React, { useContext } from "react"

import { ScrollView, Text, View } from "react-native"
import { debugStyle } from "./style"
import { NavigationBar } from "../../compts/navigation-bar"
import { Assets } from "../../../common/configure/assets"
import { Card } from "./compts/card"
import { Item } from "./compts/item"
import config from "../../../common/configure/config"
import { RootRouterContext } from "../../nav/route-context"
import { hideLoading, showLoading } from "../../../utils/loading"
import { Toast } from "../../compts/toast/Toast"
import { StorageUtil } from "../../../utils/storage"
import { ToastUtil } from "../../../utils/toast.util"

export const DebugScreen = (props: any) => {
	const { navigation } = props
	const rootContext = useContext(RootRouterContext)

	const goPage = (page: string) => {
		navigation.navigate("Debug-" + page)
	}

	return (
		<View style={debugStyle.main}>
			<NavigationBar
				showType={"center-right"}
				title={"Debug"}
				rightImage={Assets.icon_close}
				rightClick={() => {
					rootContext.setShowDebug(false)
				}}
			/>
			<ScrollView style={debugStyle.scroll}>
				<Card title="Basic Information" style={{ marginTop: 10 }}>
					<Item name="App Version" nameValue={config.version} />
					<Item
						name="Device Information"
						rightIcon
						onClick={() => goPage("DeviceInfoDemo")}
					/>
					<Item
						name="Network Logger"
						rightIcon
						showDriver={false}
						onClick={() => goPage("NetworkLoggerDemo")}
					/>
				</Card>

				<Card title="operate" style={{ marginTop: 10 }}>
					<Item
						name="Log out"
						clickIcon
						onClick={() => {
							StorageUtil.removeItem("login")
							ToastUtil.info("please restart app")
						}}
					/>
					<Item
						name="Test Api"
						rightIcon
						showDriver={false}
						onClick={() => goPage("TestApiDemo")}
					/>
				</Card>

				<Card title="Components" style={{ marginTop: 20 }}>
					<Item
						name="Loading"
						clickIcon
						onClick={() => {
							showLoading("hello, is loading")
							setTimeout(() => {
								hideLoading()
							}, 3000)
						}}
					/>
					<Item
						name="Toast"
						clickIcon
						onClick={() => {
							Toast.show({
								text1: "hello",
								text2: "world",
								type: "success",
								visibilityTime: 2000,
							})
						}}
					/>
					<Item name="Photo" rightIcon onClick={() => {}} />
				</Card>
			</ScrollView>
		</View>
	)
}
