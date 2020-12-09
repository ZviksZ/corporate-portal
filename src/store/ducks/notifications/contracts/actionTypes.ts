import { Action } from 'redux'
import { AllNotificationDataInterface, NotificationDataInterface, NotificationDetailInterface } from './state'
import { LoadingStatus } from '../../../types'

export enum NotificationsActionsType {
	GET_NOTIFICATIONS = 'notifications/GET_NOTIFICATIONS',
	SET_NOTIFICATIONS = 'notifications/SET_NOTIFICATIONS',
	GET_NOTIFICATION_DATA = 'notifications/GET_NOTIFICATION_DATA',
	SET_NOTIFICATION_DATA = 'notifications/SET_NOTIFICATION_DATA',
	GET_ALL_NOTIFICATIONS = 'notifications/GET_ALL_NOTIFICATIONS',
	SET_ALL_NOTIFICATIONS = 'notifications/SET_ALL_NOTIFICATIONS',
	SET_LOADING_STATE = 'notifications/SET_LOADING_STATE',
}

export interface GetNotificationsActionInterface extends Action<NotificationsActionsType> {
	type: NotificationsActionsType.GET_NOTIFICATIONS
}
export interface SetNotificationsActionInterface extends Action<NotificationsActionsType> {
	type: NotificationsActionsType.SET_NOTIFICATIONS
	payload: NotificationDataInterface | null
}
export interface GetAllNotificationsActionInterface extends Action<NotificationsActionsType> {
	type: NotificationsActionsType.GET_ALL_NOTIFICATIONS
}
export interface SetAllNotificationsActionInterface extends Action<NotificationsActionsType> {
	type: NotificationsActionsType.SET_ALL_NOTIFICATIONS
	payload: AllNotificationDataInterface | null
}
export interface GetNotificationDataActionInterface extends Action<NotificationsActionsType> {
	type: NotificationsActionsType.GET_NOTIFICATION_DATA
	id: string
}
export interface SetNotificationDataActionInterface extends Action<NotificationsActionsType> {
	type: NotificationsActionsType.SET_NOTIFICATION_DATA
	payload: NotificationDetailInterface | null
}
export interface SetLoadingActionInterface extends Action<NotificationsActionsType> {
	type: NotificationsActionsType.SET_LOADING_STATE
	payload: LoadingStatus
}
