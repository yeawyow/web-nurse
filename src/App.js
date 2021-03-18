import React from 'react'
import Footer from './components/fragments/Footer'
import Header from './components/fragments/Header'
import Navbar from './components/fragments/Navbar'
import Home from './components/pages/Home'
export default function App() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Home/>
      <Footer/>
      
    </div>
  )
}
