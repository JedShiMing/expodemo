import { View, Text, StyleSheet } from "react-native"
import NetworkLogger from "react-native-network-logger"
import { Assets } from "../../../../common/configure/assets"
import { NavigationBar } from "../../../compts/navigation-bar"
import { useContext } from "react"
import { RootRouterContext } from "../../../nav/route-context"

export const NetworkLoggerDemo = () => {
	const rootContext = useContext(RootRouterContext)
	return (
		<View style={_style.main}>
			<NavigationBar
				showType={"left-center-right"}
				title={"Network Logger"}
				rightImage={Assets.icon_close}
				rightClick={() => {
					rootContext.setShowDebug(false)
				}}
			/>
			<View style={{ flex: 1 }}>
				<NetworkLogger />
			</View>
		</View>
	)
}

const _style = StyleSheet.create({
	main: {
		flex: 1,
		flexDirection: "column",
	},
})
