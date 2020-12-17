export interface ResponseInterface<T> {
	status: string
	data: T
}

export interface LoginRequestInterface {
	login: string
	pass: string
}

export interface StandartRequestInterface {
	id: string
}
export interface SearchRequestInterface {
	query: string
}
