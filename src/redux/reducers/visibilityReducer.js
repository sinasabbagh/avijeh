import * as type from '../action-types'
import * as helper from './helpers'

const InitVisible = {
  stops: ['ALL'],
  departures: ['ALL'],
  airlines: ['ALL'],
  prices: ['ALL']
}

export default function visibilityReducer(state=InitVisible, action) {
  switch(action.type) {
  case type.filter_airline: {
    return helper.filterByAirline(state,action)
  }
  case type.filter_price: {
    return helper.filterByPrice(state,action)
  }
  case type.filter_departure: {
    return helper.filterByDeparture(state,action)
  }
  case type.filter_stops: {
    return helper.filterByStops(state,action)
  }
  default: return state
  }
}
