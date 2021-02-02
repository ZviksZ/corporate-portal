import axios from 'axios'
import { SearchResultsInterface } from '../../store/ducks/global/contracts/state'
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
import {
	LoginRequestInterface,
	ResponseErrorInterface,
	ResponseInterface,
	SearchRequestInterface,
	StandartRequestInterface,
	UpdateUserPhotoInterface,
	CreateUserPhotoInterface,
	AddRemoveMemberRequestInterface,
	RefreshTokenRequestInterface,
	RefreshTokenResponseInterface,
	UserResponseInterface, UpdateMemberRequestInterface, UpdateDayoffRequestInterface, CreateDayoffRequestInterface, ResponsePayloadInterface,
} from './interfaces'
import { ProfileDataInterface } from '../../store/ducks/profile/contracts/state'
import { AbsenceDataInterface, AbsenceDetailInterface, AbsenceCreateInterface, AbsenceChangeInterface, AbsenceItemInterface } from '../../store/ducks/absences/contracts/state'
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
	async login(requestData: LoginRequestInterface): Promise<UserResponseInterface | ResponseErrorInterface> {
		if (DEV_MODE) {
			return user.data
		}
		const { data } = await instance.post<ResponseInterface<UserResponseInterface>>('/login', requestData)
		return data.data
	},
	async refreshToken(requestData: RefreshTokenRequestInterface): Promise<RefreshTokenResponseInterface> {
		if (DEV_MODE) {
			return {
				token:
					'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDg3MDUxNzgsImV4cCI6MTYwODcxMjM3OCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoib3Jsb3ZAYmFua2kucnUifQ.gcpMg3bQoFSbYJdCtYR7AjbAggAMKyxjXbNypkyzKO5ut-ySb0pF0HYHA7W1FPcNTOqI_yk_lHEmxZ0BpKDrS_1oKLqsn1WdYwtGlipkQkCA0PFgFLNjp2Y2xfVANv-8oAHzxQ-6bEBVr9T4TC_bmmlHfb_P5ADE15OhEkrwPHWTJld9LEQM61WLybfJZF70rpohn159gPnljS8B69_CigyQ9pc78WkIxZufZowdjNG0Uiu_P7hYq_q3suDL-OZY8erMDnJvIlY7Bx1UBfGqnxv0zt209SEg1GAn5cDdQtfDtVqjNmO_MwsGo_ZB-ZlcY4iM6r3T5fgIwIE5MfDTOUjZV67iwL515pCcm1LhNbyRoI8Z4BF94EvHDA_1lkpzJNcjhmbcWQG1FJbPlhNCeb0NX99fpzel1ENFmgH9zVqsNm6OOQRQ8UIHp1kEjXpl9I_vw0b0vvrCACDKnnTRfecxu7xA8VgSwMRCE5itPGDJ0e_QrhGJQXMWc7cn5jDYCUAWKwekrNgXjJUiqOd2TJtTXO8ZHwGgibkwBXLTriQ-ipBwHsmD_Vbu6Eo-THHP01uVNuOk-SxBg3zIQFH-mZ89fVphkPM5OpHHxQKHHcUiIqqBGsVFyfkPqDYJEX7kLZzuUhyNL5qBsXhZnKzZeRAo32ajsYHaBFkMvunZBFo',
				refreshToken: '0ea1f13f3bbe4988de14d84ff968a44702f93545f64e36422521a3942a33add8f89d9165544f46aa8a6b0ebb563f8c01100d6a5bf44024eca61d8a81a6c68886',
			}
		}
		const { data } = await instance.post('/token/refresh', requestData)
		return data
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
	async getAbsences(requestData: StandartRequestInterface): Promise<AbsenceDataInterface | ResponseErrorInterface> {
		if (DEV_MODE) {
			return notifications.data
		}
		const { data } = await instance.get<ResponsePayloadInterface<AbsenceDataInterface>>(`/userNotification/${requestData.id}`)
		return data.payload
	},
	async getAllAbsences(requestData: StandartRequestInterface): Promise<AbsenceItemInterface[] | ResponseErrorInterface> {
		if (DEV_MODE) {
			return allAbsences.data.lastFive
		}
		const { data } = await instance.get<ResponsePayloadInterface<AbsenceDataInterface>>(`/userNotifications/${requestData.id}`)
		return data.payload.lastFive
	},
	async getAbsenceData(requestData: StandartRequestInterface): Promise<AbsenceDetailInterface | ResponseErrorInterface> {
		if (DEV_MODE) {
			return notificationDetail.data
		}
		const { data } = await instance.get<ResponseInterface<AbsenceDetailInterface>>(`/absences/${requestData.id}`)
		return data.data
	},
	async createAbsence(requestData: AbsenceCreateInterface): Promise<string> {
		return await instance.post('/absences', requestData)
	},
	async changeAbsenceStatus(requestData: AbsenceChangeInterface): Promise<string> {
		return await instance.put(`/absences/${requestData.id}`, { status: requestData.status })
	},
}

export const ProfileApi = {
	async getProfile(requestData: StandartRequestInterface): Promise<ProfileDataInterface | ResponseErrorInterface> {
		if (DEV_MODE) {
			return profile.data
		}
		const { data } = await instance.get<ResponsePayloadInterface<ProfileDataInterface>>(`/users/${requestData.id}`)
		return data.payload
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
	async updateDayoff(requestData: UpdateDayoffRequestInterface) {
		await instance.post(`/altUserUpdateDayOff`, requestData)
	},
	async createDayoff(requestData: CreateDayoffRequestInterface) {
		await instance.post(`/dayOff`, requestData)
	},
}

export const UnitsApi = {
	async getUnits(): Promise<UnitInterface[] | ResponseErrorInterface> {
		if (DEV_MODE) {
			return units.data
		}
		const { data } = await instance.get<ResponsePayloadInterface<UnitInterface[]>>('/units')
		return data.payload
	},
	async getUnitData(requestData: StandartRequestInterface): Promise<UnitDetailInterface | ResponseErrorInterface> {
		if (DEV_MODE) {
			return unitDetail.data
		}
		const { data } = await instance.get<ResponsePayloadInterface<UnitDetailInterface>>(`/units/${requestData.id}`)
		return data.payload
	},
}

export const TeamsApi = {
	async getAllMembers(): Promise<SquadMemberInterface[] | ResponseErrorInterface> {
		if (DEV_MODE) {
			return allMembers.data
		}
		const { data } = await instance.get<ResponsePayloadInterface<SquadMemberInterface[]>>('/users')
		return data.payload
	},
	async getAvailableMembers(requestData: StandartRequestInterface): Promise<SquadMemberInterface[] | ResponseErrorInterface> {
		if (DEV_MODE) {
			return allMembers.data
		}
		const { data } = await instance.get<ResponsePayloadInterface<SquadMemberInterface[]>>(`/teams/${requestData.id}/avalibleUsers`)
		return data.payload
	},
	async getTeams(): Promise<UnitInterface[] | ResponseErrorInterface> {
		if (DEV_MODE) {
			return teams.data
		}
		const { data } = await instance.get<ResponsePayloadInterface<UnitInterface[]>>('/teams')
		return data.payload
	},
	async getTeamData(requestData: StandartRequestInterface): Promise<UnitDetailInterface | ResponseErrorInterface> {
		if (DEV_MODE) {
			return teamDetail.data
		}
		const { data } = await instance.get<ResponsePayloadInterface<UnitDetailInterface>>(`/teams/${requestData.id}`)
		return data.payload
	},
	async addTeamMember(requestData: AddRemoveMemberRequestInterface): Promise<any> {
		await instance.post<ResponseInterface<string>>(`/teamMembers`, requestData)
	},
	async updateTeamMember(requestData: UpdateMemberRequestInterface): Promise<any> {
		await instance.post<ResponseInterface<string>>(`/altUpdateTeamMember`, requestData)
	},
	async removeTeamMember(requestData: AddRemoveMemberRequestInterface): Promise<any> {
		await instance.post<ResponseInterface<string>>(`/altDeleteTeamMember`, requestData)
	},
	async updateTeamLead(requestData: AddRemoveMemberRequestInterface): Promise<any> {
		await instance.put<ResponseInterface<string>>(`/teams`, requestData)
	},
}
export const ProjectsApi = {
	async getProjects(): Promise<ProjectInterface[] | ResponseErrorInterface> {
		if (DEV_MODE) {
			return projects.data
		}
		const { data } = await instance.get<ResponsePayloadInterface<ProjectInterface[]>>('/projects')
		return data.payload
	},
	async getProjectData(requestData: StandartRequestInterface): Promise<ProjectDetailInterface | ResponseErrorInterface> {
		if (DEV_MODE) {
			return project.data
		}
		const { data } = await instance.get<ResponsePayloadInterface<ProjectDetailInterface>>(`/projects/${requestData.id}`)
		return data.payload
	},
}
