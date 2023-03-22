const CountryCardComponent = ({ country }) => {
  return (
    <div className='country-card grid w-full rounded-md overflow-hidden drop-shadow-md'>
      <div className='c-card container relative grid place-items-center'>
        
        <img
          src={ country.flags.png }
          alt={ country.flags.alt }
          className='object-cover max-w-[320px] min-h-[100px]'
        />

        <p className='absolute bottom-4 text-2xl rounded-sm text-white font-bold bg-black px-4 py-1'>{ country.name.common }</p>
        <p className='absolute top-0 right-0 bg-black text-white px-4 py-1 flex gap-2 items-center text-xl'>
          <span className='icon-users'></span>
          { country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }
        </p>
      </div>
    </div>
  )
}

export default CountryCardComponent