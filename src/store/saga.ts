import { all } from 'redux-saga/effects'
import { globalSaga } from './ducks/global/sagas'
import { profileSaga } from './ducks/profile/sagas'

export default function* rootSaga() {
	yield all([globalSaga(), profileSaga()])
}
