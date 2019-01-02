import '@babel/polyfill'
import { call, put, all, select } from 'redux-saga/effects'

import { readResults, readAirlines, readDepartures, readStops, readPrices } from './selectors/sagaSelectors'
import { doFetchResults, doFetchDepartures, doFetchAirlines, doFetchStops, doFetchPrices } from './actions'

export default function* allSagas() {
  try{
    const results = yield call(readResults, ['results.json'])
    yield put(doFetchResults(results))

    const {departures, stops, prices, airlines} = yield all({
      departures: select(readDepartures),
      stops: select(readStops),
      prices: select(readPrices),
      airlines: select(readAirlines)
    })

    yield put(doFetchAirlines(airlines))
    yield put(doFetchDepartures(departures))
    yield put(doFetchStops(stops))
    yield put (doFetchPrices(prices))
  } catch(e) {
    yield put({type:'ERROR_RESULT_FETCH', message: e})
  }
}
