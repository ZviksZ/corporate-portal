import { ProfileData } from './contracts/state'
import { GetProfileActionInterface, ProfileActionsType, SetProfileActionInterface } from './contracts/actionTypes'

export const getProfile = (id: string, isPersonalProfile: boolean): GetProfileActionInterface => ({
	type: ProfileActionsType.GET_PROFILE,
	payload: {
		id,
		isPersonalProfile,
	},
})
export const setProfile = (profileData: ProfileData | null, isPersonalProfile: boolean): SetProfileActionInterface => ({
	type: ProfileActionsType.SET_PROFILE,
	payload: {
		profileData,
		isPersonalProfile,
	},
})

export type GlobalActions = GetProfileActionInterface | SetProfileActionInterface
