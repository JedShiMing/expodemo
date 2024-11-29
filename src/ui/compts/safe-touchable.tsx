import { TouchableOpacity, TouchableOpacityProps } from "react-native"

/**
 * 安全的TouchableOpacity组件，做了防抖
 */

interface IP extends TouchableOpacityProps {
	children?: any
	onPress?: () => void
}

// 防抖时间
const SAFETIME = 800
const SafeTouchable = (props: IP) => {
	let timer = 0
	return (
		<TouchableOpacity
			{...props}
			activeOpacity={props.activeOpacity ?? 1}
			onPress={() => {
				const newTime = Date.now()
				if (props.onPress && newTime - timer > SAFETIME) {
					timer = newTime
					props.onPress()
				}
			}}
		>
			{props.children}
		</TouchableOpacity>
	)
}

export default SafeTouchable
