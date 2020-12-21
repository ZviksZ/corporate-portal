import produce, { Draft } from 'immer'
import { AbsencesStateInterface } from './contracts/state'
import { AbsencesActions } from './actionCreators'
import { AbsencesActionsType } from './contracts/actionTypes'
import { LoadingStatus } from '../../types'

const initialAbsencesState: AbsencesStateInterface = {
	LoadingStatus: LoadingStatus.NEVER,
	absences: null,
	absenceDetail: null,
	allAbsences: null,
}
export const absencesReducer = produce((draft: Draft<AbsencesStateInterface>, action: AbsencesActions) => {
	switch (action.type) {
		case AbsencesActionsType.SET_LOADING_STATE:
			draft.LoadingStatus = action.payload
			break
		case AbsencesActionsType.SET_ABSENCES:
			draft.absences = action.payload
			break
		case AbsencesActionsType.SET_ABSENCE_DATA:
			draft.absenceDetail = action.payload
			break
		case AbsencesActionsType.SET_ALL_ABSENCES:
			draft.allAbsences = action.payload
			break
		default:
			break
	}
}, initialAbsencesState)
