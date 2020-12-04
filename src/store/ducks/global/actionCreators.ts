import { GlobalMessage, User } from './contracts/state'
import {
	GetCookieUserActionInterface,
	GlobalActionsType,
	LoginActionInterface,
	LoginData,
	LogoutActionInterface,
	SetGlobalMessageActionInterface,
	SetLoadingActionInterface,
	SetUserActionInterface,
} from './contracts/actionTypes'

export const login = (payload: LoginData): LoginActionInterface => ({
	type: GlobalActionsType.LOGIN,
	payload,
})
export const setUser = (payload: User | null): SetUserActionInterface => ({
	type: GlobalActionsType.SET_USER,
	payload,
})
export const logout = (): LogoutActionInterface => ({
	type: GlobalActionsType.LOGOUT,
})
export const getCookieUser = (): GetCookieUserActionInterface => ({
	type: GlobalActionsType.GET_COOKIE_USER,
})
export const setGlobalMessage = (payload: GlobalMessage | null): SetGlobalMessageActionInterface => ({
	type: GlobalActionsType.SET_GLOBAL_MESSAGE,
	payload,
})
export const setLoading = (payload: boolean): SetLoadingActionInterface => ({
	type: GlobalActionsType.SET_LOADING,
	payload,
})

export type GlobalActions = GetCookieUserActionInterface | SetLoadingActionInterface | SetGlobalMessageActionInterface | LogoutActionInterface | LoginActionInterface | SetUserActionInterface
