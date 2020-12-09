import { RootState } from '../../store'
import { createSelector } from 'reselect'

import { SquadMember, TeamsState } from './contracts/state'
import { LoadingStatus } from '../../types'

export const selectTeams = (state: RootState): TeamsState => state.teams

export const selectTeamsSquadSearch = (state: RootState): string => state.teams.teamSquadSearch
export const selectTeamsAllMembers = (state: RootState): SquadMember[] | null => state.teams.allMembers

export const selectTeamsLoadingStatus = (state: RootState): LoadingStatus => selectTeams(state).LoadingStatus

export const selectIsTeamsLoading = (state: RootState): boolean => selectTeamsLoadingStatus(state) === LoadingStatus.LOADING
export const selectIsTeamsLoaded = (state: RootState): boolean => selectTeamsLoadingStatus(state) === LoadingStatus.LOADED
export const selectIsTeamsLoadingError = (state: RootState): boolean => selectTeamsLoadingStatus(state) === LoadingStatus.ERROR



export const filteredAllMembersList = createSelector(selectTeamsAllMembers, selectTeamsSquadSearch, (members, query): SquadMember[] | null => {
	if (query.length > 0 && members) {
		return members.filter((member: SquadMember) => member.name.toLowerCase().includes(query.toLowerCase()))
	}
	return members
})
