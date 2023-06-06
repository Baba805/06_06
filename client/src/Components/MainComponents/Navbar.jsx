import React from 'react'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function Navbar() {
  return (
    <ul style={{display : 'flex', justifyContent : 'space-around'}}>
    <Button sx={{ my: 2, color: 'white', display: 'block' }}> <Link style={{textDecoration : 'none'}} to='/basket'> Basket </Link> </Button>
    <Button sx={{ my: 2, color: 'white', display: 'block' }}> <Link style={{textDecoration : 'none'}} to='/home'> Home </Link> </Button>
    <Button sx={{ my: 2, color: 'white', display: 'block' }}> <Link style={{textDecoration : 'none'}} to='/login'> Login </Link> </Button>
    <Button sx={{ my: 2, color: 'white', display: 'block' }}> <Link style={{textDecoration : 'none'}} to='/products'> Products </Link> </Button>
    <Button sx={{ my: 2, color: 'white', display: 'block' }}> <Link style={{textDecoration : 'none'}} to='/register'> Register </Link> </Button>

  </ul>
  )
}

export default Navbar