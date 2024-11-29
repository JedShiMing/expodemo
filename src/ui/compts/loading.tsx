import { ActivityIndicator, Modal, StyleSheet, Text, View } from "react-native"
import { useSelector } from "react-redux"
import { IStore } from "../../store/store"
import { Color } from "../../theme/color"

export const Loading = () => {
	const { loading } = useSelector((state: IStore) => state.app)

	return (
		<Modal transparent visible={loading.show}>
			<View style={_style.main}>
				<View style={_style.view}>
					<ActivityIndicator style={_style.loading} />
					<Text style={_style.text}>{loading.name}</Text>
				</View>
			</View>
		</Modal>
	)
}

const _style = StyleSheet.create({
	main: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	view: {
		width: 100,
		height: 100,
		backgroundColor: "rgba(0,0,0,0.8)",
		alignItems: "center",
		borderRadius: 10,
	},
	loading: {
		marginTop: 40,
		height: 20,
	},
	text: {
		fontSize: 12,
		color: Color.textSec,
		marginTop: 10,
	},
})
