import '@babel/polyfill'

export async function readResults(results) {
  let parsed = await fetch(results).then(function(res) {
    return res.json()
  }).then(function(res) {
    return res.model.flightDeals
  })
  return parsed
}

export const readAirlines = ({ ResultsState: results }) => {
  return results.map((a) =>
    a.itineraries[0].segments[0].airlineTitle)
                .filter((a,i,self) => self.indexOf(a) === i)
}

export const readDepartures = ({ ResultsState: results }) => {
  return results.map((a) => a.itineraries[0].departureDateTime)
                .filter((a,i,self) => self.indexOf(a) === i)
}

export const readStops = ({ ResultsState: results }) => {
  return results.map((a) => a.itineraries[0].stops)
                .filter((a,i,self) => self.indexOf(a) === i)
}

export const readPrices = ({ ResultsState: results }) => {
  return results.map((a) => a.agencyPrices[0].price)
                .filter((a,i,self) => self.indexOf(a) === i)
}
