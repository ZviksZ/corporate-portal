import { GetUnitsActionInterface, SetUnitsActionInterface, UnitsActionsType } from './contracts/actionTypes'
import { Unit } from './contracts/state'

export const getUnits = (): GetUnitsActionInterface => ({
	type: UnitsActionsType.GET_UNITS,
})
export const setUnits = (payload: Unit[] | null): SetUnitsActionInterface => ({
	type: UnitsActionsType.SET_UNITS,
	payload,
})

export type UnitsActions = GetUnitsActionInterface | SetUnitsActionInterface
