import { ProfileData } from './contracts/state'
import { GetProfileActionInterface, ProfileActionsType, SetProfileActionInterface } from './contracts/actionTypes'

export const getProfile = (id: string): GetProfileActionInterface => ({
	type: ProfileActionsType.GET_PROFILE,
	id,
})
export const setProfile = (payload: ProfileData | null): SetProfileActionInterface => ({
	type: ProfileActionsType.SET_PROFILE,
	payload,
})

export type GlobalActions = GetProfileActionInterface | SetProfileActionInterface
