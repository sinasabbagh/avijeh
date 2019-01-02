import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { store } from './redux/store'
import ResultsView from './components/results/resultsView'
import SortView from './components/sorts/sortView'
import FilterView from './components/filters/filterView'

const App = () => {
  return(
    <div className="app">
      <SortView />
      <ResultsView />
      <FilterView />
    </div>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main')
)
