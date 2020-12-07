import produce, { Draft } from 'immer'
import { GlobalState } from './contracts/state'
import { GlobalActions } from './actionCreators'
import { GlobalActionsType } from './contracts/actionTypes'

const initialGlobalState: GlobalState = {
	user: null,
	globalMessage: null,
	isLoading: false,
	notifications: null,
	notificationDetail: null
}
export const globalReducer = produce((draft: Draft<GlobalState>, action: GlobalActions) => {
	switch (action.type) {
		case GlobalActionsType.SET_USER:
			draft.user = action.payload
			break
		case GlobalActionsType.SET_GLOBAL_MESSAGE:
			draft.globalMessage = action.payload
			break
		case GlobalActionsType.SET_LOADING:
			draft.isLoading = action.payload
			break
		case GlobalActionsType.SET_NOTIFICATIONS:
			draft.notifications = action.payload
			break
		case GlobalActionsType.SET_NOTIFICATION_DATA:
			draft.notificationDetail = action.payload
			break
		default:
			break
	}
}, initialGlobalState)
