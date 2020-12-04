import { put, takeLatest, call } from 'redux-saga/effects'
import { GlobalActionsType, LoginActionInterface } from './contracts/actionTypes'
import { setGlobalMessage, setLoading, setUser } from './actionCreators'
import { Cookie } from '../../../services/helpers/cookie'
import { AuthApi } from '../../../services/api/api'

export function* loginRequest({ payload }: LoginActionInterface) {
	try {
		yield put(setLoading(true))
		const user = yield call(AuthApi.login, payload)

		const jsonResponse = JSON.stringify(user)
		Cookie.setCookie('userData', jsonResponse, { expires: 2147483647 })

		yield put(setUser(user))
		yield put(setLoading(false))
		yield put(setGlobalMessage({ text: 'Login is successful', type: 'success' }))
	} catch (error) {
		yield put(setLoading(false))
		yield put(setGlobalMessage({ text: 'Login error. Try again', type: 'error' }))
	}
}
export function* getUserCookieRequest() {
	try {
		const cookies = Cookie.getCookie('userData')
		const user = JSON.parse(cookies + '')

		if (user) {
			yield put(setUser(user))
		}
	} catch (error) {}
}
export function* logoutRequest() {
	try {
		Cookie.deleteCookie('userData')

		yield put(setUser(null))
	} catch (error) {}
}

export function* globalSaga() {
	yield takeLatest(GlobalActionsType.GET_COOKIE_USER, getUserCookieRequest)
	yield takeLatest(GlobalActionsType.LOGIN, loginRequest)
	yield takeLatest(GlobalActionsType.LOGOUT, logoutRequest)
}
