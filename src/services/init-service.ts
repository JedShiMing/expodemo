import { LogBox, Platform, StatusBar } from "react-native"
import { getLocales } from "react-native-localize"
import { i18n } from "../common/translations/translation"
import { startNetworkLogging } from "react-native-network-logger"

export class InitService {
	constructor() {
		console.log("--- 初始化 --- ")
		// 本地化
		const locale = getLocales()[0]
		const code = locale.languageCode === "zh" ? "zh" : "en"
		i18n.defaultLocale = code
		i18n.locale = code
		// 扩展声明
		require("../utils/extension")
		// 安卓沉浸式布局
		if (Platform.OS === "android") {
			// 设置背景色
			StatusBar.setBackgroundColor("rgba(0,0,0,0)")
			// 设置透明，不占位
			StatusBar.setTranslucent(true)
			// 设置黑色icon
			StatusBar.setBarStyle("dark-content")
		}
		// 初始化网络请求
		startNetworkLogging()
	}
}
