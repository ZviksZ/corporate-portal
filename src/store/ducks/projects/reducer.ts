import produce, { Draft } from 'immer'
import { ProjectsState } from './contracts/state'
import { ProjectsActions } from './actionCreators'
import { ProjectsActionsType } from './contracts/actionTypes'

const initialProjectsState: ProjectsState = {
	projects: null,
	projectDetail: null,
}
export const projectsReducer = produce((draft: Draft<ProjectsState>, action: ProjectsActions) => {
	switch (action.type) {
		case ProjectsActionsType.SET_PROJECTS:
			draft.projects = action.payload
			break
		case ProjectsActionsType.SET_PROJECT_DATA:
			draft.projectDetail = action.payload
			break
		default:
			break
	}
}, initialProjectsState)
