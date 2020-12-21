import { combineReducers } from 'redux'
import { globalReducer } from './ducks/global/reducer'
import { profileReducer } from './ducks/profile/reducer'
import { unitsReducer } from './ducks/units/reducer'
import { teamsReducer } from './ducks/teams/reducer'
import { projectsReducer } from './ducks/projects/reducer'
import { absencesReducer } from './ducks/absences/reducer'

export const rootReducer = combineReducers({
	global: globalReducer,
	profile: profileReducer,
	units: unitsReducer,
	teams: teamsReducer,
	projects: projectsReducer,
	absences: absencesReducer,
})
