import React from 'react'
import { connect } from 'react-redux'

import { selectAirlines } from '../../redux/selectors/filterDataSelectors'
import { doFilterAirline } from '../../redux/actions'
import { selectVisibleAirlines } from '../../redux/selectors/visibilitySelectors'
import { FilterItem, isActive } from './filterItem'

const FilterAirlineDry = ({ airlines, filterAirlines, visible }) => {
  return(
    <div>
      <h3>Filter Airlines</h3>
      {
        airlines ?
        <div>
          <FilterItem key={`airlinesall`}
                      onClick={filterAirlines}
                      id={'ALL'}
                      content={'All'}
                      active={isActive(visible, 'ALL')}/>


          {airlines.map(s => <FilterItem key={`airlines${s}`}
                                         onClick={filterAirlines}
                                         id={s}
                                         content={s}
                                         active={isActive(visible, s)}/>

          )}
        </div>
        : <div>Waiting</div>
      }
    </div>
  )
}

const airlinesStateToProps = (state) => ({
  airlines: selectAirlines(state),
  visible: selectVisibleAirlines(state)
})

const airlinesDispatchToProps = (dispatch) => ({
  filterAirlines: (id) => dispatch(doFilterAirline(id))
})
const FilterAirlines = connect(airlinesStateToProps, airlinesDispatchToProps)(FilterAirlineDry)

export default FilterAirlines
