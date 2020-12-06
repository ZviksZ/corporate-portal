import { Member } from '../../units/contracts/state'

export interface Project {
	id: string
	name: string
	lead: Member
	owner: Member
	wikiLink: string
	jiraLink: string
	members: {
		size: number
		list: Member[]
	}
}
export interface ProjectDetail {}
export interface ProjectsState {
	projects: Project[] | null
	projectDetail: ProjectDetail | null
}
