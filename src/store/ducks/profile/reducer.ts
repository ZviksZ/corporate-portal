import produce, { Draft } from 'immer'
import { ProfileStateInterface } from './contracts/state'
import { GlobalActions } from './actionCreators'
import { ProfileActionsType } from './contracts/actionTypes'
import { LoadingStatus } from '../../types'

const initialProfileState: ProfileStateInterface = {
	profileData: null,
	isPersonalProfile: true,
	LoadingStatus: LoadingStatus.NEVER,
}
export const profileReducer = produce((draft: Draft<ProfileStateInterface>, action: GlobalActions) => {
	switch (action.type) {
		case ProfileActionsType.SET_PROFILE:
			draft.profileData = action.payload.profileData
			draft.isPersonalProfile = action.payload.isPersonalProfile
			draft.LoadingStatus = LoadingStatus.SUCCESS
			break
		case ProfileActionsType.SET_LOADING_STATE:
			draft.LoadingStatus = action.payload
			break
		default:
			break
	}
}, initialProfileState)
