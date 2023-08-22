import React from 'react'
import {logo} from '../utils/constants'
import { Stack, Typography } from '@mui/material'
import Link from 'next/link'
import SearchBar from './SearchBar'
const Navbar = () => {
  return (
    <Stack direction={'row'} alignItems={'center'} p={2} sx={{position:'sticky', background:'#000',top:0,justifyContent:'space-between',border:0}}>
   <Link href={'/'} style={{display:'flex',alignItems:'center'}} >
    <img src={logo} alt='logo' height={'45'}/>
    <Typography variant='h4' fontWeight={'bold'} mb={2} sx={{color:'white'}}>
         A <span style={{color:'#F31503'}}>Tube</span>
        </Typography>
   </Link>
   
   <SearchBar/>
    </Stack>
  )
}

export default Navbar