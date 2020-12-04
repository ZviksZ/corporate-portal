import { put, takeLatest, call } from 'redux-saga/effects'
import { UnitsActionsType } from './contracts/actionTypes'
import { UnitsApi } from '../../../services/api/api'
import { setGlobalMessage } from '../global/actionCreators'
import { setUnits } from './actionCreators'

export function* getUnitsRequest() {
	try {
		const units = yield call(UnitsApi.getUnits)

		yield put(setUnits(units))
	} catch (error) {
		yield put(setGlobalMessage({ text: 'Ошибка при загрузке. Попробуйте снова', type: 'error' }))
	}
}

export function* unitsSaga() {
	yield takeLatest(UnitsActionsType.GET_UNITS, getUnitsRequest)
}
