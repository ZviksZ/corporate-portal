import { FromTo } from '../../profile/contracts/state'

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
export interface NotificationItem {
	id: string
	author: string
	name: string
	date: string
	authorImage: string
}
export interface NotificationData {
	total: number,
	newCount: number,
	lastFive: NotificationItem[]
}
export interface NotificationDetail {
	id: string
	author: string
	authorPosition: string
	name: string
	authorImage: string
	authorId: string
	applicationDates: FromTo
	vacationGraphic: FromTo
	vacationDays: string
	corporateDays: string
}
export interface GlobalState {
	user: User | null
	globalMessage: GlobalMessage | null
	isLoading: boolean,
	notifications: NotificationData | null
	notificationDetail: NotificationDetail | null
}
