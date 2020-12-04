import { RootState } from '../../store'
import { createSelector } from 'reselect'

import { UnitsState } from './contracts/state'

export const selectUnits = (state: RootState): UnitsState => state.units
