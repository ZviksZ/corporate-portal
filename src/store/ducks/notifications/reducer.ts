import produce, { Draft } from 'immer'
import { NotificationsStateInterface } from './contracts/state'
import { NotificationsActions } from './actionCreators'
import { NotificationsActionsType } from './contracts/actionTypes'
import { LoadingStatus } from '../../types'

const initialNotificationsState: NotificationsStateInterface = {
	LoadingStatus: LoadingStatus.NEVER,
	notifications: null,
	notificationDetail: null,
	allNotifications: null,
}
export const notificationsReducer = produce((draft: Draft<NotificationsStateInterface>, action: NotificationsActions) => {
	switch (action.type) {
		case NotificationsActionsType.SET_LOADING_STATE:
			draft.LoadingStatus = action.payload
			break
		case NotificationsActionsType.SET_NOTIFICATIONS:
			draft.notifications = action.payload
			break
		case NotificationsActionsType.SET_NOTIFICATION_DATA:
			draft.notificationDetail = action.payload
			break
		case NotificationsActionsType.SET_ALL_NOTIFICATIONS:
			draft.allNotifications = action.payload
			break
		default:
			break
	}
}, initialNotificationsState)
