import HeaderComponent from '../components/header/header.component'

const MainLayout = ({ children }) => {
  return (
    <main>
      <HeaderComponent />
      
      { children /* Vistas */}
    </main>
  )
}

export default MainLayout