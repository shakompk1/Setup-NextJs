import { combineReducers } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  //all Reducer in Project
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
