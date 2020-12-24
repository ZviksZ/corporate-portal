import { call, put, takeLatest } from 'redux-saga/effects'
import { GetProfileActionInterface, ProfileActionsType, UpdateProfileActionInterface, UpdateProfileDayoffActionInterface, UpdateProfilePhotoActionInterface } from './contracts/actionTypes'
import { ProfileApi } from '../../../services/api/api'
import { setLoadingProfile, setProfile } from './actionCreators'
import { setGlobalMessage } from '../global/actionCreators'
import { LoadingStatus } from '../../types'
import { store } from '../../store'

export function* getProfileRequest({ payload }: GetProfileActionInterface) {
	try {
		yield put(setLoadingProfile(LoadingStatus.LOADING))
		const profile = yield call(ProfileApi.getProfile, { id: payload.id })

		if (profile && profile.id) {
			yield put(setProfile(profile, payload.isPersonalProfile))
			yield put(setLoadingProfile(LoadingStatus.LOADED))
		} else {
			yield put(setLoadingProfile(LoadingStatus.ERROR))
			yield put(setGlobalMessage({ text: 'Ошибка при загрузке. Попробуйте снова', type: 'error' }))
		}
	} catch (error) {
		yield put(setLoadingProfile(LoadingStatus.ERROR))
		yield put(setGlobalMessage({ text: 'Ошибка при загрузке. Попробуйте снова', type: 'error' }))
	}
}
export function* updateProfilePhotoRequest({ payload, profileId, isCreate }: UpdateProfilePhotoActionInterface) {
	try {
		const formData = new FormData()
		const storeData = store.getState()
		if (payload) {
			formData.append('file', payload)
			const uploadImage = yield call(ProfileApi.uploadPhoto, formData)
			if (uploadImage) {
				if (isCreate) {
					yield call(ProfileApi.createUserPhoto, { path: uploadImage, userId: profileId, default: true })
				} else {
					yield call(ProfileApi.updateUserPhoto, { path: uploadImage, userId: profileId })
				}
			}
		} else {
			yield call(ProfileApi.updateUserPhoto, { path: '', userId: profileId })
		}
		const profile = yield call(ProfileApi.getProfile, { id: profileId })

		if (profile && profile.id) {
			yield put(setProfile(profile, storeData.profile.isPersonalProfile))
			yield put(setGlobalMessage({ text: 'Фотография профиля успешно обновлена', type: 'success' }))
		}
	} catch (error) {
		yield put(setLoadingProfile(LoadingStatus.ERROR))
		yield put(setGlobalMessage({ text: 'Ошибка при загрузке фотографии. Попробуйте снова', type: 'error' }))
	}
}
export function* updateProfileRequest({ payload, profileId, isPersonalProfile }: UpdateProfileActionInterface) {
	try {
		yield call(ProfileApi.updateProfile, payload, profileId)
		const profile = yield call(ProfileApi.getProfile, { id: profileId })

		if (profile && profile.id) {
			yield put(setProfile(profile, isPersonalProfile))
			yield put(setGlobalMessage({ text: 'Профиль успешно обновлен', type: 'success' }))
		}
	} catch (error) {
		yield put(setLoadingProfile(LoadingStatus.ERROR))
		yield put(setGlobalMessage({ text: 'Ошибка при обновлении профиля. Попробуйте снова', type: 'error' }))
	}
}
export function* updateProfileDayoffRequest({ user_id, value }: UpdateProfileDayoffActionInterface) {
	try {
		const storeData = store.getState()
		yield call(ProfileApi.updateDayoff, { user_id, year: new Date().getFullYear(), update: { value } })
		const profile = yield call(ProfileApi.getProfile, { id: user_id })

		if (profile && profile.id) {
			yield put(setProfile(profile, storeData.profile.isPersonalProfile))
			yield put(setGlobalMessage({ text: 'Количество корпоративных дней изменено', type: 'success' }))
		}
	} catch (error) {
		yield put(setLoadingProfile(LoadingStatus.ERROR))
		yield put(setGlobalMessage({ text: 'Ошибка при изменении количества корпоративных дней. Попробуйте снова', type: 'error' }))
	}
}

export function* profileSaga() {
	yield takeLatest(ProfileActionsType.GET_PROFILE, getProfileRequest)
	yield takeLatest(ProfileActionsType.UPDATE_PROFILE_PHOTO, updateProfilePhotoRequest)
	yield takeLatest(ProfileActionsType.UPDATE_PROFILE, updateProfileRequest)
	yield takeLatest(ProfileActionsType.UPDATE_PROFILE_DAYOFF, updateProfileDayoffRequest)
}
