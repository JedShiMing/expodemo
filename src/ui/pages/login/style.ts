import { StyleSheet } from "react-native"
import { Color } from "../../../theme/color"

const loginStyle = StyleSheet.create({
	main: {
		flex: 1,
		flexDirection: "column",
	},
	top: {
		flexDirection: "row",
		height: (60).adaptW(),
		marginTop: (30).adaptW(),
	},
	topLeft: {
		width: "40%",
		height: "100%",
		display: "flex",
		flexDirection: "column",
	},
	topLeftImgView: {
		flex: 1,
		paddingRight: (40).adaptW(),
		paddingVertical: 7,
		paddingHorizontal: 12,
	},
	topLeftImg: {
		width: "100%",
		height: "100%",
		flex: 1,
	},
	version: {
		textAlign: "right",
		marginRight: 10,
	},
	topRight: {
		flex: 1,
		backgroundColor: Color.blueTFG,
		paddingLeft: (15).adaptW(),
		justifyContent: "center",
		borderTopLeftRadius: 3,
		borderBottomLeftRadius: 3,
	},
	topRightText: {
		color: Color.white,
	},
	logo: {
		width: (180).adaptW(),
		height: (60).adaptW(),
		marginTop: (160).adaptW(),
		alignSelf: "center",
	},
	loginButton: {
		marginTop: (100).adaptW(),
		width: "60%",
		height: (40).adaptW(),
		borderRadius: 10,
		backgroundColor: Color.blueTFG,
		justifyContent: "center",
		alignItems: "center",
		alignSelf: "center",
	},
	loginButtonText: {
		color: Color.white,
		fontSize: 16,
	},
	bottom: {
		flex: 1,
		flexDirection: "column-reverse",
		paddingHorizontal: (9).adaptW(),
		paddingBottom: (12).adaptW(),
	},
	bottomText: {
		color: Color.grayTitle,
		fontSize: 12,
	},
})

export { loginStyle }
