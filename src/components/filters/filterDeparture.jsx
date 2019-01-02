import React from 'react'
import { connect } from 'react-redux'

import { selectAllDays } from '../../redux/selectors/filterDataSelectors'
import { doFilterDeparture } from '../../redux/actions'
import { FilterItem, isActive } from './filterItem'
import { selectVisibleDepartures } from '../../redux/selectors/visibilitySelectors'
const FilterDepartureDry = ({ allDays, handleChange, visible }) => {
  return(
    <div>
      <h3>Filter Departure Time</h3>
      {
        allDays ?
        <div>
          <FilterItem key={'dateall'}
                      onClick={handleChange}
                      id={'ALL'}
                      content={"All"}
                      active={isActive(visible, 'ALL')}/>
          {allDays.map((s) => <FilterItem key={`date${s}`}
                                          onClick={handleChange}
                                          id={s}
                                          content={`${s.split('T')[0]}, ${s.split('T')[1]}`}
                                          active={isActive(visible, s)}/>
          )}
        </div> :
        <div>Waiting</div>
      }
    </div>
  )
}

const DepartureStateToProps = (state) => ({
  allDays: selectAllDays(state),
  visible: selectVisibleDepartures(state)
})
const DepartureDispatchToProps = (dispatch) => ({
  handleChange: (val) => dispatch(doFilterDeparture(val))
})
const FilterDeparture = connect(DepartureStateToProps,DepartureDispatchToProps)(FilterDepartureDry)

export default FilterDeparture
