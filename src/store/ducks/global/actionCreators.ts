import { GlobalMessage, NotificationData, NotificationDetail, SearchResults, User } from './contracts/state'
import {
	GetCookieUserActionInterface,
	GetNotificationDataActionInterface,
	GetNotificationsActionInterface,
	GetSearchActionInterface,
	GlobalActionsType,
	LoginActionInterface,
	LoginDataInterface,
	LogoutActionInterface,
	SetGlobalMessageActionInterface,
	SetLoadingActionInterface,
	SetNotificationDataActionInterface,
	SetNotificationsActionInterface,
	SetSearchActionInterface,
	SetUserActionInterface,
} from './contracts/actionTypes'
import { LoadingStatus } from '../../types'

export const login = (payload: LoginDataInterface): LoginActionInterface => ({
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
export const setLoading = (payload: LoadingStatus): SetLoadingActionInterface => ({
	type: GlobalActionsType.SET_LOADING_STATE,
	payload,
})
export const getNotifications = (): GetNotificationsActionInterface => ({
	type: GlobalActionsType.GET_NOTIFICATIONS,
})
export const setNotifications = (payload: NotificationData | null): SetNotificationsActionInterface => ({
	type: GlobalActionsType.SET_NOTIFICATIONS,
	payload,
})
export const getNotificationData = (id: string): GetNotificationDataActionInterface => ({
	type: GlobalActionsType.GET_NOTIFICATION_DATA,
	id,
})
export const setNotificationData = (payload: NotificationDetail | null): SetNotificationDataActionInterface => ({
	type: GlobalActionsType.SET_NOTIFICATION_DATA,
	payload,
})
export const getSearch = (query: string): GetSearchActionInterface => ({
	type: GlobalActionsType.GET_SEARCH,
	query,
})
export const setSearch = (payload: SearchResults | null): SetSearchActionInterface => ({
	type: GlobalActionsType.SET_SEARCH,
	payload,
})

export type GlobalActions =
	| GetSearchActionInterface
	| SetSearchActionInterface
	| GetNotificationDataActionInterface
	| SetNotificationDataActionInterface
	| GetNotificationsActionInterface
	| SetNotificationsActionInterface
	| GetCookieUserActionInterface
	| SetLoadingActionInterface
	| SetGlobalMessageActionInterface
	| LogoutActionInterface
	| LoginActionInterface
	| SetUserActionInterface
