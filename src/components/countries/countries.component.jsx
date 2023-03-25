import { useDispatch, useSelector } from 'react-redux'
import { addPage, COUNTRIES_PER_PAGE } from '../../features/countries.slice'

import CountryCardComponent from './country_card.component'

const CountriesComponent = () => {
  const dispatch = useDispatch()
  const countries = useSelector(store => store.countries)

  const handleMore = (_) => {
      dispatch(addPage())
  }

  return (
    <div className='countries-component grid place-items-center gap-24 pt-[68px]'>
      <div className='container grid gap-20 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center'>
        { countries.listed.data && countries.listed.data.slice(0, COUNTRIES_PER_PAGE * countries.listed.page).map((country, k) => (
          <CountryCardComponent country={ country } key={k}/>
        )) }
      </div>
      <button onClick={ handleMore } className={`bg-black text-white text-4xl px-4 py-1 ${ countries.listed.last_page && 'pointer-events-none opacity-20 select-none' }`}>Mostrar más</button>
    </div>
  )
}

export default CountriesComponent