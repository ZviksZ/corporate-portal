import { Action } from 'redux'
import { Unit, UnitDetail } from './state'
import { LoadingStatus } from '../../../types'
import { TeamsActionsType } from '../../teams/contracts/actionTypes'

export enum UnitsActionsType {
	GET_UNITS = 'units/GET_UNITS',
	SET_UNITS = 'units/SET_UNITS',
	GET_UNIT_DATA = 'units/GET_UNIT_DATA',
	SET_UNIT_DATA = 'units/SET_UNIT_DATA',
	SET_LOADING_STATE = 'units/SET_LOADING_STATE',
}

export interface GetUnitsActionInterface extends Action<UnitsActionsType> {
	type: UnitsActionsType.GET_UNITS
}
export interface SetUnitsActionInterface extends Action<UnitsActionsType> {
	type: UnitsActionsType.SET_UNITS
	payload: Unit[] | null
}
export interface GetUnitDataActionInterface extends Action<UnitsActionsType> {
	type: UnitsActionsType.GET_UNIT_DATA
	id: string
}
export interface SetUnitDataActionInterface extends Action<UnitsActionsType> {
	type: UnitsActionsType.SET_UNIT_DATA
	payload: UnitDetail | null
}
export interface SetLoadingUnitsActionInterface extends Action<UnitsActionsType> {
	type: UnitsActionsType.SET_LOADING_STATE
	payload: LoadingStatus
}
