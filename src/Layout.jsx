import React from 'react'
import { Outlet } from "react-router-dom"
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Input } from './Input/Input'
const Layout = () => {
  return (
    <>
        <Header/>
        <Input/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
