/**
 * 分割线
 */

import { StyleSheet, View } from "react-native"

interface IP {
	height?: number
	color?: string
}
export const Driver = (props: IP) => {
	const { height = StyleSheet.hairlineWidth, color = "#dcdcdc" } = props
	return <View style={{ width: "100%", height, backgroundColor: color }} />
}
