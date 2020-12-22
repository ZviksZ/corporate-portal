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
export interface UpdateUserPhotoInterface {
	userId: number
	path: string | null
}
export interface CreateUserPhotoInterface {
	userId: number
	path: string
	default: boolean
}
export interface AddRemoveMemberRequestInterface {
	member_id: string | number
	team_id: string | number
}
