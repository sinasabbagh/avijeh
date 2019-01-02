import * as type from '../action-types'

const InitFilterData = {
  stops: [],
  departures: [],
  airlines: [],
  prices: []

}

export default function filterReducer(state=InitFilterData, action) {
  switch(action.type) {
  case type.fetch_departures: {
    return Object.assign({}, state, {departures: action.data})
  }
  case type.fetch_prices: {
    return Object.assign({}, state, {prices: action.data})
  }
  case type.fetch_stops: {
    return Object.assign({}, state, {stops: action.data})
  }
  case type.fetch_airlines: {
    return Object.assign({}, state, {airlines: action.data})
  }
  default: return state
  }
}
