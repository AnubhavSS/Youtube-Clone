"use client"

import React from 'react'
import { Button, Stack } from '@mui/material'
import {categories } from '../utils/constants'
import './index.css'


const Sidebar = ({selectedCategory,setselectedCategory}) => {
    
  return (
    <Stack sx={{overflowY:'auto',height:{sx:'auto',md:'95%'}, flexDirection:{md:'column',xs:'row'},color:'white'}}>
{categories.map(item=>
  <button key={item.name} onClick={()=>setselectedCategory(item?.name)}
   className='category-btn'style={{background:item.name===selectedCategory && '#FC1503',color:'white'}} >
    <span style={{color:item.name===selectedCategory ? 'white':'red', marginRight:'15px'}}>{item?.icon}</span>
   <span style={{opacity:item.name===selectedCategory? '1':'0.8'}}>{item?.name}</span>
 
  </button>)}

    </Stack>
  )
}

export default Sidebar