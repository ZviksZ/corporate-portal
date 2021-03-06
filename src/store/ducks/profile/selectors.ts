import { RootStateInterface } from '../../store'
import { createSelector } from 'reselect'

import { ProfileDataInterface, ProfileStateInterface } from './contracts/state'
import { LoadingStatus } from '../../types'

export const selectProfile = (state: RootStateInterface): ProfileStateInterface => state.profile
export const selectProfileData = (state: RootStateInterface): ProfileDataInterface | null => state.profile.profileData
export const reselectProfileData = createSelector(selectProfileData, (data): ProfileDataInterface | null => data)
export const selectProfileLoadingStatus = (state: RootStateInterface): LoadingStatus => selectProfile(state).LoadingStatus

export const selectIsProfileLoading = (state: RootStateInterface): boolean => selectProfileLoadingStatus(state) === LoadingStatus.LOADING
export const selectIsProfileLoaded = (state: RootStateInterface): boolean => selectProfileLoadingStatus(state) === LoadingStatus.LOADED
export const selectIsProfileLoadingError = (state: RootStateInterface): boolean => selectProfileLoadingStatus(state) === LoadingStatus.ERROR
