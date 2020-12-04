import axios from 'axios'
import { Cookie } from '../helpers/cookie'
import { User } from '../../store/ducks/global/contracts/state'
import user from './mockups/user.json'
import profile from './mockups/profile.json'
import units from './mockups/units.json'
import { LoginData } from '../../store/ducks/global/contracts/actionTypes'
import { ProfileData } from '../../store/ducks/profile/contracts/state'
import { Unit } from '../../store/ducks/units/contracts/state'

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
	async login(formData: LoginData): Promise<User> {
		//const { data } = await instance.post<Response<any>>('/auth/login', formData)
		//return data.data
		return user.user
	},
}

export const ProfileApi = {
	//async getProfile(id: string): Promise<ProfileData> {
	async getProfile(formData: any): Promise<ProfileData> {
		//const { data } = await instance.post<Response<any>>('/auth/login', formData)
		//return data.data
		return profile.profile
	},
}

export const UnitsApi = {
	//async getProfile(id: string): Promise<ProfileData> {
	async getUnits(): Promise<Unit[]> {
		//const { data } = await instance.post<Response<any>>('/auth/login', formData)
		//return data.data
		return units.units
	},
}
