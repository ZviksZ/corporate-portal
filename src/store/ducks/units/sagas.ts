import { put, takeLatest, call } from 'redux-saga/effects'
import { GetUnitDataActionInterface, UnitsActionsType } from './contracts/actionTypes'
import { UnitsApi } from '../../../services/api/api'
import { setGlobalMessage } from '../global/actionCreators'
import { setLoadingUnits, setUnitData, setUnits } from './actionCreators'
import { LoadingStatus } from '../../types'

export function* getUnitsRequest() {
	try {
		yield put(setLoadingUnits(LoadingStatus.LOADING))
		const data = yield call(UnitsApi.getUnits)
		const units = data.map((unit:any) => unit.data)

		yield put(setUnits(units))
		yield put(setLoadingUnits(LoadingStatus.LOADED))
	} catch (error) {
		yield put(setLoadingUnits(LoadingStatus.ERROR))
		yield put(setGlobalMessage({ text: 'Ошибка при загрузке. Попробуйте снова', type: 'error' }))
	}
}
export function* getUnitDataRequest({ id }: GetUnitDataActionInterface) {
	try {
		yield put(setLoadingUnits(LoadingStatus.LOADING))
		const unit = yield call(UnitsApi.getUnitData, { id })

		yield put(setUnitData(unit))
		yield put(setLoadingUnits(LoadingStatus.LOADED))
	} catch (error) {
		yield put(setLoadingUnits(LoadingStatus.ERROR))
		yield put(setGlobalMessage({ text: 'Ошибка при загрузке. Попробуйте снова', type: 'error' }))
	}
}

export function* unitsSaga() {
	yield takeLatest(UnitsActionsType.GET_UNIT_DATA, getUnitDataRequest)
	yield takeLatest(UnitsActionsType.GET_UNITS, getUnitsRequest)
}
