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
export interface RefreshTokenRequestInterface {
	refreshToken: string
}
export interface RefreshTokenResponseInterface {
	refreshToken: string
	token: string
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
export interface UpdateDayoffRequestInterface {
	user_id: string | number
	year: any
	update: {
		value: string | number
	}
}
export interface UpdateMemberRequestInterface {
	update: {
		teamRole: string
	}
	member_id: string | number
	team_id: string | number
}
export interface UserResponseInterface {
	id: number
	name: string
	surname: string
	token: string
	refreshToken: string
	userType: number
	email?: string
	image?: {
		id: number
		photo: string
		userId: number
		photoDefault: boolean
		__initializer__: any
		__cloner__: any
		__isInitialized__: any
	}
	role?: string[]
}
