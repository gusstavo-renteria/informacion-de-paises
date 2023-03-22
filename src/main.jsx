import React from 'react'
import ReactDOM from 'react-dom/client'

import store from './app/store'
import { Provider } from 'react-redux'

import router from './app/router'
import { RouterProvider } from 'react-router-dom'

import MainLayout from './layouts/main.layout'

import './icons/icomoon/icomoon.css'
import './styles/global.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={ store }>
    <MainLayout>
      <RouterProvider router={ router } />
    </MainLayout>
  </Provider>
)
