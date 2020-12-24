import { ProfileDataInterface } from './contracts/state'
import {
	GetProfileActionInterface,
	ProfileActionsType,
	SetLoadingProfileActionInterface,
	SetProfileActionInterface,
	UpdateProfileActionInterface, UpdateProfileDayoffActionInterface,
	UpdateProfilePhotoActionInterface,
} from './contracts/actionTypes'
import { LoadingStatus } from '../../types'

export const getProfile = (id: string | number, isPersonalProfile: boolean): GetProfileActionInterface => ({
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
export const updateProfilePhoto = (payload: File | string | null, profileId: number, isCreate: boolean): UpdateProfilePhotoActionInterface => ({
	type: ProfileActionsType.UPDATE_PROFILE_PHOTO,
	payload,
	profileId,
	isCreate
})
export const updateProfileDayoff = (user_id: number | string, value: number | string): UpdateProfileDayoffActionInterface => ({
	type: ProfileActionsType.UPDATE_PROFILE_DAYOFF,
	user_id,
	value
})
export const updateProfile = (payload: any, profileId: number, isPersonalProfile: boolean): UpdateProfileActionInterface => ({
	type: ProfileActionsType.UPDATE_PROFILE,
	payload,
	profileId,
	isPersonalProfile,
})

export type ProfileActions = UpdateProfileDayoffActionInterface | UpdateProfileActionInterface | UpdateProfilePhotoActionInterface | SetLoadingProfileActionInterface | GetProfileActionInterface | SetProfileActionInterface
