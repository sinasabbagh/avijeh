import React from 'react'
import { connect } from 'react-redux'

import { selectAllPrices } from '../../redux/selectors/filterDataSelectors'
import { doFilterPrices } from '../../redux/actions'
import { selectVisiblePrices } from '../../redux/selectors/visibilitySelectors'
import { FilterItem, isActive } from './filterItem'

const FilterPriceDry = ({ allPrices, handleChange, visible }) => {
  return(
    <div>
      <h3>Filter Price</h3>
      {
        allPrices ?
        <div>
          <FilterItem key={'priceall'}
                      onClick={handleChange}
                      id={'ALL'}
                      content={"All"}
                      active={isActive(visible, 'ALL')}/>
          {allPrices.map((s) => <FilterItem key={`price${s}`}
                                            onClick={handleChange}
                                            id={s}
                                            content={`${s} Rls`}
                                            active={isActive(visible, s)}/>
          )}
        </div> :
        <div>Waiting</div>
      }
    </div>
  )
}
const PriceStateToProps = (state) => ({
  allPrices: selectAllPrices(state),
  visible: selectVisiblePrices(state)
})
const PriceDispatchToProps = (dispatch) => ({
  handleChange: (val) => dispatch(doFilterPrices(val))
})
const FilterPrice = connect(PriceStateToProps, PriceDispatchToProps)(FilterPriceDry)


export default FilterPrice
