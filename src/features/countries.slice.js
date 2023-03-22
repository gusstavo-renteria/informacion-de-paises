import { createSlice } from '@reduxjs/toolkit'

export const countrySlice = createSlice({
  name: 'countries',
  initialState: {
    current: []
  },
  reducers: {
    setCountries: (state, action) => {
      if(Array.isArray(action.payload)) state.current = action.payload 
    }
  }
})

export const { setCountries } = countrySlice.actions
export default countrySlice.reducer