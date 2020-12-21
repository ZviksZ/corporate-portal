import { RootStateInterface } from '../../store'
import { createSelector } from 'reselect'

import { LoadingStatus } from '../../types'
import { AbsencesStateInterface } from './contracts/state'

export const selectAbsences = (state: RootStateInterface): AbsencesStateInterface => state.absences

export const selectAbsencesLoadingStatus = (state: RootStateInterface): LoadingStatus => selectAbsences(state).LoadingStatus

export const selectIsAbsencesLoading = (state: RootStateInterface): boolean => selectAbsencesLoadingStatus(state) === LoadingStatus.LOADING
export const selectIsAbsencesLoaded = (state: RootStateInterface): boolean => selectAbsencesLoadingStatus(state) === LoadingStatus.LOADED
export const selectIsAbsencesLoadingError = (state: RootStateInterface): boolean => selectAbsencesLoadingStatus(state) === LoadingStatus.ERROR
