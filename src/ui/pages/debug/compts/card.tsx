import { StyleSheet, Text, View, ViewStyle } from "react-native"
import { Color } from "../../../../theme/color"

interface IP {
	title: string
	style?: ViewStyle
	children?: any
}
export const Card = (props: IP) => {
	const { title, children, style } = props
	return (
		<View style={[_style.main, style]}>
			<Text style={_style.title}>{title}</Text>
			<View style={_style.data}>{children}</View>
		</View>
	)
}

const _style = StyleSheet.create({
	main: {
		flexDirection: "column",
	},
	data: {
		backgroundColor: Color.white,
		flexDirection: "column",
	},
	title: {
		fontSize: 15,
		color: Color.des,
		marginLeft: 15,
		marginBottom: 5,
	},
})
