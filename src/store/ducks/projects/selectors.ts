import { RootState } from '../../store'
import { createSelector } from 'reselect'

import { ProjectsState } from './contracts/state'
import { LoadingStatus } from '../../types'

export const selectProjects = (state: RootState): ProjectsState => state.projects

export const selectProjectsLoadingStatus = (state: RootState): LoadingStatus => selectProjects(state).LoadingStatus

export const selectIsProjectsLoading = (state: RootState): boolean => selectProjectsLoadingStatus(state) === LoadingStatus.LOADING
export const selectIsProjectsLoaded = (state: RootState): boolean => selectProjectsLoadingStatus(state) === LoadingStatus.LOADED
export const selectIsProjectsLoadingError = (state: RootState): boolean => selectProjectsLoadingStatus(state) === LoadingStatus.ERROR

