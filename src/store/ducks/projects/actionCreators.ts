import {
	GetProjectDataActionInterface,
	GetProjectsActionInterface,
	SetProjectDataActionInterface,
	SetProjectsActionInterface,
	ProjectsActionsType,
	SetLoadingProjectsActionInterface,
} from './contracts/actionTypes'
import { Project, ProjectDetail } from './contracts/state'
import { LoadingStatus } from '../../types'
import { ProfileActionsType, SetLoadingProfileActionInterface } from '../profile/contracts/actionTypes'

export const getProjects = (): GetProjectsActionInterface => ({
	type: ProjectsActionsType.GET_PROJECTS,
})
export const setProjects = (payload: Project[] | null): SetProjectsActionInterface => ({
	type: ProjectsActionsType.SET_PROJECTS,
	payload,
})
export const getProjectData = (id: string): GetProjectDataActionInterface => ({
	type: ProjectsActionsType.GET_PROJECT_DATA,
	id,
})
export const setProjectData = (payload: ProjectDetail | null): SetProjectDataActionInterface => ({
	type: ProjectsActionsType.SET_PROJECT_DATA,
	payload,
})
export const setLoadingProjects = (payload: LoadingStatus): SetLoadingProjectsActionInterface => ({
	type: ProjectsActionsType.SET_LOADING_STATE,
	payload,
})

export type ProjectsActions = SetLoadingProjectsActionInterface | GetProjectDataActionInterface | SetProjectDataActionInterface | GetProjectsActionInterface | SetProjectsActionInterface
