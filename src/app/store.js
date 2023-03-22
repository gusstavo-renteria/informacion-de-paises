import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../features/theme.slice'
import countriesReducer from '../features/countries.slice'

export default configureStore({
  reducer: {
    theme: themeReducer,
    countries: countriesReducer,
  },
})