import { I18n } from "i18n-js"
import { en } from "./en"
import { zh } from "./zh"

export const i18n = new I18n({
	en,
	zh,
})

export function translate(key: string): string {
	return i18n.t(key)
}

// 翻译格式化，更多查看：https://github.com/fnando/i18
// const i18n = new I18n({
//     "en": { greetings: "Hi, %{name}!" },
//     "pt-BR": { greetings: "Olá, %{name}!" },
//   });
//   i18n.t("greetings", { name: "John" });
