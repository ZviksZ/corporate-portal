import { Action } from 'redux'
import { Unit } from './state'

export enum UnitsActionsType {
	GET_UNITS = 'profile/GET_UNITS',
	SET_UNITS = 'profile/SET_UNITS',
}

export interface GetUnitsActionInterface extends Action<UnitsActionsType> {
	type: UnitsActionsType.GET_UNITS
}
export interface SetUnitsActionInterface extends Action<UnitsActionsType> {
	type: UnitsActionsType.SET_UNITS
	payload: Unit[] | null
}
