import { put, takeLatest, call } from 'redux-saga/effects'
import { GetAbsenceDataActionInterface, AbsencesActionsType, CreateAbsenceActionInterface } from './contracts/actionTypes'
import { setAllAbsences, setAbsenceData, setAbsences, setAbsencesLoading } from './actionCreators'
import { AbsencesApi } from '../../../services/api/api'
import { LoadingStatus } from '../../types'
import { setGlobalMessage } from '../global/actionCreators'

export function* getAbsencesRequest() {
	try {
		const absences = yield call(AbsencesApi.getAbsences)

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
export function* getAllAbsencesRequest() {
	try {
		yield put(setAbsencesLoading(LoadingStatus.LOADING))
		const allAbsences = yield call(AbsencesApi.getAllAbsences)

		yield put(setAllAbsences(allAbsences))
		yield put(setAbsencesLoading(LoadingStatus.LOADED))
	} catch (error) {
		yield put(setAbsencesLoading(LoadingStatus.ERROR))
		yield put(setGlobalMessage({ text: 'Ошибка при загрузке всех уведомлений', type: 'error' }))
	}
}

export function* createAbsenceRequest({ payload }: CreateAbsenceActionInterface) {
	try {
		yield call(AbsencesApi.createAbsence, payload)

		yield put(setGlobalMessage({ text: 'Заявление успешно отправлено', type: 'success' }))
	} catch (error) {
		yield put(setGlobalMessage({ text: 'Ошибка при отправке заявления. Попробуйте еще раз', type: 'error' }))
	}
}


export function* absencesSaga() {
	yield takeLatest(AbsencesActionsType.GET_ABSENCES, getAbsencesRequest)
	yield takeLatest(AbsencesActionsType.GET_ABSENCE_DATA, getAbsenceDataRequest)
	yield takeLatest(AbsencesActionsType.GET_ALL_ABSENCES, getAllAbsencesRequest)
	yield takeLatest(AbsencesActionsType.CREATE_ABSENCE, createAbsenceRequest)
}
