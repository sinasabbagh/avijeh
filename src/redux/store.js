import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'

import allSagas from './saga'
import rootReducer from './reducers/reducers'

const saga = createSagaMiddleware()
const logger = createLogger()
export const store = createStore(rootReducer,
                                 undefined,
                                 applyMiddleware(saga,logger))
saga.run(allSagas)
