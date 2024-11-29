import React, { createContext } from "react"

/**
 * 根路由
 */
export const RootRouterContext = createContext({} as any)

export enum RootRouteType {
	Main = "Main",
	Debug = "Debug",
}

/**
 * 主路由
 */
export const MainRouterContext = createContext({} as any)

export enum MainRouteType {
	Splash = "Splash",
	Home = "Home",
	Login = "Login",
}
