import { useState } from 'react'
import CountryCardComponent from './country_card.component'

/* TODO: Solo para pruebas */
let countries = new Array(50).fill(
  {
    flag: '🇲🇽',
    name: {
      common: 'Mexico',
      official: 'United Mexican States',
      nativeName: {
        spa: {
          official: 'Estados Unidos Mexicanos',
          common: 'México'
        }
      }
    },
    population: 128932753,
    flags: {
      png: 'https://flagcdn.com/w320/mx.png',
      svg: 'https://flagcdn.com/mx.svg',
      alt: 'The flag of Mexico is composed of three equal vertical bands of green, white and red, with the national coat of arms centered in the white band.'
    },
  }
)

const CountriesComponent = () => {
  const COUNTRY_PER_PAGE = 10
  const [pag, setPag] = useState(1)

  const handleMore = (_) => {
    if(pag * COUNTRY_PER_PAGE < countries.length) {
      setPag(pag+1)
    }
  }

  return (
    <div className='countries-component grid place-items-center gap-24'>
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