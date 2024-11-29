import { View, StyleSheet } from "react-native"
import WebView from "react-native-webview"
import { NavigationBar } from "../../compts/navigation-bar"
import { NavProp } from "../../../model/navigation-model"

export const LoginAccount = (props: NavProp) => {
	return (
		<View style={_style.main}>
			<NavigationBar
				showType={"left-center"}
				title={"log in"}
				isShawdow
				leftClick={() => {
					props.navigation.goBack()
				}}
			/>
			<WebView source={{ uri: "https://www.baidu.com" }} style={{ flex: 1 }} />
		</View>
	)
}
const _style = StyleSheet.create({
	main: {
		flex: 1,
		flexDirection: "column",
	},
})
