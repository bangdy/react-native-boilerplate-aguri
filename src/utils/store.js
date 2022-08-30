import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import appReducer from 'slices/app.slice'
import logger from 'redux-logger'

const rootReducer = combineReducers({
  app: appReducer,
  // add more reducers
})

const defaultMiddleware = getDefaultMiddleware({
  serializableCheck: false,
  immutableCheck: false,
})

const store = configureStore({
  reducer: rootReducer,
  // eslint-disable-next-line no-undef
  middleware: __DEV__ ? defaultMiddleware.concat(logger) : defaultMiddleware,
})

export default store
