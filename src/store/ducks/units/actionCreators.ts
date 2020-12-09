import { GetUnitDataActionInterface, GetUnitsActionInterface, SetLoadingUnitsActionInterface, SetUnitDataActionInterface, SetUnitsActionInterface, UnitsActionsType } from './contracts/actionTypes'
import { Unit, UnitDetail } from './contracts/state'
import { LoadingStatus } from '../../types'
import { SetLoadingTeamsActionInterface, TeamsActionsType } from '../teams/contracts/actionTypes'

export const getUnits = (): GetUnitsActionInterface => ({
	type: UnitsActionsType.GET_UNITS,
})
export const setUnits = (payload: Unit[] | null): SetUnitsActionInterface => ({
	type: UnitsActionsType.SET_UNITS,
	payload,
})
export const getUnitData = (id: string): GetUnitDataActionInterface => ({
	type: UnitsActionsType.GET_UNIT_DATA,
	id,
})
export const setUnitData = (payload: UnitDetail | null): SetUnitDataActionInterface => ({
	type: UnitsActionsType.SET_UNIT_DATA,
	payload,
})
export const setLoadingUnits = (payload: LoadingStatus): SetLoadingUnitsActionInterface => ({
	type: UnitsActionsType.SET_LOADING_STATE,
	payload,
})

export type UnitsActions = SetLoadingUnitsActionInterface | GetUnitDataActionInterface | SetUnitDataActionInterface | GetUnitsActionInterface | SetUnitsActionInterface
