import { createSlice } from '@reduxjs/toolkit'

export const THEMES = {
  DARK: {
    name: 'dark-theme',
    next: 'LIGHT'
  },
  LIGHT: {
    name: 'light-theme',
    next: 'DARK'
  }
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: THEMES.DARK,
  },
  reducers: {
    toggleTheme: (state) => {
      state.value = THEMES[state.value.next]
    }
  }
})

export const { toggleTheme } = themeSlice.actions
export default themeSlice.reducer