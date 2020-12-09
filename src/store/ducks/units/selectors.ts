import { RootState } from '../../store'
import { createSelector } from 'reselect'

import { UnitsState } from './contracts/state'
import { LoadingStatus } from '../../types'

export const selectUnits = (state: RootState): UnitsState => state.units

export const selectUnitsList = createSelector(selectUnits, (units) => units.units)

export const selectUnitsLoadingStatus = (state: RootState): LoadingStatus => selectUnits(state).LoadingStatus

export const selectIsUnitsLoading = (state: RootState): boolean => selectUnitsLoadingStatus(state) === LoadingStatus.LOADING
export const selectIsUnitsLoaded = (state: RootState): boolean => selectUnitsLoadingStatus(state) === LoadingStatus.LOADED
export const selectIsUnitsLoadingError = (state: RootState): boolean => selectUnitsLoadingStatus(state) === LoadingStatus.ERROR
