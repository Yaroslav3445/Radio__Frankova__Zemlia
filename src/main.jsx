import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Context from './components/Context.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/Radio__Frankova__Zemlia/'>
      <Context>
        <App />
      </Context>
    </BrowserRouter>
  </React.StrictMode>,
)
