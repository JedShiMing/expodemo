import React, { useContext } from "react"

import { ScrollView, Text, View } from "react-native"
import { debugStyle } from "./style"
import { NavigationBar } from "../../compts/navigation-bar"
import { Assets } from "../../../common/configure/assets"
import { Card } from "./compts/card"
import { Item } from "./compts/item"
import config from "../../../common/configure/config"
import { RootRouterContext } from "../../nav/route-context"

export const DebugScreen = (props: any) => {
	const { navigation } = props
	const rootContext = useContext(RootRouterContext)

	const goPage = (page: string) => {
		navigation.navigate(page)
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
					<Item name="Device Information" rightIcon showDriver={false} onClick={() => goPage("DeviceInfo")} />
				</Card>

				<Card title="Components" style={{ marginTop: 20 }}>
					<Item name="Loading" rightIcon onClick={() => {}} />
					<Item name="Photo" rightIcon onClick={() => {}} />
					<Item name="Date" rightIcon showDriver={false} onClick={() => {}} />
				</Card>
			</ScrollView>
		</View>
	)
}
