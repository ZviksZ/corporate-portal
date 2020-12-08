import { RootState } from '../../store'
import { createSelector } from 'reselect'

import { UnitsState } from './contracts/state'

export const selectUnits = (state: RootState): UnitsState => state.units

export const selectUnitsList = createSelector(selectUnits, (units) => units.units)
