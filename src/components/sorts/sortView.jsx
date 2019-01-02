import React from 'react'
import { connect } from 'react-redux'

import { doSortPrices, doSortDuration, doSortStops } from '../../redux/actions'

const SortViewDry = ({ sortPrice, sortDuration, sortStops }) => {
  return(
    <div className="sort-view">
      <h3>Sort</h3>
      <div className='filter-item' onClick={sortPrice}>Cheapest First</div>
      <div className='filter-item' onClick={sortDuration}>Least Duration First</div>
      <div className='filter-item' onClick={sortStops}>Least Stops First</div>
    </div>
  )
}

const SortDispatchToProps = (dispatch) => ({
  sortPrice: () => dispatch(doSortPrices()),
  sortDuration: () => dispatch(doSortDuration()),
  sortStops: () => dispatch(doSortStops())
})

const SortView = connect(null, SortDispatchToProps)(SortViewDry)

export default SortView
