import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import themeReducer from '../features/theme.slice'
import countriesReducer from '../features/countries.slice'

export default configureStore({
  reducer: {
    theme: themeReducer,
    countries: countriesReducer,
  },
}, applyMiddleware(thunk))