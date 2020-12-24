import { Action } from 'redux'
import { AllAbsenceDataInterface, AbsenceDataInterface, AbsenceDetailInterface, AbsenceCreateInterface, AbsenceItemInterface } from './state'
import { LoadingStatus } from '../../../types'

export enum AbsencesActionsType {
	GET_ABSENCES = 'absences/GET_ABSENCES',
	SET_ABSENCES = 'absences/SET_ABSENCES',
	CREATE_ABSENCE = 'absences/CREATE_ABSENCE',
	GET_ABSENCE_DATA = 'absences/GET_ABSENCE_DATA',
	SET_ABSENCE_DATA = 'absences/SET_ABSENCE_DATA',
	CHANGE_ABSENCE_STATUS = 'absences/CHANGE_ABSENCE_STATUS',
	GET_ALL_ABSENCES = 'absences/GET_ALL_ABSENCES',
	SET_ALL_ABSENCES = 'absences/SET_ALL_ABSENCES',
	SET_LOADING_STATE = 'absences/SET_LOADING_STATE',
}

export interface GetAbsencesActionInterface extends Action<AbsencesActionsType> {
	type: AbsencesActionsType.GET_ABSENCES,
	userId: number
}
export interface SetAbsencesActionInterface extends Action<AbsencesActionsType> {
	type: AbsencesActionsType.SET_ABSENCES
	payload: AbsenceDataInterface | null
}
export interface GetAllAbsencesActionInterface extends Action<AbsencesActionsType> {
	type: AbsencesActionsType.GET_ALL_ABSENCES,
	userId: number
}
export interface SetAllAbsencesActionInterface extends Action<AbsencesActionsType> {
	type: AbsencesActionsType.SET_ALL_ABSENCES
	payload: AbsenceItemInterface[] | null
}
export interface GetAbsenceDataActionInterface extends Action<AbsencesActionsType> {
	type: AbsencesActionsType.GET_ABSENCE_DATA
	id: string
}
export interface ChangeAbsenceStatusActionInterface extends Action<AbsencesActionsType> {
	type: AbsencesActionsType.CHANGE_ABSENCE_STATUS
	id: number
	isApprove: boolean
	userId: number
}
export interface SetAbsenceDataActionInterface extends Action<AbsencesActionsType> {
	type: AbsencesActionsType.SET_ABSENCE_DATA
	payload: AbsenceDetailInterface | null
}
export interface SetLoadingActionInterface extends Action<AbsencesActionsType> {
	type: AbsencesActionsType.SET_LOADING_STATE
	payload: LoadingStatus
}
export interface CreateAbsenceActionInterface extends Action<AbsencesActionsType> {
	type: AbsencesActionsType.CREATE_ABSENCE
	payload: AbsenceCreateInterface
}
