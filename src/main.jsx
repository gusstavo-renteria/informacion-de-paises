import React from 'react'
import ReactDOM from 'react-dom/client'

import store from './app/store'
import { Provider } from 'react-redux'

import MainLayout from './layouts/main.layout'

import './styles/global.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={ store }>
    <MainLayout>
      <section>
        <h1>ww4x's-land</h1>
      </section>
    </MainLayout>
  </Provider>
)
