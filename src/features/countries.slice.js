import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const COUNTRIES_PER_PAGE = 18

export const initCountries = createAsyncThunk('countries/init',
  async () => {
    const all_countries = await axios.get('https://restcountries.com/v3.1/all')
    return all_countries.data
  }
)

export const countrySlice = createSlice({
  name: 'countries',
  initialState: {
    all: [],
    listed: {
      page: 1,
      data: [],
      filter: null,
      last_page: false
    }
  },
  reducers: {
    addPage: state => {
      if(COUNTRIES_PER_PAGE * state.listed.page < state.listed.data.length) {
        state.listed.page          = state.listed.page + 1
        state.listed.last_page     =  COUNTRIES_PER_PAGE * state.listed.page >= state.listed.data.length
      }
      else state.listed.last_page = true
    },

    setFilter: (state, action) => {
      state.listed.page = 1
      state.listed.data = state.all.filter(country => country.region.toLowerCase() == action.payload.toLowerCase())
      state.listed.filter = action.payload
      state.listed.last_page = false
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(initCountries.fulfilled, (state, action) => {
        state.all         = action.payload

        state.listed.page = 1
        state.listed.data = action.payload
        state.listed.filter = null
        state.listed.last_page = false
      })
  }
})

export const { addPage, setFilter } = countrySlice.actions
export default countrySlice.reducer