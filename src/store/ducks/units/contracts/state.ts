import { FromToInterface, StartEndInterface } from '../../profile/contracts/state'
import { LoadingStatus } from '../../../types'

export interface MemberDetailInterface {
	name: string
	id: string
	photo: string
	employment?: FromToInterface[]
	departament?: string
	position?: string
	openTasksLink?: string
	email?: string
	mobilePhone?: string
	phone?: string
	slackEmail?: string
	role?: string
}
export interface UnitInterface {
	id: string
	name: string
	lead: MemberDetailInterface
	role?: string
	main?: string | null
	mainName?: string | null
	parent?: string | null
	parentName?: string | null
	members: {
		size: number
		list: MemberDetailInterface[]
	}
	subUnits?: UnitInterface[] | null
}
export interface UnitDetailInterface {
	id: string
	name: string
	lead: MemberDetailInterface
	main?: string | null
	mainName?: string | null
	parent?: string | null
	parentName?: string | null
	members: {
		size: number
		list: MemberDetailInterface[]
	}
	subUnits?: UnitInterface[] | null
}

export interface UnitsStateInterface {
	units: UnitInterface[] | null
	unitDetail: UnitDetailInterface | null
	LoadingStatus: LoadingStatus
}
