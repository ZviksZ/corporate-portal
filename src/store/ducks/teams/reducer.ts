import produce, { Draft } from 'immer'
import { TeamsStateInterface } from './contracts/state'
import { TeamsActions } from './actionCreators'
import { TeamsActionsType } from './contracts/actionTypes'
import { LoadingStatus } from '../../types'

const initialTeamsState: TeamsStateInterface = {
	teams: null,
	teamDetail: null,
	roleFormData: null,
	teamSquad: null,
	allMembers: null,
	teamSquadSearch: '',
	LoadingStatus: LoadingStatus.NEVER,
}
export const teamsReducer = produce((draft: Draft<TeamsStateInterface>, action: TeamsActions) => {
	switch (action.type) {
		case TeamsActionsType.SET_TEAMS:
			draft.teams = action.payload
			draft.LoadingStatus = LoadingStatus.SUCCESS
			break
		case TeamsActionsType.SET_TEAM_DATA:
			draft.teamDetail = action.payload
			draft.LoadingStatus = LoadingStatus.SUCCESS
			break
		case TeamsActionsType.SET_ROLE_FORM_DATA:
			draft.roleFormData = action.payload
			break
		case TeamsActionsType.SET_TEAM_SQUAD:
			draft.teamSquad = action.payload
			draft.LoadingStatus = LoadingStatus.SUCCESS
			break
		case TeamsActionsType.SET_MEMBERS:
			draft.allMembers = action.payload
			break
		case TeamsActionsType.SET_TEAM_SQUAD_SEARCH:
			draft.teamSquadSearch = action.query
			break
		case TeamsActionsType.SET_LOADING_STATE:
			draft.LoadingStatus = action.payload
			break
		default:
			break
	}
}, initialTeamsState)
