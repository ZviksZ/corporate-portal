import { ProfileDataInterface } from './contracts/state'
import { GetProfileActionInterface, ProfileActionsType, SetLoadingProfileActionInterface, SetProfileActionInterface } from './contracts/actionTypes'
import { LoadingStatus } from '../../types'
import { GlobalActionsType, SetLoadingActionInterface } from '../global/contracts/actionTypes'

export const getProfile = (id: string, isPersonalProfile: boolean): GetProfileActionInterface => ({
	type: ProfileActionsType.GET_PROFILE,
	payload: {
		id,
		isPersonalProfile,
	},
})
export const setProfile = (profileData: ProfileDataInterface | null, isPersonalProfile: boolean): SetProfileActionInterface => ({
	type: ProfileActionsType.SET_PROFILE,
	payload: {
		profileData,
		isPersonalProfile,
	},
})

export const setLoadingProfile = (payload: LoadingStatus): SetLoadingProfileActionInterface => ({
	type: ProfileActionsType.SET_LOADING_STATE,
	payload,
})

export type GlobalActions = SetLoadingProfileActionInterface | GetProfileActionInterface | SetProfileActionInterface
