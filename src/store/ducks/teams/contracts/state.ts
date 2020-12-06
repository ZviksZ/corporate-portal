import { Unit, UnitDetail } from '../../units/contracts/state'

export interface SquadMember {
	name: string
	id: string
	image: string
	department: string
	position: string
	role: string
}

export interface TeamsState {
	teams: Unit[] | null
	teamDetail: UnitDetail | null
	roleFormData: SquadMember | null
}
