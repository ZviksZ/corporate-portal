import { put, takeLatest, call } from 'redux-saga/effects'
import { GetProjectDataActionInterface, ProjectsActionsType } from './contracts/actionTypes'
import { ProjectsApi } from '../../../services/api/api'
import { setGlobalMessage } from '../global/actionCreators'
import { setLoadingProjects, setProjectData, setProjects } from './actionCreators'
import { LoadingStatus } from '../../types'


export function* getProjectsRequest() {
	try {
		yield put(setLoadingProjects(LoadingStatus.LOADING))
		const data = yield call(ProjectsApi.getProjects)
		const projects = data.map((project:any) => project.data)

		yield put(setProjects(projects))
		yield put(setLoadingProjects(LoadingStatus.LOADED))
	} catch (error) {
		yield put(setLoadingProjects(LoadingStatus.ERROR))
		yield put(setGlobalMessage({ text: 'Ошибка при загрузке. Попробуйте снова', type: 'error' }))
	}
}
export function* getProjectDataRequest({ id }: GetProjectDataActionInterface) {
	try {
		yield put(setLoadingProjects(LoadingStatus.LOADING))
		const project = yield call(ProjectsApi.getProjectData, { id })

		yield put(setProjectData(project))
		yield put(setLoadingProjects(LoadingStatus.LOADED))
	} catch (error) {
		yield put(setLoadingProjects(LoadingStatus.ERROR))
		yield put(setGlobalMessage({ text: 'Ошибка при загрузке. Попробуйте снова', type: 'error' }))
	}
}

export function* projectsSaga() {
	yield takeLatest(ProjectsActionsType.GET_PROJECT_DATA, getProjectDataRequest)
	yield takeLatest(ProjectsActionsType.GET_PROJECTS, getProjectsRequest)
}
