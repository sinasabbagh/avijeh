import { createSelector } from 'reselect'
import intersection from 'lodash.intersection'

import * as visibility from './visibilitySelectors'
import * as filter from './filterSelectors'

export const selectResults = (state) => state.ResultsState

export const selectFilteredResults = createSelector(
  [selectResults,
   visibility.selectVisibleAirlines,
   visibility.selectVisibleStops,
   visibility.selectVisibleDepartures,
   visibility.selectVisiblePrices],
  (r, a, s, d, p) => {
    let airlineRange = filter.filterByAirline(r,a)
    let dayRange = filter.filterByDeparture(r,d)
    let stopRange = filter.filterByStops(r,s)
    let priceRange = filter.filterByPrice(r,p)
    let arrLength = [airlineRange.length,
                     dayRange.length,
                     stopRange.length,
                     priceRange.length]

    let i = arrLength.some((e) => e === 0) ? [] :
            intersection(r, airlineRange, dayRange, stopRange, priceRange)
      return i
    }
  )
