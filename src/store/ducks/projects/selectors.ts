import { RootStateInterface } from '../../store'
import { createSelector } from 'reselect'

import { ProjectsStateInterface } from './contracts/state'
import { LoadingStatus } from '../../types'

export const selectProjects = (state: RootStateInterface): ProjectsStateInterface => state.projects

export const selectProjectsLoadingStatus = (state: RootStateInterface): LoadingStatus => selectProjects(state).LoadingStatus

export const selectIsProjectsLoading = (state: RootStateInterface): boolean => selectProjectsLoadingStatus(state) === LoadingStatus.LOADING
export const selectIsProjectsLoaded = (state: RootStateInterface): boolean => selectProjectsLoadingStatus(state) === LoadingStatus.LOADED
export const selectIsProjectsLoadingError = (state: RootStateInterface): boolean => selectProjectsLoadingStatus(state) === LoadingStatus.ERROR

