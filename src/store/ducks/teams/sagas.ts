import { put, takeLatest, call } from 'redux-saga/effects'
import { GetTeamDataActionInterface, TeamsActionsType } from './contracts/actionTypes'
import { TeamsApi } from '../../../services/api/api'
import { setGlobalMessage } from '../global/actionCreators'
import { setTeamData, setTeams } from './actionCreators'

/**
 * Список команд
 */
export function* getTeamsRequest() {
	try {
		const teams = yield call(TeamsApi.getTeams)

		yield put(setTeams(teams))
	} catch (error) {
		yield put(setGlobalMessage({ text: 'Ошибка при загрузке. Попробуйте снова', type: 'error' }))
	}
}
/**
 * Данные команды(детальные)
 * @param {String} id - id команды
 */
export function* getTeamDataRequest({ id }: GetTeamDataActionInterface) {
	try {
		const team = yield call(TeamsApi.getTeamData, id)

		yield put(setTeamData(team))
	} catch (error) {
		yield put(setGlobalMessage({ text: 'Ошибка при загрузке. Попробуйте снова', type: 'error' }))
	}
}

export function* teamsSaga() {
	yield takeLatest(TeamsActionsType.GET_TEAM_DATA, getTeamDataRequest)
	yield takeLatest(TeamsActionsType.GET_TEAMS, getTeamsRequest)
}
