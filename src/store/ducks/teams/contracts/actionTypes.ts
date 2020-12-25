import { Action } from 'redux'
import { UnitInterface, UnitDetailInterface, MemberDetailInterface } from '../../units/contracts/state'
import { SquadMemberInterface, TeamSquadInterface } from './state'
import { LoadingStatus } from '../../../types'
import { ProjectsActionsType } from '../../projects/contracts/actionTypes'

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
	GET_AVAILABLE_MEMBERS = 'teams/GET_AVAILABLE_MEMBERS',
	SET_AVAILABLE_MEMBERS = 'teams/SET_AVAILABLE_MEMBERS',
	ADD_TEAM_MEMBER = 'teams/ADD_TEAM_MEMBER',
	REMOVE_TEAM_MEMBER = 'teams/REMOVE_TEAM_MEMBER',
	UPDATE_TEAM_MEMBER_ROLE = 'teams/UPDATE_TEAM_MEMBER_ROLE',
	UPDATE_TEAM_LEAD = 'teams/UPDATE_TEAM_LEAD',
	SET_LOADING_STATE = 'teams/SET_LOADING_STATE',
}
export interface UpdateTeamMemberActionInterface extends Action<TeamsActionsType> {
	type: TeamsActionsType.UPDATE_TEAM_MEMBER_ROLE
	team_id: string | number
	member_id: string | number
	teamRole: string
}
export interface AddTeamMemberActionInterface extends Action<TeamsActionsType> {
	type: TeamsActionsType.ADD_TEAM_MEMBER
	team_id: string | number
	member_id: string | number
}
export interface RemoveTeamMemberActionInterface extends Action<TeamsActionsType> {
	type: TeamsActionsType.REMOVE_TEAM_MEMBER
	team_id: string | number
	member_id: string | number
}
export interface GetTeamsActionInterface extends Action<TeamsActionsType> {
	type: TeamsActionsType.GET_TEAMS
}
export interface SetTeamsActionInterface extends Action<TeamsActionsType> {
	type: TeamsActionsType.SET_TEAMS
	payload: UnitInterface[] | null
}
export interface GetTeamDataActionInterface extends Action<TeamsActionsType> {
	type: TeamsActionsType.GET_TEAM_DATA
	id: string
}
export interface SetTeamDataActionInterface extends Action<TeamsActionsType> {
	type: TeamsActionsType.SET_TEAM_DATA
	payload: UnitDetailInterface | null
}
export interface SetRoleFormDataActionInterface extends Action<TeamsActionsType> {
	type: TeamsActionsType.SET_ROLE_FORM_DATA
	payload: MemberDetailInterface | null
}

export interface GetTeamSquadActionInterface extends Action<TeamsActionsType> {
	type: TeamsActionsType.GET_TEAM_SQUAD
	id: string
}
export interface SetTeamSquadActionInterface extends Action<TeamsActionsType> {
	type: TeamsActionsType.SET_TEAM_SQUAD
	payload: TeamSquadInterface | null
}
export interface GetMembersActionInterface extends Action<TeamsActionsType> {
	type: TeamsActionsType.GET_MEMBERS
}
export interface SetMembersActionInterface extends Action<TeamsActionsType> {
	type: TeamsActionsType.SET_MEMBERS
	payload: SquadMemberInterface[] | null
}
export interface SetTeamSquadSearchActionInterface extends Action<TeamsActionsType> {
	type: TeamsActionsType.SET_TEAM_SQUAD_SEARCH
	query: string
}
export interface SetLoadingTeamsActionInterface extends Action<TeamsActionsType> {
	type: TeamsActionsType.SET_LOADING_STATE
	payload: LoadingStatus
}


export interface GetAvailableAvailableMembersActionInterface extends Action<TeamsActionsType> {
	type: TeamsActionsType.GET_AVAILABLE_MEMBERS,
	teamId: string | number
}
export interface SetAvailableMembersActionInterface extends Action<TeamsActionsType> {
	type: TeamsActionsType.SET_AVAILABLE_MEMBERS
	payload: SquadMemberInterface[] | null
}
