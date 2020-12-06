import produce, { Draft } from 'immer'
import { TeamsState } from './contracts/state'
import { TeamsActions } from './actionCreators'
import { TeamsActionsType } from './contracts/actionTypes'

const initialTeamsState: TeamsState = {
	teams: null,
	teamDetail: null,
	roleFormData: null
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
		default:
			break
	}
}, initialTeamsState)
