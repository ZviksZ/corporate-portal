import { ProfileDataInterface, SimpleMemberUnitInterface } from '../../profile/contracts/state'
import { LoadingStatus } from '../../../types'

export interface UserImageObjectInterface {
	id: number
	photo: string
	userId: number
	photoDefault: boolean
	__initializer__: any
	__cloner__: any
	__isInitialized__: any
}
export interface UserFullInterface {
	id: number
	name: string
	surname: string
	token: string
	refreshToken: string
	userType: number
	email?: string
	image?: UserImageObjectInterface
	role?: string[]
}

export interface UserInterface {
	id: number
	role: string
}

export interface GlobalMessageInterface {
	text: string
	type: 'success' | 'info' | 'warning' | 'error' | undefined
}
export interface SearchResultsInterface {
	members?: SimpleMemberUnitInterface[] | null
	units?: SimpleMemberUnitInterface[] | null
	teams?: SimpleMemberUnitInterface[] | null
	projects?: SimpleMemberUnitInterface[] | null
	contractor?: SimpleMemberUnitInterface[] | null
}
export interface GlobalStateInterface {
	user: UserInterface | null
	userProfile: ProfileDataInterface | null
	globalMessage: GlobalMessageInterface | null
	LoadingStatus: LoadingStatus
	searchResults: SearchResultsInterface | null
}
