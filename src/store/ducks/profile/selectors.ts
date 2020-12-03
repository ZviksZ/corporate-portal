import { RootState } from '../../store'
import { createSelector } from 'reselect'

import { ProfileState } from './contracts/state'

export const selectProfile = (state: RootState): ProfileState => state.profile
