import { Action } from 'redux'
import { GlobalMessage, User } from './state'

export enum GlobalActionsType {
	LOGIN = 'global/LOGIN',
	SET_USER = 'global/SET_USER',
	LOGOUT = 'global/LOGOUT',
	SET_GLOBAL_MESSAGE = 'global/SET_GLOBAL_MESSAGE',
	SET_LOADING = 'global/SET_LOADING',
}
export interface LoginData {
	login: string
	password: string
}

export interface LogoutActionInterface extends Action<GlobalActionsType> {
	type: GlobalActionsType.LOGOUT
}
export interface LoginActionInterface extends Action<GlobalActionsType> {
	type: GlobalActionsType.LOGIN
	payload: LoginData
}
export interface SetUserActionInterface extends Action<GlobalActionsType> {
	type: GlobalActionsType.SET_USER
	payload: User | null
}
export interface SetGlobalMessageActionInterface extends Action<GlobalActionsType> {
	type: GlobalActionsType.SET_GLOBAL_MESSAGE
	payload: GlobalMessage | null
}
export interface SetLoadingActionInterface extends Action<GlobalActionsType> {
	type: GlobalActionsType.SET_LOADING
	payload: boolean
}
