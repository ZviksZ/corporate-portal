import { put, takeLatest, call } from 'redux-saga/effects'
import { GetSearchActionInterface, GlobalActionsType, LoginActionInterface } from './contracts/actionTypes'
import { setGlobalMessage, setGlobalLoading, setSearch, setUser, setUserProfile } from './actionCreators'
import { Cookie } from '../../../services/helpers/cookie'
import { ACCESS_TKN, GlobalApi, ProfileApi } from '../../../services/api/api'
import { LoadingStatus } from '../../types'

export function* loginRequest({ payload }: LoginActionInterface) {
	try {
		yield put(setGlobalLoading(LoadingStatus.LOADING))
		const user = yield call(GlobalApi.login, { login: payload.login, pass: payload.password })

		if (user && user.token) {
			const jsonResponseRefreshToken = JSON.stringify({
				refreshToken: user.refreshToken,
				id: user.id,
				role: user.role[0],
			})
			Cookie.setCookie('refreshUserData', jsonResponseRefreshToken, { expires: 2147483647 })

			ACCESS_TKN.setToken(user.token)

			yield put(setUser({ id: user.id, role: user.role[0] }))
			yield put(setGlobalLoading(LoadingStatus.LOADED))
			yield put(setGlobalMessage({ text: 'Авторизация прошла успешно', type: 'success' }))
		} else {
			yield put(setGlobalLoading(LoadingStatus.ERROR))
			yield put(setGlobalMessage({ text: 'Ошибка авторизации. Попробуйте еще раз', type: 'error' }))
		}
	} catch (error) {
		yield put(setGlobalLoading(LoadingStatus.ERROR))
		yield put(setGlobalMessage({ text: 'Ошибка авторизации. Попробуйте еще раз', type: 'error' }))
	}
}
export function* getUserCookieRequest() {
	try {
		yield put(setGlobalLoading(LoadingStatus.LOADING))
		const refresh_data = Cookie.getCookie('refreshUserData')
		const refreshDataParsed = refresh_data && JSON.parse(refresh_data + '')

		if (refreshDataParsed) {
			const tokens = yield call(GlobalApi.refreshToken, { refreshToken: refreshDataParsed.refreshToken })

			ACCESS_TKN.setToken(tokens.token)
			const jsonResponseRefreshToken = JSON.stringify({
				refreshToken: tokens.refreshToken,
				id: refreshDataParsed.id,
				role: refreshDataParsed.role,
			})
			Cookie.setCookie('refreshUserData', jsonResponseRefreshToken, { expires: 2147483647 })
			if (tokens.token) {
				const profile = yield call(ProfileApi.getProfile, { id: refreshDataParsed.id })
				yield put(setUserProfile(profile))
			}
			yield put(setUser({ id: refreshDataParsed.id, role: refreshDataParsed.role }))
		}
		yield put(setGlobalLoading(LoadingStatus.LOADED))
	} catch (error) {
		yield put(setGlobalLoading(LoadingStatus.ERROR))
	}
}
export function* logoutRequest() {
	try {
		Cookie.deleteCookie('refreshUserData')
		ACCESS_TKN.setToken(null)
		yield put(setUser(null))
		yield put(setUserProfile(null))
	} catch (error) {}
}
export function* getSearchRequest({ query }: GetSearchActionInterface) {
	try {
		const results = yield call(GlobalApi.getSearch, { query })

		yield put(setSearch(results))
	} catch (error) {}
}

export function* globalSaga() {
	yield takeLatest(GlobalActionsType.GET_SEARCH, getSearchRequest)
	yield takeLatest(GlobalActionsType.GET_COOKIE_USER, getUserCookieRequest)
	yield takeLatest(GlobalActionsType.LOGIN, loginRequest)
	yield takeLatest(GlobalActionsType.LOGOUT, logoutRequest)
}
