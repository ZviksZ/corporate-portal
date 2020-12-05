import { Unit, UnitDetail } from '../../units/contracts/state'

export interface TeamsState {
	teams: Unit[] | null
	teamDetail: UnitDetail | null
}
