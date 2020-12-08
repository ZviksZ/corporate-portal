import {
	GetTeamsActionInterface,
	SetTeamsActionInterface,
	TeamsActionsType,
	GetTeamDataActionInterface,
	SetTeamDataActionInterface,
	SetRoleFormDataActionInterface,
	GetTeamSquadActionInterface,
	SetTeamSquadActionInterface,
	GetMembersActionInterface,
	SetMembersActionInterface, SetTeamSquadSearchActionInterface,
} from './contracts/actionTypes'
import { Unit, UnitDetail } from '../units/contracts/state'
import { SquadMember, TeamSquad } from './contracts/state'

/**
 * Получение команд
 */
export const getTeams = (): GetTeamsActionInterface => ({
	type: TeamsActionsType.GET_TEAMS,
})
/**
 * Установка команд в состояние приложения
 */
export const setTeams = (payload: Unit[] | null): SetTeamsActionInterface => ({
	type: TeamsActionsType.SET_TEAMS,
	payload,
})
/**
 * Получение команды
 */
export const getTeamData = (id: string): GetTeamDataActionInterface => ({
	type: TeamsActionsType.GET_TEAM_DATA,
	id,
})
/**
 * Установка команды в состояние приложения
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
/**
 * Получение состава команды
 */
export const getTeamSquad = (id: string): GetTeamSquadActionInterface => ({
	type: TeamsActionsType.GET_TEAM_SQUAD,
	id,
})
/**
 * Установка состава команды в состояние приложения
 */
export const setTeamSquad = (payload: TeamSquad | null): SetTeamSquadActionInterface => ({
	type: TeamsActionsType.SET_TEAM_SQUAD,
	payload,
})

/**
 * Загрузка всех сотрудников
 */
export const getMembers = (): GetMembersActionInterface => ({
	type: TeamsActionsType.GET_MEMBERS,
})
/**
 * Установка в состояние всех сотрудников
 */
export const setMembers = (payload: SquadMember[] | null): SetMembersActionInterface => ({
	type: TeamsActionsType.SET_MEMBERS,
	payload,
})

/**
 * Фильтрация списка всех сотрудников по имени
 */
export const setTeamSquadSearch = (query: string): SetTeamSquadSearchActionInterface => ({
	type: TeamsActionsType.SET_TEAM_SQUAD_SEARCH,
	query,
})

export type TeamsActions =
	| SetTeamSquadSearchActionInterface
	| GetMembersActionInterface
	| SetMembersActionInterface
	| GetTeamSquadActionInterface
	| SetTeamSquadActionInterface
	| SetRoleFormDataActionInterface
	| GetTeamDataActionInterface
	| SetTeamDataActionInterface
	| GetTeamsActionInterface
	| SetTeamsActionInterface
