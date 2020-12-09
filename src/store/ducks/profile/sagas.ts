import { call, put, takeLatest } from 'redux-saga/effects'
import { GetProfileActionInterface, ProfileActionsType } from './contracts/actionTypes'
import { ProfileApi } from '../../../services/api/api'
import { setLoadingProfile, setProfile } from './actionCreators'
import { setGlobalMessage } from '../global/actionCreators'
import { LoadingStatus } from '../../types'

export function* getProfileRequest({ payload }: GetProfileActionInterface) {
	try {
		yield put(setLoadingProfile(LoadingStatus.LOADING))
		const profile = yield call(ProfileApi.getProfile, { id: payload.id })

		yield put(setProfile(profile, payload.isPersonalProfile))
		yield put(setLoadingProfile(LoadingStatus.LOADED))
	} catch (error) {
		yield put(setLoadingProfile(LoadingStatus.ERROR))
		yield put(setGlobalMessage({ text: 'Ошибка при загрузке. Попробуйте снова', type: 'error' }))
	}
}

export function* profileSaga() {
	yield takeLatest(ProfileActionsType.GET_PROFILE, getProfileRequest)
}
