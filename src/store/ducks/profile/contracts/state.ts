import { UnitInterface } from '../../units/contracts/state'
import { LoadingStatus } from '../../../types'

export interface SocialsInterface {
	type: string
	link: string
}
export interface FromToInterface {
	dateStart: string
	dateEnd: string
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
export interface ContractorInterface {
	name: string
}
export interface ProfileDataInterface {
	id: number
	name: string
	surname: string
	patronymic: string
	userType: string
	position: string
	department: string
	gender?: 'm' | 'f'
	photo: string
	worktime: {
		employment: FromToInterface[]
		openTasksLink: string
		vacationApplicationLink: string
		vacation: FromToInterface[]
		vacationDays: string
		corporateDays: string
	}
	contacts: {
		birthday: string
		showBirthYear: string
		email: string
		mobilePhone: string
		inPhone: string
		employmentDate: string
		tshirtSize: string
		sshKeys: string[]
	}
	teams: UnitInterface[]
	additional: {
		lead: SimpleMemberUnitInterface
		subordinates: SimpleMemberUnitInterface[],
		contractors: ContractorInterface[]
	}
}

export interface ProfileStateInterface {
	profileData: ProfileDataInterface | null
	isPersonalProfile: boolean
	LoadingStatus: LoadingStatus
}
