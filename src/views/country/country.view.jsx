import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CountryView = () => {
  const { country_name } = useParams()
  const [country, setCountry] = useState(null) 

  const loadCountry = async () => {
    const res_country = await axios.get(`https://restcountries.com/v3.1/name/${ country_name }?fullText=true`)
    console.log(res_country?.data[0])
    setCountry(res_country?.data[0])
  }

  useEffect(() => {
    loadCountry()
  }, [])

  const CountryParam = ({ icon, title, value }) => {
    return (
      <p className='flex items-center gap-4'>
        <span className={ `${ icon } text-4xl block w-[1ch]` }></span>
        <div>
          <p className='text-xl opacity-60'>{ title }</p>
          <span>
            { value }
          </span>
        </div>
      </p>
    )
  }

  return (
    <section id='COUNTRY'
      className='bg-gray-100 p-10 grid gap-4 my-[48px]'
      >
      {
        country && (
          <>
          <h2 className='text-4xl font-bold w-full flex gap-4'><span>{ country.flag }</span>{ country.name.common }</h2>

          <div className='card grid md:flex gap-8 items-start'lex-wrap>
            <div className='country-container grid gap-6'>
              <img
                src={ country.flags.png }
                alt={ country.flags.alt }
                className=''
                />
            </div>

            <div className='country-container w-full flex justify-around gap-10 text-2xl'>
              <div className='row grid gap-8 content-start'>
                <CountryParam icon='icon-users' title='Población' value={ country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') } />
                <CountryParam icon='icon-compass' title='Región' value={ country.region } />
                <CountryParam icon='icon-language' title='Idiomas' value={ Object.values( country.languages ).join(', ') } />
              </div>

              <div className='row grid gap-8 content-start'>
                <CountryParam icon='icon-certificate' title='Capital' value={ country.capital[0] } />
                <CountryParam icon='icon-money' title='Monedas' value={ Object.keys( country.currencies ).join(', ') } />
              </div>
            </div>
          </div>
          </>
        )
      }
    </section>
  )
}

export default CountryView