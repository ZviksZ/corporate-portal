import { Action } from 'redux'
import { ProjectInterface, ProjectDetailInterface } from './state'
import { LoadingStatus } from '../../../types'

export enum ProjectsActionsType {
	GET_PROJECTS = 'projects/GET_PROJECTS',
	SET_PROJECTS = 'projects/SET_PROJECTS',
	GET_PROJECT_DATA = 'projects/GET_PROJECT_DATA',
	SET_PROJECT_DATA = 'projects/SET_PROJECT_DATA',
	SET_LOADING_STATE = 'projects/SET_LOADING_STATE',
}

export interface GetProjectsActionInterface extends Action<ProjectsActionsType> {
	type: ProjectsActionsType.GET_PROJECTS
}
export interface SetProjectsActionInterface extends Action<ProjectsActionsType> {
	type: ProjectsActionsType.SET_PROJECTS
	payload: ProjectInterface[] | null
}
export interface GetProjectDataActionInterface extends Action<ProjectsActionsType> {
	type: ProjectsActionsType.GET_PROJECT_DATA
	id: string
}
export interface SetProjectDataActionInterface extends Action<ProjectsActionsType> {
	type: ProjectsActionsType.SET_PROJECT_DATA
	payload: ProjectDetailInterface | null
}
export interface SetLoadingProjectsActionInterface extends Action<ProjectsActionsType> {
	type: ProjectsActionsType.SET_LOADING_STATE
	payload: LoadingStatus
}
