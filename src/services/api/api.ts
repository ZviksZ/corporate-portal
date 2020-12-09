import axios from 'axios'
import { Cookie } from '../helpers/cookie'
import { NotificationData, NotificationDetail, SearchResults, User } from '../../store/ducks/global/contracts/state'
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
import searchResults from './mockups/search-results.json'
import { LoginDataInterface } from '../../store/ducks/global/contracts/actionTypes'
import { ProfileData } from '../../store/ducks/profile/contracts/state'
import { Unit, UnitDetail } from '../../store/ducks/units/contracts/state'
import { Project, ProjectDetail } from '../../store/ducks/projects/contracts/state'
import { SquadMember } from '../../store/ducks/teams/contracts/state'
import { LoginRequestInterface, StandartRequestInterface } from './interfaces'



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

export const GlobalApi = {
	async login(formData: LoginRequestInterface): Promise<User> {
		//const { data } = await instance.post<Response<any>>('/auth/login', formData)
		//return data.data
		return user.data
	},
	async getNotifications(): Promise<NotificationData> {
		//const { data } = await instance.post<Response<any>>('/auth/login', formData)
		//return data.data
		return notifications.data
	},
	async getNotificationData(formData: StandartRequestInterface): Promise<NotificationDetail> {
		//const { data } = await instance.post<Response<any>>('/auth/login', formData)
		//return data.data
		return notificationDetail.data
	},
	async getSearch(query: string): Promise<SearchResults> {
		//const { data } = await instance.post<Response<any>>('/auth/login', formData)
		//return data.data
		return searchResults.data
	},
}

export const ProfileApi = {
	async getProfile(formData: StandartRequestInterface): Promise<any> {
		//const { data } = await instance.post<Response<any>>('/auth/login', formData)
		//return data.data
		return profile.data
	},
}

export const UnitsApi = {
	async getUnits(): Promise<Unit[]> {
		//const { data } = await instance.post<Response<any>>('/auth/login', formData)
		//return data.data
		return units.data
	},
	async getUnitData(formData: StandartRequestInterface): Promise<UnitDetail> {
		//const { data } = await instance.post<Response<any>>('/auth/login', formData)
		//return data.data
		return unitDetail.data
	},
}

export const TeamsApi = {
	async getAllMembers(): Promise<SquadMember[]> {
		//const { data } = await instance.post<Response<any>>('/auth/login', formData)
		//return data.data
		return allMembers.data
	},
	async getTeams(): Promise<Unit[]> {
		//const { data } = await instance.post<Response<any>>('/auth/login', formData)
		//return data.data
		return teams.data
	},
	async getTeamData(formData: StandartRequestInterface): Promise<UnitDetail> {
		//const { data } = await instance.post<Response<any>>('/auth/login', formData)
		//return data.data
		return teamDetail.data
	},
	async getTeamSquadData(formData: StandartRequestInterface): Promise<UnitDetail> {
		//const { data } = await instance.post<Response<any>>('/auth/login', formData)
		//return data.data
		return teamSquad.data
	},
}
export const ProjectsApi = {
	async getProjects(): Promise<Project[]> {
		//const { data } = await instance.post<Response<any>>('/auth/login', formData)
		//return data.data
		return projects.data
	},
	async getProjectData(formData: StandartRequestInterface): Promise<ProjectDetail> {
		//const { data } = await instance.post<Response<any>>('/auth/login', formData)
		//return data.data
		return project.data
	},
}
