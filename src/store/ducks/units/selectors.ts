import { RootStateInterface } from '../../store'
import { createSelector } from 'reselect'

import { UnitsStateInterface } from './contracts/state'
import { LoadingStatus } from '../../types'

export const selectUnits = (state: RootStateInterface): UnitsStateInterface => state.units

export const selectUnitsList = createSelector(selectUnits, (units) => units.units)

export const selectUnitsLoadingStatus = (state: RootStateInterface): LoadingStatus => selectUnits(state).LoadingStatus

export const selectIsUnitsLoading = (state: RootStateInterface): boolean => selectUnitsLoadingStatus(state) === LoadingStatus.LOADING
export const selectIsUnitsLoaded = (state: RootStateInterface): boolean => selectUnitsLoadingStatus(state) === LoadingStatus.LOADED
export const selectIsUnitsLoadingError = (state: RootStateInterface): boolean => selectUnitsLoadingStatus(state) === LoadingStatus.ERROR
