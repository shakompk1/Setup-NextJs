import { all, fork } from 'redux-saga/effects'
import { SagaIterator } from '@redux-saga/core'

const sagas = [
  //all Saga in Project
]

export default function* rootSaga(): SagaIterator {
  yield all(sagas.flat().map((saga) => fork(saga)))
}
