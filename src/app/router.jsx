import { lazy, Suspense } from 'react'

import {
  createBrowserRouter,
} from 'react-router-dom'

const HomeView = lazy(() => import('../views/home/home.view.jsx'))
const NotFoundView = lazy(() => import('../views/not_found/not_found.view.jsx'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Suspense fallback={ <p>Cargando...</p> }> <HomeView /> </Suspense>
  },
  {
    path: '*',
    element: <Suspense fallback={ <p>Cargando...</p> }> <NotFoundView /> </Suspense>
  }
])

export default router