import { RootStateInterface } from '../../store'
import { createSelector } from 'reselect'

import { SquadMemberInterface, TeamsStateInterface } from './contracts/state'
import { LoadingStatus } from '../../types'

export const selectTeams = (state: RootStateInterface): TeamsStateInterface => state.teams

export const selectTeamsSquadSearch = (state: RootStateInterface): string => state.teams.teamSquadSearch
export const selectTeamsAllMembers = (state: RootStateInterface): SquadMemberInterface[] | null => state.teams.allMembers

export const selectTeamsLoadingStatus = (state: RootStateInterface): LoadingStatus => selectTeams(state).LoadingStatus

export const selectIsTeamsLoading = (state: RootStateInterface): boolean => selectTeamsLoadingStatus(state) === LoadingStatus.LOADING
export const selectIsTeamsLoaded = (state: RootStateInterface): boolean => selectTeamsLoadingStatus(state) === LoadingStatus.LOADED
export const selectIsTeamsLoadingError = (state: RootStateInterface): boolean => selectTeamsLoadingStatus(state) === LoadingStatus.ERROR



export const filteredAllMembersList = createSelector(selectTeamsAllMembers, selectTeamsSquadSearch, (members, query): SquadMemberInterface[] | null => {
	if (query.length > 0 && members) {
		return members.filter((member: SquadMemberInterface) => member.name.toLowerCase().includes(query.toLowerCase()))
	}
	return members
})
