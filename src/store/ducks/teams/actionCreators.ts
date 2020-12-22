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
	SetMembersActionInterface,
	SetTeamSquadSearchActionInterface,
	SetLoadingTeamsActionInterface,
	AddTeamMemberActionInterface,
	RemoveTeamMemberActionInterface,
} from './contracts/actionTypes'
import { UnitInterface, UnitDetailInterface, MemberDetailInterface } from '../units/contracts/state'
import { SquadMemberInterface, TeamSquadInterface } from './contracts/state'
import { LoadingStatus } from '../../types'
import { ProjectsActionsType, SetLoadingProjectsActionInterface } from '../projects/contracts/actionTypes'

export const getTeams = (): GetTeamsActionInterface => ({
	type: TeamsActionsType.GET_TEAMS,
})
export const setTeams = (payload: UnitInterface[] | null): SetTeamsActionInterface => ({
	type: TeamsActionsType.SET_TEAMS,
	payload,
})
export const getTeamData = (id: string): GetTeamDataActionInterface => ({
	type: TeamsActionsType.GET_TEAM_DATA,
	id,
})
export const setTeamData = (payload: UnitDetailInterface | null): SetTeamDataActionInterface => ({
	type: TeamsActionsType.SET_TEAM_DATA,
	payload,
})
export const setRoleFormData = (payload: MemberDetailInterface | null): SetRoleFormDataActionInterface => ({
	type: TeamsActionsType.SET_ROLE_FORM_DATA,
	payload,
})
export const getTeamSquad = (id: string): GetTeamSquadActionInterface => ({
	type: TeamsActionsType.GET_TEAM_SQUAD,
	id,
})
export const setTeamSquad = (payload: TeamSquadInterface | null): SetTeamSquadActionInterface => ({
	type: TeamsActionsType.SET_TEAM_SQUAD,
	payload,
})
export const getMembers = (): GetMembersActionInterface => ({
	type: TeamsActionsType.GET_MEMBERS,
})
export const setMembers = (payload: SquadMemberInterface[] | null): SetMembersActionInterface => ({
	type: TeamsActionsType.SET_MEMBERS,
	payload,
})
export const setTeamSquadSearch = (query: string): SetTeamSquadSearchActionInterface => ({
	type: TeamsActionsType.SET_TEAM_SQUAD_SEARCH,
	query,
})
export const setLoadingTeams = (payload: LoadingStatus): SetLoadingTeamsActionInterface => ({
	type: TeamsActionsType.SET_LOADING_STATE,
	payload,
})

export const addTeamMember = (team_id: string | number, member_id: string | number): AddTeamMemberActionInterface => ({
	type: TeamsActionsType.ADD_TEAM_MEMBER,
	team_id,
	member_id,
})
export const removeTeamMember = (team_id: string | number, member_id: string | number): RemoveTeamMemberActionInterface => ({
	type: TeamsActionsType.REMOVE_TEAM_MEMBER,
	team_id,
	member_id,
})

export type TeamsActions =
	| SetLoadingTeamsActionInterface
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
