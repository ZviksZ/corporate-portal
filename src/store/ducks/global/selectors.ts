import { RootState } from '../../store'
import { createSelector } from 'reselect'

import { GlobalState } from './contracts/state'
import { LoadingStatus } from '../../types'

export const selectGlobal = (state: RootState): GlobalState => state.global

export const selectGlobalLoadingStatus = (state: RootState): LoadingStatus => selectGlobal(state).LoadingStatus

export const selectIsGlobalLoading = (state: RootState): boolean => selectGlobalLoadingStatus(state) === LoadingStatus.LOADING
export const selectIsGlobalLoaded = (state: RootState): boolean => selectGlobalLoadingStatus(state) === LoadingStatus.LOADED
export const selectIsGlobalLoadingError = (state: RootState): boolean => selectGlobalLoadingStatus(state) === LoadingStatus.ERROR
