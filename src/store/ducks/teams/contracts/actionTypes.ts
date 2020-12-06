import { Action } from 'redux'
import { Unit, UnitDetail } from '../../units/contracts/state'
import { SquadMember } from './state'

export enum TeamsActionsType {
	GET_TEAMS = 'teams/GET_TEAMS',
	SET_TEAMS = 'teams/SET_TEAMS',
	GET_TEAM_DATA = 'teams/GET_TEAM_DATA',
	SET_TEAM_DATA = 'teams/SET_TEAM_DATA',
	SET_ROLE_FORM_DATA = 'teams/SET_ROLE_FORM_DATA',
}

export interface GetTeamsActionInterface extends Action<TeamsActionsType> {
	type: TeamsActionsType.GET_TEAMS
}
export interface SetTeamsActionInterface extends Action<TeamsActionsType> {
	type: TeamsActionsType.SET_TEAMS
	payload: Unit[] | null
}
export interface GetTeamDataActionInterface extends Action<TeamsActionsType> {
	type: TeamsActionsType.GET_TEAM_DATA
	id: string
}
export interface SetTeamDataActionInterface extends Action<TeamsActionsType> {
	type: TeamsActionsType.SET_TEAM_DATA
	payload: UnitDetail | null
}
export interface SetRoleFormDataActionInterface extends Action<TeamsActionsType> {
	type: TeamsActionsType.SET_ROLE_FORM_DATA
	payload: SquadMember | null
}
