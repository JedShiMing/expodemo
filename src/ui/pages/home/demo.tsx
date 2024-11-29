import React from "react"
import { Button, Text, View } from "react-native"

export const DemoScreen = (props: any) => {
	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text>DemoScreen!</Text>
			<Button
				title="去详情页"
				onPress={() => {
					props.navigation.navigate("DetailScreen")
				}}
			/>
		</View>
	)
}
