import { FromTo } from '../../profile/contracts/state'
import { LoadingStatus } from '../../../types'

export interface MemberDetail {
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
/**
 * Интерфейс для подразделений и команд
 */
export interface Unit {
	id: string
	name: string
	lead: MemberDetail
	role?: string
	main?: string | null
	mainName?: string | null
	parent?: string | null
	parentName?: string | null
	members: {
		size: number
		list: MemberDetail[]
	}
	subUnits?: Unit[] | null
}
/**
 * Интерфейс для подразделений и команд(детальная страница)
 */
export interface UnitDetail {
	id: string
	name: string
	lead: MemberDetail
	main?: string | null
	mainName?: string | null
	parent?: string | null
	parentName?: string | null
	members: {
		size: number
		list: MemberDetail[]
	}
	subUnits?: Unit[] | null
}

export interface UnitsState {
	units: Unit[] | null
	unitDetail: UnitDetail | null
	LoadingStatus: LoadingStatus
}
