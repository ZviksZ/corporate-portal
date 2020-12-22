import { FromToInterface, StartEndInterface } from '../../profile/contracts/state'
import { LoadingStatus } from '../../../types'

export interface AbsenceCreateInterface {
	absenseType: string
	dateStart: string
	dateEnd: string
	user: number
	status: string
}

export interface AbsenceItemInterface {
	id: string
	author: string
	name: string
	date: string
	authorImage: string
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
	id: string
	author: string
	authorPosition: string
	name: string
	authorImage: string
	authorId: string
	applicationDates: StartEndInterface
	vacationGraphic: StartEndInterface
	vacationDays: string
	corporateDays: string
}
export interface AbsencesStateInterface {
	LoadingStatus: LoadingStatus
	absences: AbsenceDataInterface | null
	allAbsences: AllAbsenceDataInterface | null
	absenceDetail: AbsenceDetailInterface | null
}
