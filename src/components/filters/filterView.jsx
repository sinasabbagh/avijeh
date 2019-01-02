import React from 'react'
import FilterStops from './filterStop'
import FilterAirlines from './filterAirline'
import FilterPrice from './filterPrice'
import FilterDeparture from './filterDeparture'

const FilterView = () => {
  return(
    <div className="filter-view">
      <FilterStops />
      <FilterDeparture />
      <FilterAirlines />
      <FilterPrice />
    </div>
  )
}

export default FilterView
