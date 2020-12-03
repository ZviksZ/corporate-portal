export interface User {
	id: string
	name: string
	surname: string
	token: string
	userType: string
	email: string
	image: string
}
export interface GlobalMessage {
	text: string
	type: 'success' | 'info' | 'warning' | 'error' | undefined
}

export interface GlobalState {
	user: User | null
	globalMessage: GlobalMessage | null
	isLoading: boolean
}
