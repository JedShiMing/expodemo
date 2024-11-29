export interface RequestOpt {
	// 通用请求地址 eg: www.google.com/
	baseUrl?: string
	// 地址 eg: login。 默认拼接在baseUrl后面
	url: string
	// 请求方式
	method?: "GET" | "POST" | "PUT" | "DELETE"
	// 参数
	params?: any
}

export interface RequestModel<T> {
	ok: boolean
	status: number
	data: T
}
