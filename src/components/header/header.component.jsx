import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchCountry } from '../../features/countries.slice'

const HeaderComponent = () => {
  const dispatch = useDispatch()
  const [scrolled, setScrolled] = useState(false)

  const onSubmitSearch = (e) => {
    e.preventDefault()
    e.target['search-country'].blur()
  } 

  const onChangeSearch = (e) => {
    dispatch(searchCountry(e.target.value))
  }
  
  const handleScroll = (_) => {
    if(scrollY > 0) setScrolled(true)
    else setScrolled(false)
  }

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => {window.removeEventListener('scroll', handleScroll)}
  }, [])
  
  return (
    <header
      className={`w-full fixed z-50 min-h-[48px] top-0 left-0 grid place-items-center transition ${ scrolled ? 'shadow-md backdrop-blur-md' : 'shadow-none' }`}
      >
      <div className='container w-11/12 flex justify-between'>
        <div className='header-container h-c-title flex items-center gap-2'>
          <span className='icon-globe text-4xl'></span>
          <h1 className='text-3xl font-bold'>Países</h1>
        </div>
        <div className='header-container h-c-tools'>
          <form
            onSubmit={ onSubmitSearch }
            className='relative grid place-items-center w-full'
            >
            <input
              type='text'
              onInput={ onChangeSearch }
              id='SEARCH_COUNTRY'
              name='search-country'
              autoComplete='off'
              placeholder='Busca por país'
              className='p-1 pl-9 block rounded-md text-3xl w-full max-w-[200px] md:max-w-[260px] border-2'
              />
            <span className='icon-search absolute left-4 pointer-events-none'></span>
          </form>
        </div>
      </div>
    </header>
  )
}

export default HeaderComponent