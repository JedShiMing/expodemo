import { StyleSheet } from "react-native"
import { Color } from "../../../theme/color"

export const debugStyle = StyleSheet.create({
	main: {
		flex: 1,
		flexDirection: "column",
		backgroundColor: Color.pageDefault,
	},
	scroll: {
		paddingTop: 10,
	},
})
