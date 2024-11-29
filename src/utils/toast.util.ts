import { Toast } from "../ui/compts/toast/Toast"
import { ToastShowParams } from "../ui/compts/toast/types"

export class ToastUtil {
	static info(text: string) {
		Toast.show({
			type: "success",
			text2: text,
		})
	}

	static error(param: ToastShowParams) {
		Toast.show({
			...param,
			type: "error",
		})
	}
}
