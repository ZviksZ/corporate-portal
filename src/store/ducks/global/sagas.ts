import { put, takeLatest, call } from 'redux-saga/effects'
import { GetNotificationDataActionInterface, GlobalActionsType, LoginActionInterface } from './contracts/actionTypes'
import { setGlobalMessage, setLoading, setNotificationData, setNotifications, setUser } from './actionCreators'
import { Cookie } from '../../../services/helpers/cookie'
import { AuthApi, NotificationsApi, TeamsApi } from '../../../services/api/api'

/**
 * Авторизация
 */
export function* loginRequest({ payload }: LoginActionInterface) {
	try {
		yield put(setLoading(true))
		const user = yield call(AuthApi.login, payload)

		const jsonResponse = JSON.stringify(user)
		Cookie.setCookie('userData', jsonResponse, { expires: 2147483647 })

		yield put(setUser(user))
		yield put(setLoading(false))
		yield put(setGlobalMessage({ text: 'Авторизация прошла успешно', type: 'success' }))
	} catch (error) {
		yield put(setLoading(false))
		yield put(setGlobalMessage({ text: 'Ошибка авторизации. Попробуйте еще раз', type: 'error' }))
	}
}
/**
 * Поиск данных пользователя и токена в куках
 */
export function* getUserCookieRequest() {
	try {
		const cookies = Cookie.getCookie('userData')
		const user = JSON.parse(cookies + '')

		if (user) {
			yield put(setUser(user))
		}
	} catch (error) {}
}
/**
 * Выход из приложения
 */
export function* logoutRequest() {
	try {
		Cookie.deleteCookie('userData')

		yield put(setUser(null))
	} catch (error) {}
}

/**
 * Список уведомлений
 */
export function* getNotificationsRequest() {
	try {
		const notifications = yield call(NotificationsApi.getNotifications)

		yield put(setNotifications(notifications))
	} catch (error) {
		//yield put(setGlobalMessage({ text: 'Error. Try again', type: 'error' }))
	}
}

/**
 * Данные уведомления
 */
export function* getNotificationDataRequest({ id }: GetNotificationDataActionInterface) {
	try {
		const notification = yield call(NotificationsApi.getNotificationData, id)

		yield put(setNotificationData(notification))
	} catch (error) {
		//yield put(setGlobalMessage({ text: 'Error. Try again', type: 'error' }))
	}
}



export function* globalSaga() {
	yield takeLatest(GlobalActionsType.GET_COOKIE_USER, getUserCookieRequest)
	yield takeLatest(GlobalActionsType.LOGIN, loginRequest)
	yield takeLatest(GlobalActionsType.LOGOUT, logoutRequest)
	yield takeLatest(GlobalActionsType.GET_NOTIFICATIONS, getNotificationsRequest)
	yield takeLatest(GlobalActionsType.GET_NOTIFICATION_DATA, getNotificationDataRequest)
}
