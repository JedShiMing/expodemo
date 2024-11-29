import AsyncStorage from "@react-native-async-storage/async-storage"
import { KeyValuePair } from "@react-native-async-storage/async-storage/lib/typescript/types"

export class StorageUtil {
	public static async getItem(key: string): Promise<string | null> {
		try {
			return AsyncStorage.getItem(key)
		} catch (error) {
			console.log(key + " get error : " + error)
		}
		return Promise.resolve(null)
	}

	public static setItem(key: string, value: string) {
		try {
			AsyncStorage.setItem(key, value)
		} catch (error) {
			console.log(key + " save error : " + error)
		}
	}

	public static removeItem(key: string) {
		try {
			AsyncStorage.removeItem(key)
		} catch (error) {
			console.log(key + " remove error : " + error)
		}
	}

	/**
	 * 批量获取
	 * @param keys
	 * @returns
	 */
	public static multiGet(keys: string[]): Promise<readonly KeyValuePair[]> {
		try {
			return AsyncStorage.multiGet(keys)
		} catch (error) {
			console.log(keys + " multiget error : " + error)
		}
		return Promise.resolve([])
	}

	/**
	 * 批量存储
	 * @param keyValuePair
	 */
	public static multiSet(keyValuePair: [string, string][]) {
		try {
			AsyncStorage.multiSet(keyValuePair)
		} catch (error) {
			console.log("multiSet error : " + error)
		}
	}

	/**
	 * 批量清除
	 * @param keys
	 */
	public static multiRemove(keys: string[]) {
		try {
			AsyncStorage.multiRemove(keys)
		} catch (error) {
			console.log("multiRemove error : " + error)
		}
	}

	public static clear() {
		try {
			AsyncStorage.clear()
		} catch (error) {
			console.log("clear error : " + error)
		}
	}
}
