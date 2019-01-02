import React from 'react'
import { connect } from 'react-redux'
import Pagination from "react-js-pagination"

import ResultBox from './resultBox'
import { selectFilteredResults } from '../../redux/selectors/resultsSelectors'

class ResultsViewDry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activePage: 1,
      lowBound: 0,
      upBound: 9
    }
    this.perPage = 10
    this.handlePageChange = this.handlePageChange.bind(this)
  }
  handlePageChange(pageNumber) {
    let activePage = pageNumber
    let lowBound = this.perPage * (activePage - 1)
    let upBound = (this.perPage - 1) + lowBound
    this.setState({
      activePage,
      lowBound,
      upBound
    })
  }
  render() {
    let { results } = this.props
    let { upBound, lowBound } = this.state
    return(
      <div className='result-view'>
        {
          results ?
          <div>
            {results.slice(lowBound, upBound)
                    .map((r,i) =>
                      <ResultBox key={i} r={r} />
                    )}
            <Pagination
              activePage={this.state.activePage}
              itemsCountPerPage={this.perPage}
              totalItemsCount={results.length}
              pageRangeDisplayed={5}
              onChange={this.handlePageChange}
            />
          </div> :
          <div>Loading</div>
        }
      </div>
    )
  }
}

const ResultsStateToProps = (state) => ({
  results: selectFilteredResults(state)
})

const ResultsView = connect(ResultsStateToProps)(ResultsViewDry)

export default ResultsView
