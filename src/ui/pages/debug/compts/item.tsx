import { Image, StyleSheet, Text, View } from "react-native"
import { Assets } from "../../../../common/configure/assets"
import SafeTouchable from "../../../compts/safe-touchable"
import { Driver } from "../../../compts/driver"
import { Color } from "../../../../theme/color"

interface IP {
	name: string
	nameValue?: string
	rightIcon?: boolean
	clickIcon?: boolean
	onClick?: () => void
	showDriver?: boolean
}
export const Item = (props: IP) => {
	const { name, nameValue, rightIcon = false, onClick, clickIcon, showDriver = true } = props
	const onPress = () => {
		if (onClick) {
			onClick()
		}
	}

	return (
		<SafeTouchable
			activeOpacity={1}
			style={[_style.main, showDriver && _style.driver]}
			onPress={onPress}
		>
			<Text style={_style.leftText}>{name}</Text>
			<View>
				{nameValue && <Text>{nameValue}</Text>}
				{rightIcon && (
					<Image
						source={Assets.icon_right}
						style={_style.rightImg}
						resizeMode={"center"}
					/>
				)}
				{clickIcon && (
					<Image
						source={Assets.icon_click}
						style={_style.rightImg}
						resizeMode={"center"}
					/>
				)}
			</View>
		</SafeTouchable>
	)
}

const _style = StyleSheet.create({
	main: {
		flexDirection: "row",
		height: 50,
		alignItems: "center",
		paddingHorizontal: 15,
	},
	driver: {
		borderBottomColor: Color.line,
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
	leftText: {
		flex: 1,
	},
	rightImg: {
		width: 20,
		height: 20,
	},
})
