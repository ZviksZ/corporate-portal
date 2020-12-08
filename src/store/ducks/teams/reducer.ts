import produce, { Draft } from 'immer'
import { TeamsState } from './contracts/state'
import { TeamsActions } from './actionCreators'
import { TeamsActionsType } from './contracts/actionTypes'
import { GlobalActionsType } from '../global/contracts/actionTypes'

const initialTeamsState: TeamsState = {
	teams: null,
	teamDetail: null,
	roleFormData: null,
	teamSquad: null,
	allMembers: null,
	teamSquadSearch: '',
}
export const teamsReducer = produce((draft: Draft<TeamsState>, action: TeamsActions) => {
	switch (action.type) {
		case TeamsActionsType.SET_TEAMS:
			draft.teams = action.payload
			break
		case TeamsActionsType.SET_TEAM_DATA:
			draft.teamDetail = action.payload
			break
		case TeamsActionsType.SET_ROLE_FORM_DATA:
			draft.roleFormData = action.payload
			break
		case TeamsActionsType.SET_TEAM_SQUAD:
			draft.teamSquad = action.payload
			break
		case TeamsActionsType.SET_MEMBERS:
			draft.allMembers = action.payload
			break
		case TeamsActionsType.SET_TEAM_SQUAD_SEARCH:
			draft.teamSquadSearch = action.query
			break
		default:
			break
	}
}, initialTeamsState)
