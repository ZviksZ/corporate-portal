import { all } from 'redux-saga/effects'
import { globalSaga } from './ducks/global/sagas'
import { profileSaga } from './ducks/profile/sagas'
import { unitsSaga } from './ducks/units/sagas'
import { teamsSaga } from './ducks/teams/sagas'
import { projectsSaga } from './ducks/projects/sagas'

export default function* rootSaga() {
	yield all([globalSaga(), profileSaga(), unitsSaga(), teamsSaga(), projectsSaga()])
}
