import { Unit } from '../../units/contracts/state'
import { LoadingStatus } from '../../../types'

export interface Socials {
	type: string
	link: string
}
export interface FromTo {
	from: string
	to: string
	status?: string
}
export interface SimpleMemberUnit {
	name: string
	id: string
	image?: string
}
export interface Team {
	id: string
	name: string
	role: string
	lead: SimpleMemberUnit
	members: {
		size: number
		list: SimpleMemberUnit[]
	}
}
export interface Application {
	name: string
	status: string
}

export interface ProfileData {
	id: string
	name: string
	surname: string
	patronymic: string
	userType: string
	position: string
	department: string
	socials: Socials[]
	image: string
	worktime: {
		employment: FromTo[]
		openTasksLink: string
		vacationApplicationLink: string
		vacation: FromTo
		vacationDays: string
		corporateDays: string
		applications: Application[]
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
	teams: Unit[]
	additional: {
		lead: SimpleMemberUnit
		subordinates: SimpleMemberUnit[]
	}
	contractors: string[]
}

export interface ProfileState {
	profileData: ProfileData | null
	isPersonalProfile: boolean
	LoadingStatus: LoadingStatus
}
