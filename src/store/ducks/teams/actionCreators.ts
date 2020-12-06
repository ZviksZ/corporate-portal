import { GetTeamsActionInterface, SetTeamsActionInterface, TeamsActionsType, GetTeamDataActionInterface, SetTeamDataActionInterface, SetRoleFormDataActionInterface } from './contracts/actionTypes'
import { Unit, UnitDetail } from '../units/contracts/state'
import { SquadMember } from './contracts/state'



/**
 * Получение подразделений
 */
export const getTeams = (): GetTeamsActionInterface => ({
	type: TeamsActionsType.GET_TEAMS,
})
/**
 * Установка подразделений в состояние приложения
 */
export const setTeams = (payload: Unit[] | null): SetTeamsActionInterface => ({
	type: TeamsActionsType.SET_TEAMS,
	payload,
})
/**
 * Получение подразделения
 */
export const getTeamData = (id: string): GetTeamDataActionInterface => ({
	type: TeamsActionsType.GET_TEAM_DATA,
	id,
})
/**
 * Установка подразделения в состояние приложения
 */
export const setTeamData = (payload: UnitDetail | null): SetTeamDataActionInterface => ({
	type: TeamsActionsType.SET_TEAM_DATA,
	payload,
})
/**
 * Установка данных сотрудника для формы смены роли в команде
 */
export const setRoleFormData = (payload: SquadMember | null): SetRoleFormDataActionInterface => ({
	type: TeamsActionsType.SET_ROLE_FORM_DATA,
	payload,
})

export type TeamsActions = SetRoleFormDataActionInterface | GetTeamDataActionInterface | SetTeamDataActionInterface | GetTeamsActionInterface | SetTeamsActionInterface
