import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TodoLayer } from './context/TodoContext.jsx'
import Reducer, { initialState } from './context/Reducer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <TodoLayer initialState={initialState} Reducer={Reducer}>
    <App />
  </TodoLayer>
)
