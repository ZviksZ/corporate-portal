import { put, takeLatest, call } from 'redux-saga/effects'
import { AddTeamMemberActionInterface, GetTeamDataActionInterface, GetTeamSquadActionInterface, RemoveTeamMemberActionInterface, TeamsActionsType } from './contracts/actionTypes'
import { TeamsApi } from '../../../services/api/api'
import { setGlobalMessage } from '../global/actionCreators'
import { getTeamSquad, setLoadingTeams, setMembers, setTeamData, setTeams, setTeamSquad } from './actionCreators'
import { LoadingStatus } from '../../types'

export function* getTeamsRequest() {
	try {
		yield put(setLoadingTeams(LoadingStatus.LOADING))
		const teams = yield call(TeamsApi.getTeams)

		yield put(setTeams(teams))
		yield put(setLoadingTeams(LoadingStatus.LOADED))
	} catch (error) {
		console.log(error)
		yield put(setLoadingTeams(LoadingStatus.ERROR))
		yield put(setGlobalMessage({ text: 'Ошибка при загрузке. Попробуйте снова', type: 'error' }))
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
		yield put(setGlobalMessage({ text: 'Ошибка при загрузке. Попробуйте снова', type: 'error' }))
	}
}
export function* getTeamSquadRequest({ id }: GetTeamSquadActionInterface) {
	try {
		yield put(setLoadingTeams(LoadingStatus.LOADING))
		const squad = yield call(TeamsApi.getTeamSquadData, { id })

		yield put(setTeamSquad(squad))
		yield put(setLoadingTeams(LoadingStatus.LOADED))
	} catch (error) {
		yield put(setLoadingTeams(LoadingStatus.ERROR))
		yield put(setGlobalMessage({ text: 'Ошибка при загрузке. Попробуйте снова', type: 'error' }))
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
		yield put(setGlobalMessage({ text: 'Сотрудник успешно удален из состава команды', type: 'success' }))
	} catch (error) {
		yield put(setLoadingTeams(LoadingStatus.ERROR))
		yield put(setGlobalMessage({ text: 'Ошибка при удалении члена команды. Попробуйте снова', type: 'error' }))
	}
}

export function* teamsSaga() {
	yield takeLatest(TeamsActionsType.GET_MEMBERS, getMembersRequest)
	yield takeLatest(TeamsActionsType.GET_TEAM_SQUAD, getTeamSquadRequest)
	yield takeLatest(TeamsActionsType.GET_TEAM_DATA, getTeamDataRequest)
	yield takeLatest(TeamsActionsType.GET_TEAMS, getTeamsRequest)
	yield takeLatest(TeamsActionsType.ADD_TEAM_MEMBER, addMemberRequest)
	yield takeLatest(TeamsActionsType.REMOVE_TEAM_MEMBER, removeMemberRequest)
}
