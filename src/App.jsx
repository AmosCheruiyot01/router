import { useState } from 'react'

import './App.css'
import Home from './pages/home'
import Footer from './components/footer'
import Header from './components/head'
import Pages from './pages/pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './pages/not'
import About from './pages/about'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      

      <BrowserRouter>
      <Header/>
      <Routes>
        {/* home page */}
        <Route path='/' element={<Home/>}></Route>
        {/* blogs page */}
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/pages' element={<Pages/>}/>
        
        
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
