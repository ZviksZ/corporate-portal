import { FromToInterface, StartEndInterface } from '../../profile/contracts/state'
import { LoadingStatus } from '../../../types'

export interface AbsenceCreateInterface {
	absenseType: string
	dateStart: string
	dateEnd: string
	user: number
	status: string
}
export interface AbsenceChangeInterface {
	status: string
	id: number
}

export interface AbsenceItemInterface {
	id: string
	author: string
	name: string
	date: string
	authorImage: string
	status?: string
}
export interface AbsenceDataInterface {
	total: number
	newCount: number
	lastFive: AbsenceItemInterface[]
}
export interface AllAbsenceDataInterface {
	total: number
	newCount: number
	list: AbsenceItemInterface[]
}
export interface AbsenceDetailInterface {
	id: number
	author: string
	authorPosition: string
	name: string
	authorImage: string
	authorId: string
	applicationDates: string
	vacationGraphic: StartEndInterface
	vacationDays: string
	corporateDays: string
}
export interface AbsencesStateInterface {
	LoadingStatus: LoadingStatus
	absences: AbsenceDataInterface | null
	allAbsences: AbsenceItemInterface[] | null
	absenceDetail: AbsenceDetailInterface | null
}
