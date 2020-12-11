import { UnitInterface } from '../../units/contracts/state'
import { LoadingStatus } from '../../../types'

export interface SocialsInterface {
	type: string
	link: string
}
export interface FromToInterface {
	from: string
	to: string
	status?: string
}

export interface BusyPeriodsInterface {
	id: number
	exchange_id: string
	user_id: string
	dateTimeStart: string
	dateTimeEnd: string
}
export interface SimpleMemberUnitInterface {
	name: string
	id: string
	photo?: string
}
export interface TeamInterface {
	id: string
	name: string
	role: string
	lead: SimpleMemberUnitInterface
	members: {
		size: number
		list: SimpleMemberUnitInterface[]
	}
}
export interface ApplicationInterface {
	name: string
	status: string
}

export interface ProfileDataInterface {
	id: string
	name: string
	lastName: string
	middleName: string
	userType: string
	position: string
	department: string
	gender?: 'm' | 'f'
	socials: SocialsInterface[]
	photo: string
	worktime: {
		employment: FromToInterface[]
		openTasksLink: string
		vacationApplicationLink: string
		vacation: FromToInterface
		vacationDays: string
		corporateDays: string
		applications: ApplicationInterface[]
	}
	contacts: {
		birthDate: string
		showBirthYear: string
		email: string
		mobile: string
		phone: string
		hireDate: string
		size: string
		sshKeys: string[]
	}
	teams: UnitInterface[]
	additional: {
		lead: SimpleMemberUnitInterface
		subordinates: SimpleMemberUnitInterface[]
	}
	contractors: string[]
}

export interface ProfileStateInterface {
	profileData: ProfileDataInterface | null
	isPersonalProfile: boolean
	LoadingStatus: LoadingStatus
}
