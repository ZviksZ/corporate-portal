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
export interface SimpleMemberUnitInterface {
	name: string
	id: string
	image?: string
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
	surname: string
	patronymic: string
	userType: string
	position: string
	department: string
	socials: SocialsInterface[]
	image: string
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
		subordinates: SimpleMemberUnitInterface[]
	}
	contractors: string[]
}

export interface ProfileStateInterface {
	profileData: ProfileDataInterface | null
	isPersonalProfile: boolean
	LoadingStatus: LoadingStatus
}
