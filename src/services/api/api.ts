import axios from 'axios'
import { Cookie } from '../helpers/cookie'
import { NotificationData, NotificationDetail, User } from '../../store/ducks/global/contracts/state'
import user from './mockups/user.json'
import profile from './mockups/profile.json'
import units from './mockups/units.json'
import unitDetail from './mockups/unit-detail.json'
import teams from './mockups/teams.json'
import teamDetail from './mockups/team-detail.json'
import teamSquad from './mockups/team-squad.json'
import projects from './mockups/projects.json'
import project from './mockups/project-detail.json'
import notifications from './mockups/notifications.json'
import notificationDetail from './mockups/notification-detail.json'
import allMembers from './mockups/all-members.json'
import { LoginData } from '../../store/ducks/global/contracts/actionTypes'
import { ProfileData } from '../../store/ducks/profile/contracts/state'
import { Unit, UnitDetail } from '../../store/ducks/units/contracts/state'
import { Project, ProjectDetail } from '../../store/ducks/projects/contracts/state'
import { SquadMember } from '../../store/ducks/teams/contracts/state'

interface Response<T> {
	status: string
	data: T
}

const BASE_URL = '/api'

const instance = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
		'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
		'Content-Type': 'multipart/form-data',
	},
})

instance.interceptors.request.use((config) => {
	const cookies = Cookie.getCookie('userData')
	const data = JSON.parse(cookies + '')

	if (data && data.token) {
		config.headers['X-AUTH-TOKEN'] = `${data.token}`
	}

	return config
})

export const AuthApi = {
	/**
	 * Авторизация
	 */
	async login(formData: LoginData): Promise<User> {
		//const { data } = await instance.post<Response<any>>('/auth/login', formData)
		//return data.data
		return user.data
	},
}

export const NotificationsApi = {
	/**
	 * Получить уведомления
	 */
	async getNotifications(): Promise<NotificationData> {
		//const { data } = await instance.post<Response<any>>('/auth/login', formData)
		//return data.data
		return notifications.data
	},
	/**
	 * Получить уведомления
	 */
	async getNotificationData(id: string): Promise<NotificationDetail> {
		//const { data } = await instance.post<Response<any>>('/auth/login', formData)
		//return data.data
		return notificationDetail.data
	},
}

export const ProfileApi = {
	/**
	 * Данные профиля(детальные)
	 * @param {String} id - id сотрудника
	 */
	async getProfile(formData: any): Promise<ProfileData> {
		//const { data } = await instance.post<Response<any>>('/auth/login', formData)
		//return data.data
		return profile.data
	},
}

export const UnitsApi = {
	/**
	 * Список подразделений
	 */
	async getUnits(): Promise<Unit[]> {
		//const { data } = await instance.post<Response<any>>('/auth/login', formData)
		//return data.data
		return units.data
	},
	/**
	 * Данные подразделения(детальные)
	 * @param {String} id - id подразделения
	 */
	async getUnitData(id: string): Promise<UnitDetail> {
		//const { data } = await instance.post<Response<any>>('/auth/login', formData)
		//return data.data
		return unitDetail.data
	},
}

export const TeamsApi = {
	/**
	 * Список команд
	 */
	async getAllMembers(): Promise<SquadMember[]> {
		//const { data } = await instance.post<Response<any>>('/auth/login', formData)
		//return data.data
		return allMembers.data
	},
	/**
	 * Список команд
	 */
	async getTeams(): Promise<Unit[]> {
		//const { data } = await instance.post<Response<any>>('/auth/login', formData)
		//return data.data
		return teams.data
	},
	/**
	 * Данные команды(детальные)
	 * @param {String} id - id команды
	 */
	async getTeamData(id: string): Promise<UnitDetail> {
		//const { data } = await instance.post<Response<any>>('/auth/login', formData)
		//return data.data
		return teamDetail.data
	},
	/**
	 * Данные состава команды
	 * @param {String} id - id команды
	 */
	async getTeamSquadData(id: string): Promise<UnitDetail> {
		//const { data } = await instance.post<Response<any>>('/auth/login', formData)
		//return data.data
		return teamSquad.data
	},
}
export const ProjectsApi = {
	/**
	 * Список проектов
	 */
	async getProjects(): Promise<Project[]> {
		//const { data } = await instance.post<Response<any>>('/auth/login', formData)
		//return data.data
		return projects.data
	},
	/**
	 * Данные проекта(детальные)
	 * @param {String} id - id проекта
	 */
	async getProjectData(id: string): Promise<ProjectDetail> {
		//const { data } = await instance.post<Response<any>>('/auth/login', formData)
		//return data.data
		return project.data
	},
}
