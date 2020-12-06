import { Action } from 'redux'
import { Project, ProjectDetail } from './state'

export enum ProjectsActionsType {
	GET_PROJECTS = 'projects/GET_PROJECTS',
	SET_PROJECTS = 'projects/SET_PROJECTS',
	GET_PROJECT_DATA = 'projects/GET_PROJECT_DATA',
	SET_PROJECT_DATA = 'projects/SET_PROJECT_DATA',
}

export interface GetProjectsActionInterface extends Action<ProjectsActionsType> {
	type: ProjectsActionsType.GET_PROJECTS
}
export interface SetProjectsActionInterface extends Action<ProjectsActionsType> {
	type: ProjectsActionsType.SET_PROJECTS
	payload: Project[] | null
}
export interface GetProjectDataActionInterface extends Action<ProjectsActionsType> {
	type: ProjectsActionsType.GET_PROJECT_DATA
	id: string
}
export interface SetProjectDataActionInterface extends Action<ProjectsActionsType> {
	type: ProjectsActionsType.SET_PROJECT_DATA
	payload: ProjectDetail | null
}
