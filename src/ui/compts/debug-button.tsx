import { useRef } from "react"
import {
	Animated,
	Dimensions,
	PanResponder,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native"
import SafeTouchable from "./safe-touchable"
import { useNavigation } from "@react-navigation/native"
import { useSelector } from "react-redux"
import { IStore } from "../../store/store"

const buttonWidth = 80
const buttonHeight = 30

/**
 * debug按钮
 */
const DebugButton = () => {
	const isDebug = useSelector((state: IStore) => state.app.isDebug)
	const nav: any = useNavigation()
	const pan = useRef(new Animated.ValueXY()).current
	const panResponder = useRef(
		PanResponder.create({
			onMoveShouldSetPanResponder: () => true,
			onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
				useNativeDriver: false,
			}),
			onPanResponderRelease: (e, gesture) => {
				pan.extractOffset()
			},
		}),
	).current

	// 根据环境来判断隐藏显示
	if (!isDebug) return <View />
	return (
		<Animated.View
			style={[_style.button, { transform: [{ translateX: pan.x }, { translateY: pan.y }] }]}
			{...panResponder.panHandlers}
		>
			<SafeTouchable
				style={_style.button_cont}
				activeOpacity={1}
				onPress={() => {
					nav.navigate("DebugStack")
				}}
			>
				<Text>Debug</Text>
			</SafeTouchable>
		</Animated.View>
	)
}

export default DebugButton

const _style = StyleSheet.create({
	button: {
		width: buttonWidth,
		height: buttonHeight,

		position: "absolute",
		left: 0,
		top: Dimensions.get("window").height / 2,
	},
	button_cont: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#FFD700",
		width: "100%",
		height: "100%",
		borderRadius: 8,
	},
})
