import { MemberDetailInterface } from '../../units/contracts/state'
import { LoadingStatus } from '../../../types'

export interface ProjectInterface {
	id: string
	name: string
	lead: MemberDetailInterface | null
	owner: MemberDetailInterface | null
	wikilink: string | null
	members: {
		size: number
		list: MemberDetailInterface[]
	}
}
export interface ProjectDetailInterface {
	id: string
	name: string
	wikilink: string | null
	lead: MemberDetailInterface | null
	owner: MemberDetailInterface | null
	members: {
		size: number
		list: MemberDetailInterface[]
	}
}
export interface ProjectsStateInterface {
	projects: ProjectInterface[] | null
	projectDetail: ProjectDetailInterface | null
	LoadingStatus: LoadingStatus
}
