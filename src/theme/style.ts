import { StyleSheet } from "react-native"
import { Color } from "./color"

export const theme = StyleSheet.create({
	center1: {
		display: "flex",
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	center: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	absolute: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	},
	absoluteCenter: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "black",
		color: Color.black,
	},
	shadow: {
		// iOS 阴影属性
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.25,
		shadowRadius: 10,
		// Android 阴影属性
		elevation: 10,
	},
})
