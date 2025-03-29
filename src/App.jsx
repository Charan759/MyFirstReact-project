import React from 'react'
import Landingpage from './suby/pages/Landingpage'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import ProductMenu from './suby/components/ProductMenu'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<Landingpage />} />
        <Route path='/products/:firmId/:firmName' element = {<ProductMenu />} />
      </Routes>
        
    </div>
    
  )
}

export default App
