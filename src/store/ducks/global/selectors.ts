import { RootState } from '../../store'
import { createSelector } from 'reselect'

import { GlobalState } from './contracts/state'

export const selectGlobal = (state: RootState): GlobalState => state.global
