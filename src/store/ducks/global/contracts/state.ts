import { FromToInterface, SimpleMemberUnitInterface } from '../../profile/contracts/state'
import { SquadMemberInterface } from '../../teams/contracts/state'
import { LoadingStatus } from '../../../types'

export interface UserInterface {
	id: string
	name: string
	surname: string
	token: string
	userType: string
	email?: string
	image?: string
}
export interface GlobalMessageInterface {
	text: string
	type: 'success' | 'info' | 'warning' | 'error' | undefined
}
export interface SearchResultsInterface {
	members: SimpleMemberUnitInterface[] | null
	units: SimpleMemberUnitInterface[] | null
	teams: SimpleMemberUnitInterface[] | null
	projects: SimpleMemberUnitInterface[] | null
}
export interface GlobalStateInterface {
	user: UserInterface | null
	globalMessage: GlobalMessageInterface | null
	LoadingStatus: LoadingStatus
	searchResults: SearchResultsInterface | null
}
