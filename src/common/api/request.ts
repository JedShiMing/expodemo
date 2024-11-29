import config from "../configure/config"
import { RequestOpt, RequestModel } from "../../model/request-model"
import { ToastUtil } from "../../utils/toast.util"

export class BaseApi {
	protected $request(opt: RequestOpt) {
		return this.fetch(opt)
	}

	protected $get<T>(url: string, params?: any) {
		return this.fetch<T>({ url, method: "GET", params })
	}

	protected $post(url: string, params?: any) {
		return this.fetch({ url, method: "POST", params })
	}

	protected $put(url: string, params?: any) {
		return this.fetch({ url, method: "PUT", params })
	}

	protected $delete(url: string, params?: any) {
		return this.fetch({ url, method: "DELETE", params })
	}

	/**
	 * 请求主体
	 * @param opt
	 * @returns
	 */
	private fetch<T>(opt: RequestOpt): Promise<RequestModel<T>> {
		return new Promise((resolve, reject) => {
			const reqInfo = this.analysisOpt(opt)
			fetch(this.getUrl(reqInfo.baseUrl, reqInfo.url), {
				method: reqInfo.method,
				body: reqInfo.params ? JSON.stringify(reqInfo.params) : null,
				headers: this.getHeaders(),
			})
				.then(async response => {
					const respText = await response.text()
					return {
						ok: response.ok,
						status: response.status,
						data: response.ok && respText.length > 0 ? JSON.parse(respText) : respText,
					}
				})
				.then((respData: RequestModel<T>) => {
					if (respData.ok) {
						resolve(respData)
					} else {
						// TODO 这里封装通用错误逻辑处理
						console.log("接口报错 = ", respData)
						reject(respData)
					}
				})
				.catch(error => {
					console.log("请求失败 = ", error)
					ToastUtil.error({ text1: "request error", text2: error.toString() })
					reject(error)
				})
		})
	}

	/**
	 * 解析入参
	 */
	private analysisOpt(opt: RequestOpt): RequestOpt {
		const requestOpt = { ...opt }
		// 如果是get请求，需要把params拼接到地址后面
		if (requestOpt.method === "GET" && requestOpt.params) {
			let splic = new URLSearchParams(requestOpt.params).toString()
			if (requestOpt.url && splic) {
				requestOpt.url = `${requestOpt.url}?${splic}`
			}
			requestOpt.params = null
		}
		return requestOpt
	}

	private getUrl(baseUrl: string = config.baseUrl, url: string): string {
		return `${baseUrl}${url}`
	}

	private getHeaders() {
		return {
			"Content-Type": "application/json",
			// "Content-Type": "application/x-www-form-urlencoded",
			// Authorization: `Bearer ${userStore.token}`
		}
	}
}
