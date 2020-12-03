import { put, takeLatest, call } from 'redux-saga/effects'
import { GetProfileActionInterface, ProfileActionsType } from './contracts/actionTypes'
import { ProfileApi } from '../../../services/api/api'
import { setProfile } from './actionCreators'
import { setGlobalMessage, setLoading } from '../global/actionCreators'

export function* getProfileRequest({ id }: GetProfileActionInterface) {
	try {
		const profile = yield call(ProfileApi.getProfile, id)

		yield put(setProfile(profile))
	} catch (error) {
		yield put(setGlobalMessage({ text: 'Ошибка при загрузке. Попробуйте снова', type: 'error' }))
	}
}

export function* profileSaga() {
	yield takeLatest(ProfileActionsType.GET_PROFILE, getProfileRequest)
}
