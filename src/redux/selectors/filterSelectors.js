export function filterByPrice(results, pricing) {
  return (pricing[0] === 'ALL') ?
         results : results.filter((a) => {
           let agencyPrice = a.agencyPrices[0].price
           return pricing.indexOf(`${agencyPrice}`) > -1
         })
}

export function filterByDeparture(results, day) {
  return (day[0] === 'ALL') ?
         results : results.filter((a) => {
           let departure = a.itineraries[0].departureDateTime
           return day.indexOf(departure) > -1
         })
}

export function filterByAirline(results, airlines) {
  return (airlines[0] === 'ALL') ? results :
         results.filter((r) => {
           let airline = r.itineraries[0].segments[0].airlineTitle
           return airlines.indexOf(airline) > -1
         })
}

export function filterByStops(results, stops) {
  return (stops[0] === 'ALL') ? results :
         results.filter((a) => {
           let stop = a.itineraries[0].stops
           return stops.indexOf(stop) > -1
         })
}
