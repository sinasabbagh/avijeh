import React from 'react'
import { connect } from 'react-redux'

import { selectStops } from '../../redux/selectors/filterDataSelectors'
import { doFilterStops } from '../../redux/actions'
import { selectVisibleStops } from '../../redux/selectors/visibilitySelectors'
import { FilterItem, isActive } from './filterItem'

const FilterStopDry = ({ stops, filterStops, visible }) => {
  return(
    <div>
      <h3>Filter Stops</h3>
      {
        stops ?
        <div>
          <FilterItem key={`stopall`}
                      onClick={filterStops}
                      id={'ALL'}
                      content={'All'}
                      active={isActive(visible, 'ALL')}/>

          {stops.map(s => <FilterItem key={`stop${s}`}
                                      onClick={filterStops}
                                      id={s}
                                      content={`${s} stops`}
                                      active={isActive(visible, s)}/>
          )}
        </div>
        : <div>Waiting</div>
      }
    </div>
  )
}

const stopStateToProps = (state) => ({
  stops: selectStops(state),
  visible: selectVisibleStops(state)
})

const stopDispatchToProps = (dispatch) => ({
  filterStops: (id) => dispatch(doFilterStops(id))
})
const FilterStops = connect(stopStateToProps, stopDispatchToProps)(FilterStopDry)

export default FilterStops
