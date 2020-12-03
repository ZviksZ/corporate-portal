import { Action } from 'redux'
import { ProfileData } from './state'

export enum ProfileActionsType {
	GET_PROFILE = 'profile/GET_PROFILE',
	SET_PROFILE = 'profile/SET_PROFILE',
}

export interface GetProfileActionInterface extends Action<ProfileActionsType> {
	type: ProfileActionsType.GET_PROFILE
	id?: string
}
export interface SetProfileActionInterface extends Action<ProfileActionsType> {
	type: ProfileActionsType.SET_PROFILE
	payload: ProfileData | null
}
