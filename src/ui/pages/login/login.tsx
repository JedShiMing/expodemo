import React from "react"
import { Button, Text } from "react-native"
import { StorageUtil } from "../../../utils/storage"
import { loginStyle } from "./style"
import { SafeAreaView } from "react-native-safe-area-context"

export const LoginScreen = (props: any) => {
	const login = () => {
		StorageUtil.setItem("login", "123")
		props.navigation.navigate("LoginAccount")
	}
	return (
		<SafeAreaView style={loginStyle.main}>
			<Text>login</Text>
			<Button title="log in" onPress={login} />
		</SafeAreaView>
	)
}
