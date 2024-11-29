import { BaseApi } from "../common/api/request"

class DemoService extends BaseApi {
	async login() {
		const resp = await this.$get("/login", { username: "Jed" })
		console.log("登录结果 = ", resp)
	}

	lzmy() {
		return this.$request({
			baseUrl: "https://apis.tianapi.com/lzmy/index",
			// baseUrl: "https://apis.tianapi.com/lzmy/index?key=75394362154b614c20836f4b793e059c",
			url: "",
			method: "GET",
			params: {
				key: "75394362154b614c20836f4b793e059c",
			},
		})
	}
}

export const demoService = new DemoService()
