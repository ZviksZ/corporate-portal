import { FromToInterface, SimpleMemberUnitInterface } from '../../profile/contracts/state'
import { SquadMemberInterface } from '../../teams/contracts/state'
import { LoadingStatus } from '../../../types'

export interface UserInterface {
	id: string
	name: string
	surname: string
	token: string
	userType: string
	email: string
	image: string
}
export interface GlobalMessageInterface {
	text: string
	type: 'success' | 'info' | 'warning' | 'error' | undefined
}
export interface NotificationItemInterface {
	id: string
	author: string
	name: string
	date: string
	authorImage: string
}
export interface NotificationDataInterface {
	total: number,
	newCount: number,
	lastFive: NotificationItemInterface[]
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
export interface SearchResultsInterface {
	members: SimpleMemberUnitInterface[] | null
	units: SimpleMemberUnitInterface[] | null
	teams: SimpleMemberUnitInterface[] | null
	projects: SimpleMemberUnitInterface[] | null
}
export interface GlobalStateInterface {
	user: UserInterface | null
	globalMessage: GlobalMessageInterface | null
	LoadingStatus: LoadingStatus
	notifications: NotificationDataInterface | null
	notificationDetail: NotificationDetailInterface | null
	searchResults: SearchResultsInterface | null
}
