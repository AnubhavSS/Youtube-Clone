"use client"

import React,{useState,useEffect} from 'react'
import { Box } from '@mui/material'
import Videos from '../../../components/Videos'
import ChannelCard from '../../../components/ChannelCard'
import { fetchFromAPI } from '@/utils/fetchFromAPI'
const ChannelDetail = ({params}) => {
const [channelDetail, setchannelDetail] = useState(null)
const [videos, setvideos] = useState([]) 
const id=(params.slug)

  useEffect(() => {
   fetchFromAPI(`channels?part=snippet&id=${id}`).then((data)=>setchannelDetail(data?.items[0]))
  
   fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data)=>setvideos(data?.items))
  }, [id])


  console.log(videos)
  return (
    <Box minHeight={'95vh'} sx={{backgroundColor:'#000'}}>
   <Box>
    <div style={{background: "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,59,121,1) 35%, rgba(0,212,255,1) 100%)",zIndex:10,height:'300px'}}/>
    <ChannelCard channelDetail={channelDetail} marginTop='-110px'/>
   </Box>
 <Box display={'flex'} p={'2'}>
<Box sx={{mr:{sm:'100px'}}}/>
<Videos videos={videos}/>
 
 </Box>
      </Box>
  )
}

export default ChannelDetail