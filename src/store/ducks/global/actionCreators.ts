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


/**
 * Авторизация
 */
export const login = (payload: LoginData): LoginActionInterface => ({
	type: GlobalActionsType.LOGIN,
	payload,
})
/**
 * Пользователь в состояние
 */
export const setUser = (payload: User | null): SetUserActionInterface => ({
	type: GlobalActionsType.SET_USER,
	payload,
})
/**
 * Выход из приложения
 */
export const logout = (): LogoutActionInterface => ({
	type: GlobalActionsType.LOGOUT,
})
/**
 * Пользователь из куков
 */
export const getCookieUser = (): GetCookieUserActionInterface => ({
	type: GlobalActionsType.GET_COOKIE_USER,
})
/**
 * Установка состояния глобального сообщения
 */
export const setGlobalMessage = (payload: GlobalMessage | null): SetGlobalMessageActionInterface => ({
	type: GlobalActionsType.SET_GLOBAL_MESSAGE,
	payload,
})
/**
 * Установка состояния загрузки
 */
export const setLoading = (payload: boolean): SetLoadingActionInterface => ({
	type: GlobalActionsType.SET_LOADING,
	payload,
})

export type GlobalActions = GetCookieUserActionInterface | SetLoadingActionInterface | SetGlobalMessageActionInterface | LogoutActionInterface | LoginActionInterface | SetUserActionInterface
