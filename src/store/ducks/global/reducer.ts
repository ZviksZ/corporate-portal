import produce, { Draft } from 'immer'
import { GlobalStateInterface } from './contracts/state'
import { GlobalActions } from './actionCreators'
import { GlobalActionsType } from './contracts/actionTypes'
import { LoadingStatus } from '../../types'

const initialGlobalState: GlobalStateInterface = {
	user: null,
	globalMessage: null,
	LoadingStatus: LoadingStatus.NEVER,
	notifications: null,
	notificationDetail: null,
	searchResults: null,
}
export const globalReducer = produce((draft: Draft<GlobalStateInterface>, action: GlobalActions) => {
	switch (action.type) {
		case GlobalActionsType.SET_USER:
			draft.user = action.payload
			draft.LoadingStatus = LoadingStatus.SUCCESS
			break
		case GlobalActionsType.SET_GLOBAL_MESSAGE:
			draft.globalMessage = action.payload
			break
		case GlobalActionsType.SET_LOADING_STATE:
			draft.LoadingStatus = action.payload
			break
		case GlobalActionsType.SET_NOTIFICATIONS:
			draft.notifications = action.payload
			break
		case GlobalActionsType.SET_NOTIFICATION_DATA:
			draft.notificationDetail = action.payload
			break
		case GlobalActionsType.SET_SEARCH:
			draft.searchResults = action.payload
			break
		default:
			break
	}
}, initialGlobalState)
