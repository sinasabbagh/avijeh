function calcTotalDuration(itinerary) {
  return new Date(itinerary.arrivalDateTime) -
         new Date(itinerary.departureDateTime)
}

export function sortByPrice(state) {
  return state.slice()
    .sort((a,b) => a.agencyPrices[0].price - b.agencyPrices[0].price)
}

export function sortByDuration(state) {
  return state.slice()
    .sort((a,b) =>  calcTotalDuration(a.itineraries[0]) - calcTotalDuration(b.itineraries[0]))
}

export function sortByStop(state) {
  return state.slice()
    .sort((a,b) => a.itineraries[0].stops - b.itineraries[0].stops)
}

export function filterByAirline(state,{ data }) {
  let airline = state.airlines
  let newAirline
  if(data === 'ALL' || airline[0] === 'ALL') {
    newAirline = [data]
  } else if(airline.indexOf(data) > -1) {
    let i = airline.indexOf(data)
    newAirline = airline.length === 1 ? ['ALL'] : airline.slice(0,i) + airline.slice(i + 1)
  } else {
    newAirline = airline.concat(data)
  }
  return Object.assign({}, state, {airlines: newAirline})
}

export function filterByDeparture(state, { data }) {
    let days = state.departures
  let newDays
  if(data === 'ALL' || days[0] === 'ALL') {
    newDays = [data]
  } else if(days.indexOf(data) > -1) {
    let i = days.indexOf(data)
    newDays = days.length === 1 ? ['ALL'] : days.slice(0,i) + days.slice(i + 1)
  } else {
    newDays = days.concat(data)
  }
  return Object.assign({}, state, {departures: newDays})
}

export function filterByPrice(state, { data }) {
    let prices = state.prices
  let newPrices
  if(data === 'ALL' || prices[0] === 'ALL') {
    newPrices = [data]
  } else if(prices.indexOf(data) > -1) {
    let i = prices.indexOf(data)
    newPrices = prices.length === 1 ? ['ALL'] : prices.slice(0,i) + prices.slice(i + 1)
  } else {
    newPrices = prices.concat(data)
  }
  return Object.assign({}, state, {prices: newPrices})
}

export function filterByStops(state, { data }) {
  let stops = state.stops
  let newStops
  if(data === 'ALL' || stops[0] === 'ALL') {
    newStops = [data]
  } else if(stops.indexOf(data) > -1) {
    let i = stops.indexOf(data)
    newStops = stops.length === 1 ? ['ALL'] : stops.slice(0,i) + stops.slice(i + 1)
  } else {
    newStops = stops.concat(data)
  }
  return Object.assign({}, state, {stops: newStops})
}

