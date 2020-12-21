import { ProfileDataInterface } from './contracts/state'
import {
	GetProfileActionInterface,
	ProfileActionsType,
	SetLoadingProfileActionInterface,
	SetProfileActionInterface,
	UpdateProfileActionInterface,
	UpdateProfilePhotoActionInterface,
} from './contracts/actionTypes'
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
export const updateProfilePhoto = (payload: File, profileId: number): UpdateProfilePhotoActionInterface => ({
	type: ProfileActionsType.UPDATE_PROFILE_PHOTO,
	payload,
	profileId
})
export const updateProfile = (payload: any, profileId: number, isPersonalProfile: boolean): UpdateProfileActionInterface => ({
	type: ProfileActionsType.UPDATE_PROFILE,
	payload,
	profileId,
	isPersonalProfile,
})

export type ProfileActions = UpdateProfileActionInterface | UpdateProfilePhotoActionInterface | SetLoadingProfileActionInterface | GetProfileActionInterface | SetProfileActionInterface
