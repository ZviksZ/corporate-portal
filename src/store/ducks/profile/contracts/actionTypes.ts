import { Action } from 'redux'
import { ProfileDataInterface } from './state'
import { LoadingStatus } from '../../../types'
import { GlobalActionsType } from '../../global/contracts/actionTypes'

export enum ProfileActionsType {
	GET_PROFILE = 'profile/GET_PROFILE',
	SET_PROFILE = 'profile/SET_PROFILE',
	SET_LOADING_STATE = 'profile/SET_LOADING_STATE',
	UPDATE_PROFILE_PHOTO = 'profile/UPDATE_PROFILE_PHOTO',
	UPDATE_PROFILE = 'profile/UPDATE_PROFILE',
}

export interface GetProfileActionInterface extends Action<ProfileActionsType> {
	type: ProfileActionsType.GET_PROFILE
	payload: {
		id: string
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
	payload: File,
	profileId: number
}
export interface UpdateProfileActionInterface extends Action<ProfileActionsType> {
	type: ProfileActionsType.UPDATE_PROFILE
	payload: any,
	profileId: number,
	isPersonalProfile: boolean
}

export interface SetLoadingProfileActionInterface extends Action<ProfileActionsType> {
	type: ProfileActionsType.SET_LOADING_STATE
	payload: LoadingStatus
}
