export interface ResponseInterface<T> {
	status: string
	data: T
}
export interface ResponseErrorInterface {
	code: string
	message: string
}


export interface LoginRequestInterface {
	login: string
	pass: string
}
export interface StandartRequestInterface {
	id: string | number
}
export interface SearchRequestInterface {
	query: string
}
