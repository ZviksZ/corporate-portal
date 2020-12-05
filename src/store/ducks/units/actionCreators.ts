import { GetUnitDataActionInterface, GetUnitsActionInterface, SetUnitDataActionInterface, SetUnitsActionInterface, UnitsActionsType } from './contracts/actionTypes'
import { Unit, UnitDetail } from './contracts/state'


/**
 * Получение подразделений
 */
export const getUnits = (): GetUnitsActionInterface => ({
	type: UnitsActionsType.GET_UNITS,
})
/**
 * Установка подразделений в состояние приложения
 */
export const setUnits = (payload: Unit[] | null): SetUnitsActionInterface => ({
	type: UnitsActionsType.SET_UNITS,
	payload,
})
/**
 * Получение подразделения
 */
export const getUnitData = (id: string): GetUnitDataActionInterface => ({
	type: UnitsActionsType.GET_UNIT_DATA,
	id,
})
/**
 * Установка подразделения в состояние приложения
 */
export const setUnitData = (payload: UnitDetail | null): SetUnitDataActionInterface => ({
	type: UnitsActionsType.SET_UNIT_DATA,
	payload,
})

export type UnitsActions = GetUnitDataActionInterface | SetUnitDataActionInterface | GetUnitsActionInterface | SetUnitsActionInterface
