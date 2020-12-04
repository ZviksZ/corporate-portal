import { FromTo } from '../../profile/contracts/state'

export interface Member {
	name: string
	id: string
	image: string
	employment?: FromTo[]
	position?: string
	openTasksLink?: string
	email?: string
	mobilePhone?: string
	slackEmail?: string
}
export interface Unit {
	id: string
	name: string
	lead: Member
	role?: string
	main?: string | null
	mainName?: string | null
	parent?: string | null
	parentName?: string | null
	members: {
		size: number
		list: Member[]
	}
	subUnits?: Unit[] | null
}
export interface UnitDetail {
	id: string
	name: string
	lead: Member
	main?: string | null
	mainName?: string | null
	parent?: string | null
	parentName?: string | null
	members: {
		size: number
		list: Member[]
	}
	subUnits?: Unit[] | null
}

export interface UnitsState {
	units: Unit[] | null
	unitDetail: UnitDetail | null
}
