import { RootStateInterface } from '../../store'
import { createSelector } from 'reselect'

import { GlobalStateInterface } from './contracts/state'
import { LoadingStatus } from '../../types'

export const selectGlobal = (state: RootStateInterface): GlobalStateInterface => state.global

export const selectGlobalLoadingStatus = (state: RootStateInterface): LoadingStatus => selectGlobal(state).LoadingStatus

export const selectIsGlobalLoading = (state: RootStateInterface): boolean => selectGlobalLoadingStatus(state) === LoadingStatus.LOADING
export const selectIsGlobalLoaded = (state: RootStateInterface): boolean => selectGlobalLoadingStatus(state) === LoadingStatus.LOADED
export const selectIsGlobalLoadingError = (state: RootStateInterface): boolean => selectGlobalLoadingStatus(state) === LoadingStatus.ERROR
