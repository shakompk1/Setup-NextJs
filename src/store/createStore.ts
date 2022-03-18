import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import createSagaMiddleware, { Task } from 'redux-saga'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { Store, AnyAction } from 'redux'

import rootReducer, { RootState } from './rootReducer'
import rootSaga from './rootSaga'

export interface SagaStore extends Store<RootState, AnyAction> {
  sagaTask: Task
}

// reducer wrapper for reconciliation store
const reducer = (state: RootState | undefined, action: AnyAction): RootState => {
  if (action.type === HYDRATE) {
    return {
      ...action.payload, // apply delta from hydration
      ...state, // use previous state
    }
  } else {
    return rootReducer(state, action)
  }
}

const makeStore = (): SagaStore => {
  const sagaMiddleware = createSagaMiddleware()
  const store = configureStore({
    reducer,
    middleware: [
      ...getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [],
        },
        thunk: false,
      }),
      sagaMiddleware,
    ],
  })

  ;(store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga)

  return store as SagaStore
}

export const wrapper = createWrapper(makeStore, { debug: false })
