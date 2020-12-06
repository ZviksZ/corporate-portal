import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './rootReducer'
import rootSaga from './saga'
import { GlobalState } from './ducks/global/contracts/state'
import { ProfileState } from './ducks/profile/contracts/state'
import { UnitsState } from './ducks/units/contracts/state'
import { TeamsState } from './ducks/teams/contracts/state'
import { ProjectsState } from './ducks/projects/contracts/state'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const sagaMiddleware = createSagaMiddleware()

export interface RootState {
	global: GlobalState
	profile: ProfileState
	units: UnitsState
	teams: TeamsState
	projects: ProjectsState
}

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)
