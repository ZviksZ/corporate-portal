import { GlobalMessageInterface, SearchResultsInterface, UserInterface } from './contracts/state'
import {
	GetCookieUserActionInterface,
	GetSearchActionInterface,
	GlobalActionsType,
	LoginActionInterface,
	LoginDataInterface,
	LogoutActionInterface,
	SetGlobalMessageActionInterface,
	SetLoadingActionInterface,
	SetSearchActionInterface,
	SetUserActionInterface,
} from './contracts/actionTypes'
import { LoadingStatus } from '../../types'

export const login = (payload: LoginDataInterface): LoginActionInterface => ({
	type: GlobalActionsType.LOGIN,
	payload,
})
export const setUser = (payload: UserInterface | null): SetUserActionInterface => ({
	type: GlobalActionsType.SET_USER,
	payload,
})
export const logout = (): LogoutActionInterface => ({
	type: GlobalActionsType.LOGOUT,
})
export const getCookieUser = (): GetCookieUserActionInterface => ({
	type: GlobalActionsType.GET_COOKIE_USER,
})
export const setGlobalMessage = (payload: GlobalMessageInterface | null): SetGlobalMessageActionInterface => ({
	type: GlobalActionsType.SET_GLOBAL_MESSAGE,
	payload,
})
export const setGlobalLoading = (payload: LoadingStatus): SetLoadingActionInterface => ({
	type: GlobalActionsType.SET_LOADING_STATE,
	payload,
})
export const getSearch = (query: string): GetSearchActionInterface => ({
	type: GlobalActionsType.GET_SEARCH,
	query,
})
export const setSearch = (payload: SearchResultsInterface | null): SetSearchActionInterface => ({
	type: GlobalActionsType.SET_SEARCH,
	payload,
})

export type GlobalActions =
	| GetSearchActionInterface
	| SetSearchActionInterface
	| GetCookieUserActionInterface
	| SetLoadingActionInterface
	| SetGlobalMessageActionInterface
	| LogoutActionInterface
	| LoginActionInterface
	| SetUserActionInterface
