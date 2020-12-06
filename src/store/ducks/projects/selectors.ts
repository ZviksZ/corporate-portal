import { RootState } from '../../store'
import { createSelector } from 'reselect'

import { ProjectsState } from './contracts/state'

export const selectProjects = (state: RootState): ProjectsState => state.projects
