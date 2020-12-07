import { Action } from 'redux'
import { GlobalMessage, NotificationData, NotificationDetail, User } from './state'

export enum GlobalActionsType {
	LOGIN = 'global/LOGIN',
	SET_USER = 'global/SET_USER',
	LOGOUT = 'global/LOGOUT',
	SET_GLOBAL_MESSAGE = 'global/SET_GLOBAL_MESSAGE',
	SET_LOADING = 'global/SET_LOADING',
	GET_COOKIE_USER = 'global/GET_COOKIE_USER',
	GET_NOTIFICATIONS = 'global/GET_NOTIFICATIONS',
	SET_NOTIFICATIONS = 'global/SET_NOTIFICATIONS',
	GET_NOTIFICATION_DATA = 'global/GET_NOTIFICATION_DATA',
	SET_NOTIFICATION_DATA = 'global/SET_NOTIFICATION_DATA',
}
export interface LoginData {
	login: string
	password: string
}

export interface LogoutActionInterface extends Action<GlobalActionsType> {
	type: GlobalActionsType.LOGOUT
}
export interface GetCookieUserActionInterface extends Action<GlobalActionsType> {
	type: GlobalActionsType.GET_COOKIE_USER
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

export interface GetNotificationsActionInterface extends Action<GlobalActionsType> {
	type: GlobalActionsType.GET_NOTIFICATIONS
}
export interface SetNotificationsActionInterface extends Action<GlobalActionsType> {
	type: GlobalActionsType.SET_NOTIFICATIONS
	payload: NotificationData | null
}

export interface GetNotificationDataActionInterface extends Action<GlobalActionsType> {
	type: GlobalActionsType.GET_NOTIFICATION_DATA
	id: string
}
export interface SetNotificationDataActionInterface extends Action<GlobalActionsType> {
	type: GlobalActionsType.SET_NOTIFICATION_DATA
	payload: NotificationDetail | null
}
