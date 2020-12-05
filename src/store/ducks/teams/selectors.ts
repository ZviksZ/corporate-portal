import { RootState } from '../../store'
import { createSelector } from 'reselect'

import { TeamsState } from './contracts/state'

export const selectTeams = (state: RootState): TeamsState => state.teams
