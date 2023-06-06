import React from 'react'
import Navbar from '../Components/AdminComponents/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/AdminComponents/Footer'

function AdminRooter() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default AdminRooter