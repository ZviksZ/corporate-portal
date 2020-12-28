import { Action } from 'redux'
import { ProfileDataInterface } from './state'
import { LoadingStatus } from '../../../types'

export enum ProfileActionsType {
	GET_PROFILE = 'profile/GET_PROFILE',
	SET_PROFILE = 'profile/SET_PROFILE',
	SET_LOADING_STATE = 'profile/SET_LOADING_STATE',
	UPDATE_PROFILE_PHOTO = 'profile/UPDATE_PROFILE_PHOTO',
	UPDATE_PROFILE = 'profile/UPDATE_PROFILE',
	UPDATE_PROFILE_DAYOFF = 'profile/UPDATE_PROFILE_DAYOFF',
}

export interface GetProfileActionInterface extends Action<ProfileActionsType> {
	type: ProfileActionsType.GET_PROFILE
	payload: {
		id: string | number
		isPersonalProfile: boolean
	}
}
export interface SetProfileActionInterface extends Action<ProfileActionsType> {
	type: ProfileActionsType.SET_PROFILE
	payload: {
		profileData: ProfileDataInterface | null
		isPersonalProfile: boolean
	}
}
export interface UpdateProfilePhotoActionInterface extends Action<ProfileActionsType> {
	type: ProfileActionsType.UPDATE_PROFILE_PHOTO
	payload: File | string | null
	profileId: number
	isCreate: boolean
}
export interface UpdateProfileActionInterface extends Action<ProfileActionsType> {
	type: ProfileActionsType.UPDATE_PROFILE
	payload: any
	profileId: number
	isPersonalProfile: boolean
}
export interface UpdateProfileDayoffActionInterface extends Action<ProfileActionsType> {
	type: ProfileActionsType.UPDATE_PROFILE_DAYOFF
	user_id: number | string
	value: number | string
	isNewDayoff: boolean
}

export interface SetLoadingProfileActionInterface extends Action<ProfileActionsType> {
	type: ProfileActionsType.SET_LOADING_STATE
	payload: LoadingStatus
}
