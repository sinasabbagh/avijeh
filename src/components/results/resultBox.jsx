import React from 'react'

function timeSplit(time) {
  let split = time.split('T')
  return `${split[0]}, ${split[1]}`
}

function convertToHours(milliSec) {
  let hours = parseInt(milliSec / (1000 * 60 * 60))
  let remainder = milliSec - hours * 1000 * 60 * 60
  let minutes = parseInt(remainder / (1000 * 60))
  let hourText = hours === 0 ? '' : `${hours} hours`
  let minutesText = minutes === 0 ? '' : `${minutes} minutes`
  let andText = (hourText && minutesText) ? ` and ` : ''
  return hourText + andText + minutesText
}

function waitTime(segments, i) {
  let current = segments[i+1].departureDateTime
  let past = segments[i].arrivalDateTime
  let wait = Date.parse(current) - Date.parse(past)
  return convertToHours(wait)
}

const ResultBox = ({ r }) => {
  let itinerary = r.itineraries[0]
  let agency = r.agencyPrices[0]
  let segments = itinerary.segments
  let iterSegments = segments.slice(1)

  return(
    <section className='result-box' >
      <h2>{segments[0].airlineTitle}</h2>
      <h5>Flight Number {segments[0].flightNumber}</h5>
      <div>
        <div className='result-end'>
          <h4> From {itinerary.departureCityTitle}</h4>
          <h5> Depart at {timeSplit(itinerary.departureDateTime)}</h5>
        </div>
        <div className='result-end'>
          <h4> To {itinerary.arrivalCityTitle}</h4>
          <h5> Arrive at {timeSplit(itinerary.arrivalDateTime)}</h5>
        </div>
      </div>
      <div>
        {iterSegments.length > 0 ? iterSegments.map((s,i) =>
          <div className='results-end' key={i}>
            <h4>Stops at {s.departureAirportLocationTitle}</h4>
            <h5> for {waitTime(segments,i)}</h5>
          </div>
        ) : <div></div>}
      </div>
      <div className='result-price'>Price {agency.price.toLocaleString()} Rls</div>
      <div className="result-buy"><a href={agency.url}>Buy Tickets</a></div>
    </section>

  )
}

export default ResultBox
