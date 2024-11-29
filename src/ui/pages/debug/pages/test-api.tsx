import { Button, StyleSheet, Text, View } from "react-native"
import { NavigationBar } from "../../../compts/navigation-bar"
import { Assets } from "../../../../common/configure/assets"
import { NavProp } from "../../../../model/navigation-model"
import { useContext, useEffect, useState } from "react"
import { RootRouterContext } from "../../../nav/route-context"
import { demoService } from "../../../../services/demo-service"

interface IP extends NavProp {}
export const TestApiDemo = (props: IP) => {
	const rootContext = useContext(RootRouterContext)
	const [text, setText] = useState("")

	return (
		<View style={_style.main}>
			<NavigationBar
				showType={"left-center-right"}
				title={"Device Information"}
				rightImage={Assets.icon_close}
				rightClick={() => {
					rootContext.setShowDebug(false)
				}}
			/>
			<Button
				title="api1"
				onPress={async () => {
					const resp = await demoService.lzmy()
					console.log(resp)
					setText(String(JSON.stringify(resp.data)))
				}}
			/>
			<Text>{text}</Text>
		</View>
	)
}

const _style = StyleSheet.create({
	main: {
		flexDirection: "column",
	},
})
