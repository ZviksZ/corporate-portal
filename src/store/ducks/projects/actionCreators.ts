import { GetProjectDataActionInterface, GetProjectsActionInterface, SetProjectDataActionInterface, SetProjectsActionInterface, ProjectsActionsType } from './contracts/actionTypes'
import { Project, ProjectDetail } from './contracts/state'


/**
 * Получение проектов
 */
export const getProjects = (): GetProjectsActionInterface => ({
	type: ProjectsActionsType.GET_PROJECTS,
})
/**
 * Установка проектов в состояние приложения
 */
export const setProjects = (payload: Project[] | null): SetProjectsActionInterface => ({
	type: ProjectsActionsType.SET_PROJECTS,
	payload,
})
/**
 * Получение проекта
 */
export const getProjectData = (id: string): GetProjectDataActionInterface => ({
	type: ProjectsActionsType.GET_PROJECT_DATA,
	id,
})
/**
 * Установка проекта в состояние приложения
 */
export const setProjectData = (payload: ProjectDetail | null): SetProjectDataActionInterface => ({
	type: ProjectsActionsType.SET_PROJECT_DATA,
	payload,
})

export type ProjectsActions = GetProjectDataActionInterface | SetProjectDataActionInterface | GetProjectsActionInterface | SetProjectsActionInterface
