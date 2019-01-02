import * as type from './action-types.js'

export function doFetchResults(data) {
  return {
    type: type.fetch_results,
    data
  }
}

export function doFetchDepartures(data) {
  return {
    type: type.fetch_departures,
    data
  }
}

export function doFetchAirlines(data) {
  return {
    type: type.fetch_airlines,
    data
  }
}

export function doFetchStops(data) {
  return {
    type: type.fetch_stops,
    data
  }
}

export function doFetchPrices(data) {
  return {
    type: type.fetch_prices,
    data
  }
}

export function doSortPrices() {
  return {
    type: type.sort_price
  }
}

export function doSortDuration() {
  return {
    type: type.sort_duration
  }
}

export function doSortStops() {
  return {
    type: type.sort_stops
  }
}

export function doFilterDeparture(data) {
  return {
    type: type.filter_departure,
    data
  }
}

export function doFilterStops(data) {
  return {
    type: type.filter_stops,
    data
  }
}

export function doFilterAirline(data) {
  return {
    type: type.filter_airline,
    data
  }
}

export function doFilterPrices(data) {
  return {
    type: type.filter_price,
    data
  }
}
