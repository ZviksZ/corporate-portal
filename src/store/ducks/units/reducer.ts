import produce, { Draft } from 'immer'
import { UnitsState } from './contracts/state'
import { UnitsActions } from './actionCreators'
import { UnitsActionsType } from './contracts/actionTypes'

const initialUnitsState: UnitsState = {
	units: null,
	unitDetail: null,
}
export const unitsReducer = produce((draft: Draft<UnitsState>, action: UnitsActions) => {
	switch (action.type) {
		case UnitsActionsType.SET_UNITS:
			draft.units = action.payload
			break
		case UnitsActionsType.SET_UNIT_DATA:
			draft.unitDetail = action.payload
			break
		default:
			break
	}
}, initialUnitsState)
