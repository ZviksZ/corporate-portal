import { put, takeLatest, call } from 'redux-saga/effects'
import {
	GetAbsenceDataActionInterface,
	AbsencesActionsType,
	CreateAbsenceActionInterface,
	GetAbsencesActionInterface,
	ChangeAbsenceStatusActionInterface,
	GetAllAbsencesActionInterface,
} from './contracts/actionTypes'
import { setAllAbsences, setAbsenceData, setAbsences, setAbsencesLoading, getAbsences } from './actionCreators'
import { AbsencesApi, ProfileApi } from '../../../services/api/api'
import { LoadingStatus } from '../../types'
import { setGlobalMessage } from '../global/actionCreators'
import { store } from '../../store'
import { setProfile } from '../profile/actionCreators'

export function* getAbsencesRequest({ userId }: GetAbsencesActionInterface) {
	try {
		const absences = yield call(AbsencesApi.getAbsences, { id: userId })

		yield put(setAbsences(absences))
	} catch (error) {
		yield put(setGlobalMessage({ text: 'Ошибка при загрузке последних уведомлений', type: 'error' }))
	}
}
export function* getAbsenceDataRequest({ id }: GetAbsenceDataActionInterface) {
	try {
		const absence = yield call(AbsencesApi.getAbsenceData, { id })

		yield put(setAbsenceData(absence))
	} catch (error) {
		yield put(setGlobalMessage({ text: 'Ошибка при загрузке данных уведомления', type: 'error' }))
	}
}
export function* getAllAbsencesRequest({ userId }: GetAllAbsencesActionInterface) {
	try {
		yield put(setAbsencesLoading(LoadingStatus.LOADING))
		const allAbsences = yield call(AbsencesApi.getAllAbsences, { id: userId })

		yield put(setAllAbsences(allAbsences || []))
		yield put(setAbsencesLoading(LoadingStatus.LOADED))
	} catch (error) {
		yield put(setAbsencesLoading(LoadingStatus.ERROR))
		yield put(setGlobalMessage({ text: 'Ошибка при загрузке всех уведомлений', type: 'error' }))
	}
}

export function* createAbsenceRequest({ payload }: CreateAbsenceActionInterface) {
	const storeData = store.getState()
	const userId = storeData?.profile?.profileData?.id
	const isMyProfile = storeData?.profile?.isPersonalProfile
	try {
		yield call(AbsencesApi.createAbsence, payload)
		if (storeData?.profile?.profileData?.id) {
			const profile = yield call(ProfileApi.getProfile, { id: storeData.profile.profileData.id })
			yield put(setProfile(profile, isMyProfile))
		}
		yield put(setGlobalMessage({ text: 'Заявление успешно отправлено', type: 'success' }))
	} catch (error) {
		yield put(setGlobalMessage({ text: 'Ошибка при отправке заявления. Попробуйте еще раз', type: 'error' }))
	}
}

export function* changeAbsenceStatusRequest({ id, isApprove, userId }: ChangeAbsenceStatusActionInterface) {
	try {
		const status = isApprove ? 'approved' : 'declined'
		yield call(AbsencesApi.changeAbsenceStatus, { id, status })
		yield put(getAbsences(userId))
	} catch (error) {
		yield put(setGlobalMessage({ text: 'Ошибка при изменении статуса заявления', type: 'error' }))
	}
}

export function* absencesSaga() {
	yield takeLatest(AbsencesActionsType.GET_ABSENCES, getAbsencesRequest)
	yield takeLatest(AbsencesActionsType.GET_ABSENCE_DATA, getAbsenceDataRequest)
	yield takeLatest(AbsencesActionsType.GET_ALL_ABSENCES, getAllAbsencesRequest)
	yield takeLatest(AbsencesActionsType.CREATE_ABSENCE, createAbsenceRequest)
	yield takeLatest(AbsencesActionsType.CHANGE_ABSENCE_STATUS, changeAbsenceStatusRequest)
}
