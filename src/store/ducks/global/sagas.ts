import { put, takeLatest, call } from 'redux-saga/effects'
import { GetNotificationDataActionInterface, GetSearchActionInterface, GlobalActionsType, LoginActionInterface } from './contracts/actionTypes'
import { setGlobalMessage, setLoading, setNotificationData, setNotifications, setSearch, setUser } from './actionCreators'
import { Cookie } from '../../../services/helpers/cookie'
import { GlobalApi } from '../../../services/api/api'
import { LoadingStatus } from '../../types'

export function* loginRequest({ payload }: LoginActionInterface) {
	try {
		yield put(setLoading(LoadingStatus.LOADING))
		const user = yield call(GlobalApi.login, payload)

		const jsonResponse = JSON.stringify(user)
		Cookie.setCookie('userData', jsonResponse, { expires: 2147483647 })

		yield put(setUser(user))
		yield put(setLoading(LoadingStatus.LOADED))
		yield put(setGlobalMessage({ text: 'Авторизация прошла успешно', type: 'success' }))
	} catch (error) {
		yield put(setLoading(LoadingStatus.ERROR))
		yield put(setGlobalMessage({ text: 'Ошибка авторизации. Попробуйте еще раз', type: 'error' }))
	}
}
export function* getUserCookieRequest() {
	try {
		yield put(setLoading(LoadingStatus.LOADING))
		const cookies = Cookie.getCookie('userData')
		const user = JSON.parse(cookies + '')

		if (user) {
			yield put(setUser(user))
		}
		yield put(setLoading(LoadingStatus.LOADED))
	} catch (error) {
		yield put(setLoading(LoadingStatus.ERROR))
	}
}
export function* logoutRequest() {
	try {
		Cookie.deleteCookie('userData')

		yield put(setUser(null))
	} catch (error) {}
}
export function* getNotificationsRequest() {
	try {
		const notifications = yield call(GlobalApi.getNotifications)

		yield put(setNotifications(notifications))
	} catch (error) {
		//yield put(setGlobalMessage({ text: 'Error. Try again', type: 'error' }))
	}
}
export function* getNotificationDataRequest({ id }: GetNotificationDataActionInterface) {
	try {
		const notification = yield call(GlobalApi.getNotificationData, { id })

		yield put(setNotificationData(notification))
	} catch (error) {
		//yield put(setGlobalMessage({ text: 'Error. Try again', type: 'error' }))
	}
}
export function* getSearchRequest({ query }: GetSearchActionInterface) {
	try {
		const results = yield call(GlobalApi.getSearch, { query })

		yield put(setSearch(results))
	} catch (error) {
		//yield put(setGlobalMessage({ text: 'Error. Try again', type: 'error' }))
	}
}

export function* globalSaga() {
	yield takeLatest(GlobalActionsType.GET_SEARCH, getSearchRequest)
	yield takeLatest(GlobalActionsType.GET_COOKIE_USER, getUserCookieRequest)
	yield takeLatest(GlobalActionsType.LOGIN, loginRequest)
	yield takeLatest(GlobalActionsType.LOGOUT, logoutRequest)
	yield takeLatest(GlobalActionsType.GET_NOTIFICATIONS, getNotificationsRequest)
	yield takeLatest(GlobalActionsType.GET_NOTIFICATION_DATA, getNotificationDataRequest)
}
