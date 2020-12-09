import { Action } from 'redux'
import { ProfileDataInterface } from './state'
import { LoadingStatus } from '../../../types'
import { GlobalActionsType } from '../../global/contracts/actionTypes'

export enum ProfileActionsType {
	GET_PROFILE = 'profile/GET_PROFILE',
	SET_PROFILE = 'profile/SET_PROFILE',
	SET_LOADING_STATE = 'profile/SET_LOADING_STATE',
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

export interface SetLoadingProfileActionInterface extends Action<ProfileActionsType> {
	type: ProfileActionsType.SET_LOADING_STATE
	payload: LoadingStatus
}
