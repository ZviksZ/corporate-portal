export interface Response<T> {
	status: string
	data: T
}

export interface LoginRequestInterface {
	login: string
	password: string
}

export interface StandartRequestInterface {
	id: string
}
