import { useDispatch } from 'react-redux'
import { initCountries } from '../features/countries.slice'

import HeaderComponent from '../components/header/header.component'
import { useEffect } from 'react'

const MainLayout = ({ children }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initCountries())
  }, [])

  return (
    <main>
      <HeaderComponent />
      
      { children /* Vistas */}
    </main>
  )
}

export default MainLayout