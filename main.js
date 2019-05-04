import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './src/AppRouter'
import { Provider } from 'react-redux'
import store from './src/store'

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
)
