import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './rootReducer'
import rootSaga from './saga'
import { GlobalStateInterface } from './ducks/global/contracts/state'
import { ProfileStateInterface } from './ducks/profile/contracts/state'
import { UnitsStateInterface } from './ducks/units/contracts/state'
import { TeamsStateInterface } from './ducks/teams/contracts/state'
import { ProjectsStateInterface } from './ducks/projects/contracts/state'
import { NotificationsStateInterface } from './ducks/notifications/contracts/state'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const sagaMiddleware = createSagaMiddleware()

export interface RootStateInterface {
	global: GlobalStateInterface
	profile: ProfileStateInterface
	units: UnitsStateInterface
	teams: TeamsStateInterface
	projects: ProjectsStateInterface
	notifications: NotificationsStateInterface
}

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)
