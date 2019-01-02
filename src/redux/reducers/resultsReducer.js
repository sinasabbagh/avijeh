import * as type from '../action-types'
import * as helper from './helpers'

export default function resultsReducer(state=[], action) {
  switch(action.type) {
  case type.fetch_results: {
    return action.data
  }
  case type.sort_price: {
    return helper.sortByPrice(state)
  }
  case type.sort_duration: {
    return helper.sortByDuration(state)
  }
  case type.sort_stops: {
    return helper.sortByStop(state)
  }
  default: return state
  }
}
