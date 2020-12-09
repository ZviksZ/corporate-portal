import produce, { Draft } from 'immer'
import { UnitsState } from './contracts/state'
import { UnitsActions } from './actionCreators'
import { UnitsActionsType } from './contracts/actionTypes'
import { LoadingStatus } from '../../types'

const initialUnitsState: UnitsState = {
	units: null,
	unitDetail: null,
	LoadingStatus: LoadingStatus.NEVER,
}
export const unitsReducer = produce((draft: Draft<UnitsState>, action: UnitsActions) => {
	switch (action.type) {
		case UnitsActionsType.SET_UNITS:
			draft.units = action.payload
			draft.LoadingStatus = LoadingStatus.SUCCESS
			break
		case UnitsActionsType.SET_UNIT_DATA:
			draft.unitDetail = action.payload
			draft.LoadingStatus = LoadingStatus.SUCCESS
			break
		case UnitsActionsType.SET_LOADING_STATE:
			draft.LoadingStatus = action.payload
			break
		default:
			break
	}
}, initialUnitsState)
