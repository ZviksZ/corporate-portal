import axios from 'axios'
import { Cookie } from '../helpers/cookie'
import { SearchResultsInterface, UserInterface } from '../../store/ducks/global/contracts/state'
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
import allNotifications from './mockups/all-notifications.json'
import notificationDetail from './mockups/notification-detail.json'
import allMembers from './mockups/all-members.json'
import searchResults from './mockups/search-results.json'
import { UnitInterface, UnitDetailInterface } from '../../store/ducks/units/contracts/state'
import { ProjectInterface, ProjectDetailInterface } from '../../store/ducks/projects/contracts/state'
import { SquadMemberInterface } from '../../store/ducks/teams/contracts/state'
import { LoginRequestInterface, ResponseInterface, SearchRequestInterface, StandartRequestInterface } from './interfaces'
import { ProfileDataInterface } from '../../store/ducks/profile/contracts/state'
import { AllNotificationDataInterface, NotificationDataInterface, NotificationDetailInterface } from '../../store/ducks/notifications/contracts/state'
import { TokenService } from '../helpers/token'
import { store } from '../../store/store'
import { logout } from '../../store/ducks/global/actionCreators'

const BASE_URL = 'http://intranet.internetlab.ru/api'
const DEV_MODE = false

export const ACCESS_TKN = new TokenService()

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
	if (ACCESS_TKN.getToken()) {
		config.headers['Authorization'] = `Bearer ${ACCESS_TKN.getToken()}`
	}

	return config
})
axios.interceptors.response.use(
	(response) => {
		return response
	},
	function (error) {
		if (error.response.code === 401) {
			store.dispatch(logout())
		}
		return Promise.reject(error)
	},
)
export const GlobalApi = {
	async login(requestData: LoginRequestInterface): Promise<UserInterface> {
		if (DEV_MODE) {
			return user.data
		}
		const { data } = await instance.post<ResponseInterface<any>>('/login', requestData)
		return data.data
	},
	async getSearch(requestData: SearchRequestInterface): Promise<SearchResultsInterface> {
		//const { data } = await instance.post<ResponseInterface<any>>('/auth/login', requestData)
		//return data.data
		return searchResults.data
	},
}

export const NotificationsApi = {
	async getNotifications(): Promise<NotificationDataInterface> {
		//const { data } = await instance.post<ResponseInterface<any>>('/auth/login')
		//return data.data
		return notifications.data
	},
	async getAllNotifications(): Promise<AllNotificationDataInterface> {
		//const { data } = await instance.post<ResponseInterface<any>>('/auth/login', requestData)
		//return data.data
		return allNotifications.data
	},
	async getNotificationData(requestData: StandartRequestInterface): Promise<NotificationDetailInterface> {
		//const { data } = await instance.post<ResponseInterface<any>>('/auth/login', requestData)
		//return data.data
		return notificationDetail.data
	},
}

export const ProfileApi = {
	async getProfile(requestData: StandartRequestInterface): Promise<ProfileDataInterface> {
		//await instance.post<ResponseInterface<any>>('/profile/', requestData)
		//return data.data
		return profile.data
	},
}

export const UnitsApi = {
	async getUnits(): Promise<UnitInterface[]> {
		if (DEV_MODE) {
			return units.data
		}

		return units.data
		/*const { data } = await instance.get('/units')
		return data.data*/
	},
	async getUnitData(requestData: StandartRequestInterface): Promise<UnitDetailInterface> {
		//const { data } = await instance.post<ResponseInterface<any>>('/auth/login', requestData)
		//return data.data
		return unitDetail.data
	},
}

export const TeamsApi = {
	async getAllMembers(): Promise<SquadMemberInterface[]> {
		//const { data } = await instance.post<ResponseInterface<any>>('/auth/login', requestData)
		//return data.data
		return allMembers.data
	},
	async getTeams(): Promise<UnitInterface[]> {
		//const { data } = await instance.post<ResponseInterface<any>>('/auth/login', requestData)
		//return data.data
		return teams.data
	},
	async getTeamData(requestData: StandartRequestInterface): Promise<UnitDetailInterface> {
		//const { data } = await instance.post<ResponseInterface<any>>('/auth/login', requestData)
		//return data.data
		return teamDetail.data
	},
	async getTeamSquadData(requestData: StandartRequestInterface): Promise<UnitDetailInterface> {
		//const { data } = await instance.post<ResponseInterface<any>>('/auth/login', requestData)
		//return data.data
		return teamSquad.data
	},
}
export const ProjectsApi = {
	async getProjects(): Promise<ProjectInterface[]> {
		//const { data } = await instance.post<ResponseInterface<any>>('/auth/login', requestData)
		//return data.data
		return projects.data
	},
	async getProjectData(requestData: StandartRequestInterface): Promise<ProjectDetailInterface> {
		//const { data } = await instance.post<ResponseInterface<any>>('/auth/login', requestData)
		//return data.data
		return project.data
	},
}
