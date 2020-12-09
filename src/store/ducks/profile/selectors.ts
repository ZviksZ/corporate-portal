import { RootState } from '../../store'
import { createSelector } from 'reselect'

import { ProfileState } from './contracts/state'
import { LoadingStatus } from '../../types'

export const selectProfile = (state: RootState): ProfileState => state.profile

export const selectProfileLoadingStatus = (state: RootState): LoadingStatus => selectProfile(state).LoadingStatus

export const selectIsProfileLoading = (state: RootState): boolean => selectProfileLoadingStatus(state) === LoadingStatus.LOADING
export const selectIsProfileLoaded = (state: RootState): boolean => selectProfileLoadingStatus(state) === LoadingStatus.LOADED
export const selectIsProfileLoadingError = (state: RootState): boolean => selectProfileLoadingStatus(state) === LoadingStatus.ERROR
