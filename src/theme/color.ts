export const Color = {
	// 主题色
	colorPrimary: "#3F51B5",
	colorPrimaryDark: "#303F9F",
	colorAccent: "#FF4081",
	pageDefault: "#f3f3f3",

	// 常用色号
	white: "#ffffff",
	black: "#000000",
	blueTFG: "#2D317C",
	grayTitle: "#535353",

	// 组件颜色
	text: "#c2c2c2", // 主字体
	textSec: "#F5F5F5", // 副字体
	des: "rgba(0, 0, 0, 0.45)", // 描述
	line: "rgba(5, 5, 5, 0.6)", // 分割线
	border: "#d9d9d9", // 边框
}

/**
 * 随机色
 * @param {*} alpha
 */
export const randomColor = (alpha: Number) => {
	let r = Math.floor(Math.random() * 255)
	let g = Math.floor(Math.random() * 255)
	let b = Math.floor(Math.random() * 255)
	return `rgba(${r},${g},${b},${alpha})`
}
