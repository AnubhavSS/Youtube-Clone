"use client"
import React,{useState} from 'react'
import { useRouter } from 'next/navigation';
import { Paper,IconButton,TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import './index.css'

const SearchBar = () => {
  const router=useRouter()
  const [searchTerm, setsearchTerm] = useState('')

  const handleSubmit=(e)=>{
e.preventDefault()
if(searchTerm)
{
  router.push(`/search/${searchTerm}`)
  setsearchTerm('')
}
  }

  return (
  <Paper component={'form'} onSubmit={handleSubmit} sx={{borderRadius:20, border:'1px solid #e3e3e3',pl:2,boxShadow:'none',mr:{sm:5}}}>
<input className='search-bar' placeholder='Search...' value={searchTerm}
   onChange={(e)=>setsearchTerm(e.target.value)}/>
  
   <IconButton type='submit' sx={{p:'10px',color:'red'}}
   ><SearchIcon/></IconButton>
  </Paper>
  )
}

export default SearchBar