import produce, { Draft } from 'immer'
import { ProfileState } from './contracts/state'
import { GlobalActions } from './actionCreators'
import { ProfileActionsType } from './contracts/actionTypes'

const initialProfileState: ProfileState = {
	profileData: null,
}
export const profileReducer = produce((draft: Draft<ProfileState>, action: GlobalActions) => {
	switch (action.type) {
		case ProfileActionsType.SET_PROFILE:
			draft.profileData = action.payload
			break
		default:
			break
	}
}, initialProfileState)
