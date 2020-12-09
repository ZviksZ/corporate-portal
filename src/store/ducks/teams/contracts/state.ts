import { Unit, UnitDetail } from '../../units/contracts/state'
import { LoadingStatus } from '../../../types'

export interface SquadMember {
	name: string
	id: string
	image: string
	department: string
	position: string
	role?: string
}

export interface TeamSquad {
	id: string
	name: string
	lead: SquadMember
	members: {
		size: number,
		list: SquadMember[]
	}
}

export interface TeamsState {
	teams: Unit[] | null
	teamDetail: UnitDetail | null
	teamSquad: TeamSquad | null
	teamSquadSearch: string
	roleFormData: SquadMember | null
	allMembers: SquadMember[] | null
	LoadingStatus: LoadingStatus
}
