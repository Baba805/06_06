import React from 'react';
import {Outlet} from 'react-router-dom'
import Navbar from '../Components/MainComponents/Navbar';
import Footer from '../Components/MainComponents/Footer';

function MainRooter() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default MainRooter