import { AllNotificationDataInterface, NotificationDataInterface, NotificationDetailInterface } from './contracts/state'
import {
	GetAllNotificationsActionInterface,
	GetNotificationDataActionInterface,
	GetNotificationsActionInterface,
	NotificationsActionsType,
	SetAllNotificationsActionInterface,
	SetLoadingActionInterface,
	SetNotificationDataActionInterface,
	SetNotificationsActionInterface,
} from './contracts/actionTypes'
import { LoadingStatus } from '../../types'

export const setNotificationsLoading = (payload: LoadingStatus): SetLoadingActionInterface => ({
	type: NotificationsActionsType.SET_LOADING_STATE,
	payload,
})
export const getNotifications = (): GetNotificationsActionInterface => ({
	type: NotificationsActionsType.GET_NOTIFICATIONS,
})
export const setNotifications = (payload: NotificationDataInterface | null): SetNotificationsActionInterface => ({
	type: NotificationsActionsType.SET_NOTIFICATIONS,
	payload,
})
export const getAllNotifications = (): GetAllNotificationsActionInterface => ({
	type: NotificationsActionsType.GET_ALL_NOTIFICATIONS,
})
export const setAllNotifications = (payload: AllNotificationDataInterface | null): SetAllNotificationsActionInterface => ({
	type: NotificationsActionsType.SET_ALL_NOTIFICATIONS,
	payload,
})
export const getNotificationData = (id: string): GetNotificationDataActionInterface => ({
	type: NotificationsActionsType.GET_NOTIFICATION_DATA,
	id,
})
export const setNotificationData = (payload: NotificationDetailInterface | null): SetNotificationDataActionInterface => ({
	type: NotificationsActionsType.SET_NOTIFICATION_DATA,
	payload,
})

export type NotificationsActions =
	| SetAllNotificationsActionInterface
	| GetAllNotificationsActionInterface
	| GetNotificationDataActionInterface
	| SetNotificationDataActionInterface
	| GetNotificationsActionInterface
	| SetNotificationsActionInterface
	| SetLoadingActionInterface
