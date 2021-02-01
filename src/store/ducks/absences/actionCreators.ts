import { AbsenceDataInterface, AbsenceDetailInterface, AbsenceCreateInterface, AbsenceItemInterface } from './contracts/state'
import {
	GetAllAbsencesActionInterface,
	GetAbsenceDataActionInterface,
	GetAbsencesActionInterface,
	AbsencesActionsType,
	SetAllAbsencesActionInterface,
	SetLoadingActionInterface,
	SetAbsenceDataActionInterface,
	SetAbsencesActionInterface,
	CreateAbsenceActionInterface,
	ChangeAbsenceStatusActionInterface,
} from './contracts/actionTypes'
import { LoadingStatus } from '../../types'

export const setAbsencesLoading = (payload: LoadingStatus): SetLoadingActionInterface => ({
	type: AbsencesActionsType.SET_LOADING_STATE,
	payload,
})
export const getAbsences = (userId: number): GetAbsencesActionInterface => ({
	type: AbsencesActionsType.GET_ABSENCES,
	userId,
})
export const setAbsences = (payload: AbsenceDataInterface | null): SetAbsencesActionInterface => ({
	type: AbsencesActionsType.SET_ABSENCES,
	payload,
})
export const getAllAbsences = (userId: number): GetAllAbsencesActionInterface => ({
	type: AbsencesActionsType.GET_ALL_ABSENCES,
	userId
})
export const setAllAbsences = (payload: AbsenceItemInterface[] | null): SetAllAbsencesActionInterface => ({
	type: AbsencesActionsType.SET_ALL_ABSENCES,
	payload,
})
export const getAbsenceData = (id: string): GetAbsenceDataActionInterface => ({
	type: AbsencesActionsType.GET_ABSENCE_DATA,
	id,
})
export const changeAbsenceStatus = (id: number, isApprove: boolean, userId: number): ChangeAbsenceStatusActionInterface => ({
	type: AbsencesActionsType.CHANGE_ABSENCE_STATUS,
	id,
	isApprove,
	userId,
})
export const setAbsenceData = (payload: AbsenceDetailInterface | null): SetAbsenceDataActionInterface => ({
	type: AbsencesActionsType.SET_ABSENCE_DATA,
	payload,
})
export const createAbsence = (payload: AbsenceCreateInterface): CreateAbsenceActionInterface => ({
	type: AbsencesActionsType.CREATE_ABSENCE,
	payload,
})

export type AbsencesActions =
	| ChangeAbsenceStatusActionInterface
	| CreateAbsenceActionInterface
	| SetAllAbsencesActionInterface
	| GetAllAbsencesActionInterface
	| GetAbsenceDataActionInterface
	| SetAbsenceDataActionInterface
	| GetAbsencesActionInterface
	| SetAbsencesActionInterface
	| SetLoadingActionInterface
