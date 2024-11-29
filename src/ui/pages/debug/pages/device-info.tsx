import { StyleSheet, Text, View } from "react-native"
import { NavigationBar } from "../../../compts/navigation-bar"
import { Assets } from "../../../../common/configure/assets"
import { NavProp } from "../../../../model/navigation-model"
import { useContext, useEffect, useState } from "react"
import { RootRouterContext } from "../../../nav/route-context"
import {
	getAndroidId,
	getAndroidIdSync,
	getApplicationName,
	getBuildIdSync,
	getDeviceId,
	getDeviceName,
	getDeviceNameSync,
	getIpAddressSync,
	getMacAddressSync,
	getSystemName,
	getSystemVersion,
	getVersion,
} from "react-native-device-info"
import { hideLoading, showLoading } from "../../../../utils/loading"
import config from "../../../../common/configure/config"

interface IP extends NavProp {}
export const DeviceInfoDemo = (props: IP) => {
	const rootContext = useContext(RootRouterContext)
	const [info, setInfo] = useState("")
	useEffect(() => {
		showLoading("getting device information")
		new Promise(async () => {
			let str = ""
			const AndroidId = getAndroidIdSync()
			str += `AndroidID : ${AndroidId}\n`
			const Version = getVersion()
			str += `APP original Version : ${Version}\n`
			const configVersion = config.version
			str += `APP Version : ${configVersion}\n`
			const DeviceId = getDeviceId()
			str += `DeviceId : ${DeviceId}\n`
			const DeviceName = getDeviceNameSync()
			str += `DeviceName : ${DeviceName}\n`
			const BuildId = getBuildIdSync()
			str += `BuildId : ${BuildId}\n`
			// const IpAddress = getIpAddressSync()
			// str += `IpAddress : ${IpAddress}\n`
			// const MacAddress = getMacAddressSync()
			// str += `MacAddress : ${MacAddress}\n`
			const SystemName = getSystemName()
			str += `SystemName : ${SystemName}\n`
			const SystemVersion = getSystemVersion()
			str += `SystemVersion : ${SystemVersion}\n`

			setInfo(str)
			hideLoading()
		})
	}, [])

	return (
		<View style={_style.main}>
			<NavigationBar
				showType={"left-center-right"}
				title={"Device Information"}
				rightImage={Assets.icon_close}
				rightClick={() => {
					rootContext.setShowDebug(false)
				}}
			/>
			<Text>{info}</Text>
		</View>
	)
}

const _style = StyleSheet.create({
	main: {
		flexDirection: "column",
	},
})
