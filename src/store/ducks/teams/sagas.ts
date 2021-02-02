import { call, put, takeLatest } from 'redux-saga/effects'
import {
	AddTeamMemberActionInterface,
	GetAvailableAvailableMembersActionInterface,
	GetTeamDataActionInterface,
	GetTeamSquadActionInterface,
	RemoveTeamMemberActionInterface,
	TeamsActionsType,
	UpdateTeamMemberActionInterface,
} from './contracts/actionTypes'
import { TeamsApi } from '../../../services/api/api'
import { setGlobalMessage } from '../global/actionCreators'
import { getAvailableMembers, getTeamSquad, setAvailableMembers, setLoadingTeams, setMembers, setTeamData, setTeams, setTeamSquad } from './actionCreators'
import { LoadingStatus } from '../../types'
import { store } from '../../store'

export function* getTeamsRequest() {
	try {
		yield put(setLoadingTeams(LoadingStatus.LOADING))
		const data = yield call(TeamsApi.getTeams)
		const teams = data.map((team:any) => team.data)

		yield put(setTeams(teams))
		yield put(setLoadingTeams(LoadingStatus.LOADED))
	} catch (error) {
		console.log(error)
		yield put(setLoadingTeams(LoadingStatus.ERROR))
		yield put(setGlobalMessage({ text: 'Ошибка при загрузке списка команд. Попробуйте снова', type: 'error' }))
	}
}
export function* getTeamDataRequest({ id }: GetTeamDataActionInterface) {
	try {
		yield put(setLoadingTeams(LoadingStatus.LOADING))
		const team = yield call(TeamsApi.getTeamData, { id })
		if (team && team.id) {
			yield put(setTeamData(team))
			yield put(setLoadingTeams(LoadingStatus.LOADED))
		} else {
			yield put(setLoadingTeams(LoadingStatus.NEVER))
		}
	} catch (error) {
		console.log(error)
		yield put(setLoadingTeams(LoadingStatus.ERROR))
		yield put(setGlobalMessage({ text: 'Ошибка при загрузке данных команды. Попробуйте снова', type: 'error' }))
	}
}
export function* getTeamSquadRequest({ id }: GetTeamSquadActionInterface) {
	try {
		const state = store.getState()
		if (state.teams.LoadingStatus !== LoadingStatus.LOADED) {
			yield put(setLoadingTeams(LoadingStatus.LOADING))
		}
		const squad = yield call(TeamsApi.getTeamData, { id })

		yield put(setTeamSquad(squad))
		yield put(setLoadingTeams(LoadingStatus.LOADED))
	} catch (error) {
		yield put(setLoadingTeams(LoadingStatus.ERROR))
		yield put(setGlobalMessage({ text: 'Ошибка при загрузке состава команды. Попробуйте снова', type: 'error' }))
	}
}
export function* getMembersRequest() {
	try {
		const members = yield call(TeamsApi.getAllMembers)

		yield put(setMembers(members))
	} catch (error) {
		yield put(setLoadingTeams(LoadingStatus.ERROR))
		yield put(setGlobalMessage({ text: 'Ошибка при загрузке. Попробуйте снова', type: 'error' }))
	}
}
export function* addMemberRequest({ member_id, team_id }: AddTeamMemberActionInterface) {
	try {
		yield call(TeamsApi.addTeamMember, { member_id, team_id })

		yield put(getTeamSquad(team_id.toString()))
		yield put(getAvailableMembers(team_id.toString()))
		yield put(setGlobalMessage({ text: 'Сотрудник успешно добавлен в состав команды', type: 'success' }))
	} catch (error) {
		yield put(setLoadingTeams(LoadingStatus.ERROR))
		yield put(setGlobalMessage({ text: 'Ошибка при добавлении члена команды. Попробуйте снова', type: 'error' }))
	}
}
export function* removeMemberRequest({ member_id, team_id }: RemoveTeamMemberActionInterface) {
	try {
		yield call(TeamsApi.removeTeamMember, { member_id, team_id })

		yield put(getTeamSquad(team_id.toString()))
		yield put(getAvailableMembers(team_id.toString()))
		yield put(setGlobalMessage({ text: 'Сотрудник успешно удален из состава команды', type: 'success' }))
	} catch (error) {
		yield put(setLoadingTeams(LoadingStatus.ERROR))
		yield put(setGlobalMessage({ text: 'Ошибка при удалении члена команды. Попробуйте снова', type: 'error' }))
	}
}
export function* updateMemberRequest({ team_id, member_id, teamRole }: UpdateTeamMemberActionInterface) {
	try {
		yield call(TeamsApi.updateTeamMember, { team_id, member_id, update: { teamRole } })

		yield put(getTeamSquad(team_id.toString()))
		yield put(getAvailableMembers(team_id.toString()))
		yield put(setGlobalMessage({ text: 'Роль успешно изменена', type: 'success' }))
	} catch (error) {
		yield put(setLoadingTeams(LoadingStatus.ERROR))
		yield put(setGlobalMessage({ text: 'Ошибка при изменении роли. Попробуйте снова', type: 'error' }))
	}
}
export function* getAvailableMembersRequest({ teamId }: GetAvailableAvailableMembersActionInterface) {
	try {
		const availableMembers = yield call(TeamsApi.getAvailableMembers, { id: teamId })

		yield put(setAvailableMembers(availableMembers))
	} catch (error) {
		yield put(setLoadingTeams(LoadingStatus.ERROR))
		yield put(setGlobalMessage({ text: 'Ошибка при загрузке доступных сотрудников', type: 'error' }))
	}
}

export function* teamsSaga() {
	yield takeLatest(TeamsActionsType.GET_MEMBERS, getMembersRequest)
	yield takeLatest(TeamsActionsType.GET_TEAM_SQUAD, getTeamSquadRequest)
	yield takeLatest(TeamsActionsType.GET_TEAM_DATA, getTeamDataRequest)
	yield takeLatest(TeamsActionsType.GET_TEAMS, getTeamsRequest)
	yield takeLatest(TeamsActionsType.ADD_TEAM_MEMBER, addMemberRequest)
	yield takeLatest(TeamsActionsType.REMOVE_TEAM_MEMBER, removeMemberRequest)
	yield takeLatest(TeamsActionsType.GET_AVAILABLE_MEMBERS, getAvailableMembersRequest)
	yield takeLatest(TeamsActionsType.UPDATE_TEAM_MEMBER_ROLE, updateMemberRequest)
}
