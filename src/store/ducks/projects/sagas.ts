import { put, takeLatest, call } from 'redux-saga/effects'
import { GetProjectDataActionInterface, ProjectsActionsType } from './contracts/actionTypes'
import { ProjectsApi } from '../../../services/api/api'
import { setGlobalMessage } from '../global/actionCreators'
import { setProjectData, setProjects } from './actionCreators'

/**
 * Список проектов
 */
export function* getProjectsRequest() {
	try {
		const projects = yield call(ProjectsApi.getProjects)

		yield put(setProjects(projects))
	} catch (error) {
		yield put(setGlobalMessage({ text: 'Ошибка при загрузке. Попробуйте снова', type: 'error' }))
	}
}
/**
 * Данные проекта(детальные)
 * @param {String} id - id проекта
 */
export function* getProjectDataRequest({ id }: GetProjectDataActionInterface) {
	try {
		/*const project = yield call(ProjectsApi.getProjectData, id)

		yield put(setProjectData(project))*/
	} catch (error) {
		yield put(setGlobalMessage({ text: 'Ошибка при загрузке. Попробуйте снова', type: 'error' }))
	}
}

export function* projectsSaga() {
	yield takeLatest(ProjectsActionsType.GET_PROJECT_DATA, getProjectDataRequest)
	yield takeLatest(ProjectsActionsType.GET_PROJECTS, getProjectsRequest)
}
