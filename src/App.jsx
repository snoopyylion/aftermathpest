import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer/Footer'
import Services from './Pages/Services/Services'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <div>
      <Navbar/>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/company' element={<Services/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App