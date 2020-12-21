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
import allAbsences from './mockups/all-notifications.json'
import notificationDetail from './mockups/notification-detail.json'
import allMembers from './mockups/all-members.json'
import searchResults from './mockups/search-results.json'
import { UnitInterface, UnitDetailInterface } from '../../store/ducks/units/contracts/state'
import { ProjectInterface, ProjectDetailInterface } from '../../store/ducks/projects/contracts/state'
import { SquadMemberInterface } from '../../store/ducks/teams/contracts/state'
import { LoginRequestInterface, ResponseErrorInterface, ResponseInterface, SearchRequestInterface, StandartRequestInterface, UpdateUserPhotoInterface, CreateUserPhotoInterface } from './interfaces'
import { ProfileDataInterface } from '../../store/ducks/profile/contracts/state'
import { AllAbsenceDataInterface, AbsenceDataInterface, AbsenceDetailInterface, AbsenceCreateInterface } from '../../store/ducks/absences/contracts/state'
import { TokenService } from '../helpers/token'
import { store } from '../../store/store'
import { logout } from '../../store/ducks/global/actionCreators'

const BASE_URL = '/api'
const DEV_MODE = false

export const ACCESS_TKN = new TokenService()

const instance = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
		'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
		'Content-Type': 'application/json',
	},
})

instance.interceptors.request.use((config) => {
	if (ACCESS_TKN.getToken()) {
		config.headers['Authorization'] = `Bearer ${ACCESS_TKN.getToken()}`
	}
	return config
})
instance.interceptors.response.use(
	(response) => {
		return response
	},
	function (error) {
		if (error.response.status == 401) {
			store.dispatch(logout())
		}
		return Promise.reject(error)
	},
)
export const GlobalApi = {
	async login(requestData: LoginRequestInterface): Promise<UserInterface | ResponseErrorInterface> {
		if (DEV_MODE) {
			return user.data
		}
		const { data } = await instance.post<ResponseInterface<UserInterface>>('/login', requestData)
		return data.data
	},
	async getSearch(requestData: SearchRequestInterface): Promise<SearchResultsInterface | ResponseErrorInterface> {
		if (DEV_MODE) {
			return searchResults.data
		}
		const { data } = await instance.post<ResponseInterface<SearchResultsInterface>>('/search', requestData)
		return data.data
	},
}

export const AbsencesApi = {
	async getAbsences(): Promise<AbsenceDataInterface | ResponseErrorInterface> {
		//const { data } = await instance.post<ResponseInterface<any>>('/auth/login')
		//return data.data
		return notifications.data
	},
	async getAllAbsences(): Promise<AllAbsenceDataInterface | ResponseErrorInterface> {
		//const { data } = await instance.post<ResponseInterface<any>>('/auth/login', requestData)
		//return data.data
		return allAbsences.data
	},
	async getAbsenceData(requestData: StandartRequestInterface): Promise<AbsenceDetailInterface | ResponseErrorInterface> {
		//const { data } = await instance.post<ResponseInterface<any>>('/auth/login', requestData)
		//return data.data
		return notificationDetail.data
	},
	async createAbsence(requestData: AbsenceCreateInterface): Promise<any> {
		const { data } = await instance.post<ResponseInterface<any>>('/absences', requestData)
		//return data.data
		return notificationDetail.data
	},
}

export const ProfileApi = {
	async getProfile(requestData: StandartRequestInterface): Promise<ProfileDataInterface | ResponseErrorInterface> {
		if (DEV_MODE) {
			return profile.data
		}
		const { data } = await instance.get<ResponseInterface<ProfileDataInterface>>(`/users/${requestData.id}`)
		return data.data
	},
	async updateProfile(requestData: any, profileId: number) {
		await instance.put<ResponseInterface<string>>(`/users/${profileId}`, requestData)
	},
	async createUserPhoto(requestData: CreateUserPhotoInterface) {
		await instance.post(`/createUserPhoto`, requestData)
	},
	async updateUserPhoto(requestData: UpdateUserPhotoInterface) {
		await instance.post(`/updateUserPhoto`, requestData)
	},
	async uploadPhoto(requestData: FormData): Promise<string> {
		const { data } = await instance.post<ResponseInterface<string>>(`/fileLoader`, requestData)
		return data.data
	},
}

export const UnitsApi = {
	async getUnits(): Promise<UnitInterface[] | ResponseErrorInterface> {
		if (DEV_MODE) {
			return units.data
		}
		const { data } = await instance.get('/units')
		return data.data
	},
	async getUnitData(requestData: StandartRequestInterface): Promise<UnitDetailInterface | ResponseErrorInterface> {
		if (DEV_MODE) {
			return unitDetail.data
		}
		const { data } = await instance.get<ResponseInterface<UnitDetailInterface>>(`/units/${requestData.id}`)
		return data.data
	},
}

export const TeamsApi = {
	async getAllMembers(): Promise<SquadMemberInterface[] | ResponseErrorInterface> {
		if (DEV_MODE) {
			return allMembers.data
		}
		const { data } = await instance.get('/users')
		return data.data
	},
	async getTeams(): Promise<UnitInterface[] | ResponseErrorInterface> {
		if (DEV_MODE) {
			return teams.data
		}
		const { data } = await instance.get<ResponseInterface<UnitInterface[]>>('/teams')
		return data.data
	},
	async getTeamData(requestData: StandartRequestInterface): Promise<UnitDetailInterface | ResponseErrorInterface> {
		if (DEV_MODE) {
			return teamDetail.data
		}
		const { data } = await instance.get<ResponseInterface<UnitDetailInterface>>(`/teams/${requestData.id}`)
		return data.data
	},
	async getTeamSquadData(requestData: StandartRequestInterface): Promise<UnitDetailInterface | ResponseErrorInterface> {
		//const { data } = await instance.post<ResponseInterface<any>>('/auth/login', requestData)
		//return data.data
		return teamSquad.data
	},
}
export const ProjectsApi = {
	async getProjects(): Promise<ProjectInterface[] | ResponseErrorInterface> {
		//const { data } = await instance.post<ResponseInterface<any>>('/auth/login', requestData)
		//return data.data
		return projects.data
	},
	async getProjectData(requestData: StandartRequestInterface): Promise<ProjectDetailInterface | ResponseErrorInterface> {
		//const { data } = await instance.post<ResponseInterface<any>>('/auth/login', requestData)
		//return data.data
		return project.data
	},
}

export const SlackApi = {}
