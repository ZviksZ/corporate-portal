import axios from 'axios'
import { Cookie } from '../helpers/cookie.js'

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

/*instance.interceptors.request.use(config => {

	const cookies = Cookie.getCookie('userData');
	const data = JSON.parse(cookies + '');

	if (data && data.token) {
		config.headers['X-AUTH-TOKEN'] = `${data.token}`
	}

	return config
})*/

export const AuthApi = {
	async login(formData: any): Promise<any> {
		const { data } = await instance.post<Response<any>>('/auth/login', formData)
		return data.data
	},
}
