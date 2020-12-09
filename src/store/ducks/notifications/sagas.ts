import { put, takeLatest, call } from 'redux-saga/effects'
import { GetNotificationDataActionInterface, NotificationsActionsType } from './contracts/actionTypes'
import { setAllNotifications, setNotificationData, setNotifications, setNotificationsLoading } from './actionCreators'
import { NotificationsApi } from '../../../services/api/api'
import { LoadingStatus } from '../../types'
import { setGlobalMessage } from '../global/actionCreators'

export function* getNotificationsRequest() {
	try {
		const notifications = yield call(NotificationsApi.getNotifications)

		yield put(setNotifications(notifications))
	} catch (error) {
		yield put(setGlobalMessage({ text: 'Ошибка при загрузке последних уведомлений', type: 'error' }))
	}
}
export function* getNotificationDataRequest({ id }: GetNotificationDataActionInterface) {
	try {
		const notification = yield call(NotificationsApi.getNotificationData, { id })

		yield put(setNotificationData(notification))
	} catch (error) {
		yield put(setGlobalMessage({ text: 'Ошибка при загрузке данных уведомления', type: 'error' }))
	}
}
export function* getAllNotificationsRequest() {
	try {
		yield put(setNotificationsLoading(LoadingStatus.LOADING))
		const allNotifications = yield call(NotificationsApi.getAllNotifications)

		yield put(setAllNotifications(allNotifications))
		yield put(setNotificationsLoading(LoadingStatus.LOADED))
	} catch (error) {
		yield put(setNotificationsLoading(LoadingStatus.ERROR))
		yield put(setGlobalMessage({ text: 'Ошибка при загрузке всех уведомлений', type: 'error' }))
	}
}
export function* notificationsSaga() {
	yield takeLatest(NotificationsActionsType.GET_NOTIFICATIONS, getNotificationsRequest)
	yield takeLatest(NotificationsActionsType.GET_NOTIFICATION_DATA, getNotificationDataRequest)
	yield takeLatest(NotificationsActionsType.GET_ALL_NOTIFICATIONS, getAllNotificationsRequest)
}
