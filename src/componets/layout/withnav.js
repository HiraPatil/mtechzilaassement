import React from 'react'
import Header from './header/header'
import Footer from './footer/footer'
import {Outlet} from 'react-router-dom'
import Navbar from './navbar/navBar'

export default function Withnav() {
  return (
   <>
   <Navbar/>
   {/* <Header/> */}
   <Outlet/>
   {/* <Footer/> */}
   </>
  )
}
