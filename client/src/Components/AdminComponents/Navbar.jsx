import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <ul style={{display : 'flex', justifyContent : 'space-around'}}>
    <Button sx={{ my: 2, color: 'white', display: 'block' }}> <Link style={{textDecoration : 'none'}} to='/admin/basket'> Basket </Link> </Button>
    <Button sx={{ my: 2, color: 'white', display: 'block' }}> <Link style={{textDecoration : 'none'}} to='/admin/home'> Home </Link> </Button>
    <Button sx={{ my: 2, color: 'white', display: 'block' }}> <Link style={{textDecoration : 'none'}} to='/admin/login'> Login </Link> </Button>
    <Button sx={{ my: 2, color: 'white', display: 'block' }}> <Link style={{textDecoration : 'none'}} to='/admin/products'> Products </Link> </Button>
    {/* <Button sx={{ my: 2, color: 'white', display: 'block' }}> <Link style={{textDecoration : 'none'}} to='/admin/register'> Register </Link> </Button> */}

  </ul>
  )
}

export default Navbar