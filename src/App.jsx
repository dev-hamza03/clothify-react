import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import ProductDeatils from './Pages/ProductDeatils'

const App = () => {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/product/:id' element={<ProductDeatils />} />
      </Routes>
    </div>
  )
}

export default App
