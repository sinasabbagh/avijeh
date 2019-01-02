import { combineReducers } from 'redux'

import resultsReducer from './resultsReducer'
import visibilityReducer from './visibilityReducer'
import filterReducer from './filterReducer'

const rootReducer = combineReducers({
  ResultsState: resultsReducer,
  VisibleState: visibilityReducer,
  FilterDataState: filterReducer
})

export default rootReducer
