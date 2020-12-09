import { MemberDetailInterface } from '../../units/contracts/state'
import { LoadingStatus } from '../../../types'

export interface ProjectInterface {
	id: string
	name: string
	lead: MemberDetailInterface
	owner: MemberDetailInterface
	wikiLink: string
	jiraLink: string
	members: {
		size: number
		list: MemberDetailInterface[]
	}
}
export interface ProjectDetailInterface {
	id: string
	name: string
	wikiLink: string
	jiraLink: string
	lead: MemberDetailInterface
	owner: MemberDetailInterface
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
