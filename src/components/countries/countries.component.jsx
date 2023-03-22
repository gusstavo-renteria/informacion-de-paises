import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCountries } from '../../features/countries.slice'

import CountryCardComponent from './country_card.component'

const CountriesComponent = () => {
  const dispatch = useDispatch()
  const countries = useSelector(store => store.countries.current)

  const COUNTRY_PER_PAGE = 18
  const [pag, setPag] = useState(1)

  const handleMore = (_) => {
    if(pag * COUNTRY_PER_PAGE < countries.length) {
      setPag(pag+1)
    }
  }

  const loadCountries = async () => {
    const rest_countries = await axios.get('https://restcountries.com/v3.1/all')
    dispatch(setCountries(rest_countries.data))
  }

  useEffect(() => {
    loadCountries()
  }, [])

  return (
    <div className='countries-component grid place-items-center gap-24 pt-[68px]'>
      <div className='container grid gap-20 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center'>
        { countries && countries.slice(0, COUNTRY_PER_PAGE * pag).map((country, k) => (
          <CountryCardComponent country={ country } key={k}/>
        )) }
      </div>
      <button onClick={ handleMore } className={`bg-black text-white text-4xl px-4 py-1 ${ pag * COUNTRY_PER_PAGE >= countries.length && 'pointer-events-none opacity-20 select-none' }`}>Mostrar más</button>
    </div>
  )
}

export default CountriesComponent