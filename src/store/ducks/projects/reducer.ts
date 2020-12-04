import produce, { Draft } from 'immer'
import { ProfileState } from './contracts/state'
import { GlobalActions } from './actionCreators'
import { ProfileActionsType } from './contracts/actionTypes'

const initialProfileState: ProfileState = {
	profileData: null,
	isPersonalProfile: true,
}
export const profileReducer = produce((draft: Draft<ProfileState>, action: GlobalActions) => {
	switch (action.type) {
		case ProfileActionsType.SET_PROFILE:
			draft.profileData = action.payload.profileData
			draft.isPersonalProfile = action.payload.isPersonalProfile
			break
		default:
			break
	}
}, initialProfileState)
