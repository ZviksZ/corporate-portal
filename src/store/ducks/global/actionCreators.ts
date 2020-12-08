import { GlobalMessage, NotificationData, NotificationDetail, SearchResults, User } from './contracts/state'
import {
	GetCookieUserActionInterface,
	GetNotificationDataActionInterface,
	GetNotificationsActionInterface,
	GetSearchActionInterface,
	GlobalActionsType,
	LoginActionInterface,
	LoginData,
	LogoutActionInterface,
	SetGlobalMessageActionInterface,
	SetLoadingActionInterface,
	SetNotificationDataActionInterface,
	SetNotificationsActionInterface,
	SetSearchActionInterface,
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
/**
 * Загрузка уведомлений
 */
export const getNotifications = (): GetNotificationsActionInterface => ({
	type: GlobalActionsType.GET_NOTIFICATIONS,
})
/**
 * Установка в состояние уведомлений
 */
export const setNotifications = (payload: NotificationData | null): SetNotificationsActionInterface => ({
	type: GlobalActionsType.SET_NOTIFICATIONS,
	payload,
})

/**
 * Загрузка данных уведомления
 */
export const getNotificationData = (id: string): GetNotificationDataActionInterface => ({
	type: GlobalActionsType.GET_NOTIFICATION_DATA,
	id,
})
/**
 * Установка в состояние уведомления
 */
export const setNotificationData = (payload: NotificationDetail | null): SetNotificationDataActionInterface => ({
	type: GlobalActionsType.SET_NOTIFICATION_DATA,
	payload,
})

/**
 * Поиск по сотрудникам, подразделениям, командам и проектам
 */
export const getSearch = (query: string): GetSearchActionInterface => ({
	type: GlobalActionsType.GET_SEARCH,
	query,
})
/**
 * Установка в состояние результатов поиска
 */
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
