import { useState } from 'react'

import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar'
import Home from './component/Home';
import ProductListning from './component/ProductListning';
import Footer from './component/Footer';
import {Provider }from 'react-redux'
import store from './redux/store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Provider store={store}>
    <Navbar />
    <ProductListning />
    <Footer/>
    </Provider>
    </BrowserRouter>
    </>
  )
}

export default App
