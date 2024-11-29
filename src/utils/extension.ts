import { PlatformConstants } from "../theme/platform"
import "../common/extension/index.ts"

/**
 * 扩展属性定义
 */
Number.prototype.adaptW = function adaptW(): number {
	return (this.valueOf() * PlatformConstants.windowWidth) / 375
}

Number.prototype.adaptH = function adaptH(): number {
	return (this.valueOf() * PlatformConstants.windowHeight) / 812
}
