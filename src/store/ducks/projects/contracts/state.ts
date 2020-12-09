import { MemberDetail } from '../../units/contracts/state'
import { LoadingStatus } from '../../../types'

export interface Project {
	id: string
	name: string
	lead: MemberDetail
	owner: MemberDetail
	wikiLink: string
	jiraLink: string
	members: {
		size: number
		list: MemberDetail[]
	}
}

/**
 * Интерфейс для подразделений и команд(детальная страница)
 */
export interface ProjectDetail {
	id: string
	name: string
	wikiLink: string
	jiraLink: string
	lead: MemberDetail
	owner: MemberDetail
	members: {
		size: number
		list: MemberDetail[]
	}
}
export interface ProjectsState {
	projects: Project[] | null
	projectDetail: ProjectDetail | null
	LoadingStatus: LoadingStatus
}
