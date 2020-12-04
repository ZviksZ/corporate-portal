export interface Socials {
	type: string
	link: string
}
export interface FromTo {
	from: string
	to: string
	status?: string
}
export interface SimpleMember {
	name: string
	id: string
	image: string
}
export interface Team {
	id: string
	name: string
	role: string
	lead: SimpleMember
	members: {
		size: number
		list: SimpleMember[]
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
	teams: Team[]
	additional: {
		lead: SimpleMember
		subordinates: SimpleMember[]
	}
	contractors: string[]
}

export interface ProfileState {
	profileData: ProfileData | null
	isPersonalProfile: boolean
}
