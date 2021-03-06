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
	name?: string
}
export interface StartEndInterface {
	dateStart: string
	dateEnd: string
	status?: string
}
export interface BusyPeriodsInterface {
	id: number
	exchange_id: string
	member_id: string
	dateTimeStart: string
	dateTimeEnd: string
}

export interface ArrayItemsInterface<T> {
	status: string
	data: T
}

export interface SimpleMemberUnitInterface {
	name: string
	id: string
	photo?: string | undefined
}

export interface ContractorSearchInterface {
	name: string
	id: string
	users?: SimpleMemberUnitInterface[]
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
	departmentId?: number
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
		slackStatus?: string,
		emailPersonal: string,
		google: string,
		skype: string,
		telegram: string,
		vk: string,
		yandex: string,
		facebook: string,
		busy: string
	}
	teams: ArrayItemsInterface<UnitInterface>[]
	additional: {
		lead: SimpleMemberUnitInterface
		subordinates: ArrayItemsInterface<SimpleMemberUnitInterface>[],
		contractors: ContractorInterface[]
	}
}

export interface ProfileStateInterface {
	profileData: ProfileDataInterface | null
	isPersonalProfile: boolean
	LoadingStatus: LoadingStatus
}
