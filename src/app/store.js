import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../features/theme.slice'

export default configureStore({
  reducer: {
    theme: themeReducer,
  },
})