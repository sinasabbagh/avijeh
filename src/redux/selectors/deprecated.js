import curry from 'lodash.curry'
import isEmpty from 'lodash.isempty'

const selectDay = (range, state) => {
  let { FilterDataState: data } = state
  let func = Math[range]
  let arr = !isEmpty(data) ? data.departures
                                 .map((d) => Date.parse(d)) : []
  return func(...arr)
}
export const selectDayMax = curry(selectDay)('max')
export const selectDayMin = curry(selectDay)('min')

const selectPrice = (range, state) => {
  let { FilterDataState: data } = state
  let func = Math[range]
  let arr = !isEmpty(data) ? data.prices : []
  return func(...arr)
}
export const selectPriceMin = curry(selectPrice)('min')
export const selectPriceMax = curry(selectPrice)('max')
