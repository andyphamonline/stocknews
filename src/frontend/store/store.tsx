import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import searchReducer from '../components/search/searchSlice'
import allSagas from '../sagas/sagas'

const sagaMiddleware = createSagaMiddleware()

export default configureStore({
  reducer: {
    searchWord: searchReducer,
  },
  middleware: [...getDefaultMiddleware(), sagaMiddleware],
})

sagaMiddleware.run(allSagas)
