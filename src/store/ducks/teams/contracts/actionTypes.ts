import { Action } from 'redux'
import { Unit, UnitDetail } from '../../units/contracts/state'
import { SquadMember, TeamSquad } from './state'
import { GlobalActionsType } from '../../global/contracts/actionTypes'

export enum TeamsActionsType {
	GET_TEAMS = 'teams/GET_TEAMS',
	SET_TEAMS = 'teams/SET_TEAMS',
	GET_TEAM_DATA = 'teams/GET_TEAM_DATA',
	SET_TEAM_DATA = 'teams/SET_TEAM_DATA',
	SET_ROLE_FORM_DATA = 'teams/SET_ROLE_FORM_DATA',
	GET_TEAM_SQUAD = 'teams/GET_TEAM_SQUAD',
	SET_TEAM_SQUAD = 'teams/SET_TEAM_SQUAD',
	SET_TEAM_SQUAD_SEARCH = 'teams/SET_TEAM_SQUAD_SEARCH',
	GET_MEMBERS = 'teams/GET_MEMBERS',
	SET_MEMBERS = 'teams/SET_MEMBERS',
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

export interface GetTeamSquadActionInterface extends Action<TeamsActionsType> {
	type: TeamsActionsType.GET_TEAM_SQUAD
	id: string
}
export interface SetTeamSquadActionInterface extends Action<TeamsActionsType> {
	type: TeamsActionsType.SET_TEAM_SQUAD
	payload: TeamSquad | null
}
export interface GetMembersActionInterface extends Action<TeamsActionsType> {
	type: TeamsActionsType.GET_MEMBERS
}
export interface SetMembersActionInterface extends Action<TeamsActionsType> {
	type: TeamsActionsType.SET_MEMBERS
	payload: SquadMember[] | null
}
export interface SetTeamSquadSearchActionInterface extends Action<TeamsActionsType> {
	type: TeamsActionsType.SET_TEAM_SQUAD_SEARCH
	query: string
}
