import produce, { Draft } from 'immer'
import { ProjectsStateInterface } from './contracts/state'
import { ProjectsActions } from './actionCreators'
import { ProjectsActionsType } from './contracts/actionTypes'
import { LoadingStatus } from '../../types'

const initialProjectsState: ProjectsStateInterface = {
	projects: null,
	projectDetail: null,
	LoadingStatus: LoadingStatus.NEVER,
}
export const projectsReducer = produce((draft: Draft<ProjectsStateInterface>, action: ProjectsActions) => {
	switch (action.type) {
		case ProjectsActionsType.SET_PROJECTS:
			draft.projects = action.payload
			draft.LoadingStatus = LoadingStatus.SUCCESS
			break
		case ProjectsActionsType.SET_PROJECT_DATA:
			draft.projectDetail = action.payload
			draft.LoadingStatus = LoadingStatus.SUCCESS
			break
		case ProjectsActionsType.SET_LOADING_STATE:
			draft.LoadingStatus = action.payload
			break
		default:
			break
	}
}, initialProjectsState)
