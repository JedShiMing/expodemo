import { ReactNode } from "react"
import { Image, ImageSourcePropType, StyleSheet, Text, View, ViewStyle } from "react-native"
import SafeTouchable from "./safe-touchable"
import { Assets } from "../../common/configure/assets"
import { Color } from "../../theme/color"
import { PlatformConstants } from "../../theme/platform"
import { theme } from "../../theme/style"
import { useNavigation } from "@react-navigation/native"

/**
 * 标题栏
 */
interface IP {
	showType:
		| "left"
		| "center"
		| "right"
		| "left-center"
		| "center-right"
		| "left-center-right"
		| "left-right"
	title?: string
	left?: ReactNode
	leftImage?: ImageSourcePropType | undefined
	leftClick?: () => void
	center?: ReactNode
	right?: ReactNode
	rightImage?: ImageSourcePropType | undefined
	rightClick?: () => void
	isShawdow?: boolean
	style?: ViewStyle
}
export const NavigationBar = (props: IP) => {
	const {
		showType,
		isShawdow,
		left,
		center,
		right,
		title,
		leftImage,
		leftClick,
		rightClick,
		rightImage,
		style,
	} = props
	const navigation = useNavigation()

	const leftonPress = () => {
		if (leftClick) {
			leftClick()
		} else {
			navigation.goBack()
		}
	}
	const rightonPress = () => {
		if (rightClick) {
			rightClick()
		}
	}

	// 左边部分，默认返回箭头
	const getLeft = () => {
		let leftView: ReactNode = null
		if (
			showType === "left" ||
			showType === "left-center" ||
			showType === "left-center-right" ||
			showType === "left-right"
		) {
			if (left) {
				leftView = left
			} else {
				leftView = (
					<Image
						source={leftImage ?? Assets.icon_back}
						style={navBarStyle.leftImg}
						resizeMode={"center"}
					/>
				)
			}
		}
		if (leftView) {
			return (
				<SafeTouchable style={navBarStyle.left} activeOpacity={1} onPress={leftonPress}>
					{leftView}
				</SafeTouchable>
			)
		}
		return <View />
	}

	// 中间部分，默认没有
	const getCenter = () => {
		let centerView: ReactNode = null
		if (
			showType === "center" ||
			showType === "left-center" ||
			showType === "center-right" ||
			showType === "left-center-right"
		) {
			if (center) {
				centerView = center
			} else {
				if (title) {
					centerView = <Text style={navBarStyle.centerTitle}>{title}</Text>
				}
			}
		}

		if (centerView) {
			return <View style={navBarStyle.center}>{centerView}</View>
		}
		return <View />
	}

	// 右边部分，默认为空
	const getRight = () => {
		let rightView: ReactNode = null

		if (
			showType === "right" ||
			showType === "center-right" ||
			showType === "left-right" ||
			showType === "left-center-right"
		) {
			if (left) {
				rightView = right
			} else {
				rightView = (
					<Image
						source={rightImage ?? Assets.icon_setting}
						style={navBarStyle.leftImg}
						resizeMode={"cover"}
					/>
				)
			}
		}
		if (rightView) {
			return (
				<SafeTouchable style={navBarStyle.left} activeOpacity={1} onPress={rightonPress}>
					{rightView}
				</SafeTouchable>
			)
		}
		return <View />
	}

	return (
		<View
			style={[
				navBarStyle.main,
				isShawdow && navBarStyle.shadow,
				style,
				{ paddingTop: PlatformConstants.statusBarHeight },
			]}
		>
			<View style={navBarStyle.view}>
				{getCenter()}
				{getLeft()}
				{getRight()}
			</View>
		</View>
	)
}

const navBarStyle = StyleSheet.create({
	main: {
		backgroundColor: Color.white,
	},
	shadow: {
		...theme.shadow,
	},
	view: {
		height: (50).adaptW(),
		flexDirection: "row",
		justifyContent: "space-between",
		position: "relative",
		// backgroundColor: "#FFFAF0"
	},
	left: {
		width: "15%",
		justifyContent: "center",
		alignItems: "center",
	},
	leftImg: {
		width: 32,
		height: 32,
	},
	center: {
		...theme.absoluteCenter,
	},
	centerTitle: {
		...theme.title,
	},
})
