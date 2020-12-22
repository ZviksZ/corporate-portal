import { UnitInterface, UnitDetailInterface, MemberDetailInterface } from '../../units/contracts/state'
import { LoadingStatus } from '../../../types'

export interface SquadMemberInterface {
	name: string
	id: string
	photo: string
	departament?: string
	department?: string
	position: string
	role?: string
}

export interface TeamSquadInterface {
	id: string
	name: string
	lead: SquadMemberInterface
	members: {
		size: number,
		list: SquadMemberInterface[]
	}
}

export interface TeamsStateInterface {
	teams: UnitInterface[] | null
	teamDetail: UnitDetailInterface | null
	teamSquad: UnitDetailInterface | null
	teamSquadSearch: string
	roleFormData: MemberDetailInterface | null
	allMembers: SquadMemberInterface[] | null
	LoadingStatus: LoadingStatus
}
