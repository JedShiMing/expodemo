/**
 * 日期工具类
 */
export class DateUtils {
	static formatToYMD(date: Date): string {
		const year = date.getFullYear()
		const month = (date.getMonth() + 1).toString().padStart(2, "0")
		const day = date.getDate().toString().padStart(2, "0")

		return `${year}-${month}-${day}`
	}

	static formatToYMDhms(date: Date): string {
		const year = date.getFullYear()
		const month = (date.getMonth() + 1).toString().padStart(2, "0")
		const day = date.getDate().toString().padStart(2, "0")
		const hours = date.getHours().toString().padStart(2, "0")
		const minutes = date.getMinutes().toString().padStart(2, "0")
		const seconds = date.getSeconds().toString().padStart(2, "0")
		return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
	}

	static parseFromYMD(dateString: string): Date {
		const [year, month, day] = dateString.split("-").map(Number)
		return new Date(year, month - 1, day)
	}

	static getTimestamp(date = new Date()) {
		return date.getTime()
	}

	static getCurrentTimestamp() {
		return Date.now()
	}
}
