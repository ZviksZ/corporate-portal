import { FromToInterface } from '../../profile/contracts/state'
import { LoadingStatus } from '../../../types'

export interface NotificationItemInterface {
	id: string
	author: string
	name: string
	date: string
	authorImage: string
}
export interface NotificationDataInterface {
	total: number
	newCount: number
	lastFive: NotificationItemInterface[]
}
export interface AllNotificationDataInterface {
	total: number
	newCount: number
	list: NotificationItemInterface[]
}
export interface NotificationDetailInterface {
	id: string
	author: string
	authorPosition: string
	name: string
	authorImage: string
	authorId: string
	applicationDates: FromToInterface
	vacationGraphic: FromToInterface
	vacationDays: string
	corporateDays: string
}
export interface NotificationsStateInterface {
	LoadingStatus: LoadingStatus
	notifications: NotificationDataInterface | null
	allNotifications: AllNotificationDataInterface | null
	notificationDetail: NotificationDetailInterface | null
}
