import { Modal, StyleSheet, Text, View } from "react-native"
import WheelPicker, { IWheelPicker } from "./WheelPicker"
import SafeTouchable from "../safe-touchable"
import { Driver } from "../driver"

/**
 * code fork react-native-wheely
 * This WheelModal is customized
 */
interface IP extends IWheelPicker {
	title?: string
	show: boolean
	onClose: () => void
	onCancel?: () => void
	onConfrim?: (index: number) => void
}

const WheelModal = (props: IP) => {
	const { title, show, onClose, onCancel, onConfrim, selectedIndex } = props
	let curIndex: number = selectedIndex
	const closeModal = () => {
		onClose()
	}
	return (
		<Modal
			transparent
			hardwareAccelerated
			visible={show}
			animationType={"slide"}
			onRequestClose={closeModal}
		>
			<View style={_style.main}>
				<SafeTouchable style={_style.fullScrren} onPress={closeModal}></SafeTouchable>
				<View style={_style.topView}>
					<SafeTouchable
						style={_style.topButton}
						onPress={() => {
							onCancel && onCancel()
							closeModal()
						}}
					>
						<Text style={_style.topButtonText}>cancel</Text>
					</SafeTouchable>
					<View style={_style.titleView}>
						{title && <Text style={_style.title}>{title}</Text>}
					</View>
					<SafeTouchable
						style={_style.topButton}
						onPress={() => {
							onConfrim && onConfrim(curIndex)
							closeModal()
						}}
					>
						<Text style={_style.topButtonText}>confirm</Text>
					</SafeTouchable>
				</View>
				<Driver />
				<WheelPicker
					containerStyle={{ ...props.containerStyle, ..._style.wheel }}
					onChange={index => {
						curIndex = index
					}}
					{...props}
				/>
			</View>
		</Modal>
	)
}

const _style = StyleSheet.create({
	main: {
		flex: 1,
		flexDirection: "column",
	},
	fullScrren: {
		flex: 1,
	},
	topView: {
		height: 50,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		paddingHorizontal: 30,
	},
	topButton: {
		width: "15%",
		justifyContent: "center",
		alignItems: "center",
	},
	topButtonText: {
		fontSize: 12,
		color: "#FF69B4",
	},
	wheel: {
		backgroundColor: "#FFFFFF",
	},
	titleView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#000000",
	},
})

export { WheelModal, WheelPicker }
