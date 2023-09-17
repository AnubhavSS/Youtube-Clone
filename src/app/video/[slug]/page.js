"use client"
import ReactPlayer from 'react-player'
import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import { Typography,Box,Stack } from '@mui/material'
import Videos from '@/components/Videos'
import { fetchFromAPI } from '@/utils/fetchFromAPI'
import { CheckCircle } from '@mui/icons-material'
import '../../styles.css'

const VideoDetails = ({params}) => {
    const id=params.slug
const [videoDetails, setvideoDetails] = useState(null)
const [videos, setvideos] = useState([])
    useEffect(() => {
      fetchFromAPI(`videos?part=contentDetails,snippet,statistics&id=${id}`).
      then((data)=>setvideoDetails(data?.items[0]))

fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
.then((data)=>setvideos(data.items))
    }, [id])
    
if(!videoDetails?.snippet) return <div className="loading-container"><div className="lds-ripple"><div></div><div></div></div></div>
    const {snippet:{title,channelId,channelTitle,description,publishedAt,tags},statistics: {viewCount,likeCount} }=videoDetails
   
    const utcDate = new Date(publishedAt);
    const localDate = utcDate.toLocaleString();
    


    return (
    <Box minHeight={'95vh'}   sx={{backgroundColor:'#000'}} >
       <Stack direction={{xs:'column',md:'row'}}>
<Box flex={1}>
<Box sx={{width:'100%',top:'86px'}}>
  
<ReactPlayer width={'100%'} height={'77vh'} url={`https://www.youtube.com/watch?v=${id}`} controls playing pip={true} /> 
<Typography variant='h5' color={'#fff'} fontWeight={'bold'} p={2}>
    {title}
</Typography>


    <Stack direction={'column'} gap={'20px'} alignItems={'left'}>
    <Stack direction={'row'} justifyContent={'space-between'} sx={{color:'#fff'}} py={1} px={1}>
        <Stack direction={'column'} gap={'10px'}>
    <Link href={`/channel/${channelId}`}>
        <Typography variant={{sm:'subtitle',md:'h6'}} color={'#fff'}>{channelTitle}
        <CheckCircle sx={{fontSize:'12px',color:'gray',ml:'5px'}}/>
        </Typography>
    </Link>
    <Typography variant={{sm:'subtitle',md:'h6'}} color={'#fff'} >Published At:{localDate}</Typography>
    </Stack>
    <Stack direction={'row'} gap={'20px'} alignItems={'center'}>
    <Typography  sx={{opacity:0.7}}>
{parseInt(viewCount).toLocaleString()} views
    </Typography>
    <Typography variant='body1' sx={{opacity:0.7}}>
{parseInt(likeCount).toLocaleString()} likes
    </Typography>
</Stack>
    </Stack>
 
    <Stack direction={'row'} gap={'10px'} flexWrap={'wrap'} >
    {
        tags.map((item)=><Typography key={item} variant={{sm:'subtitle',md:'h6'}} color={'#fff'} >#{item}</Typography>)
    }</Stack>
  


</Stack>
{/* <Typography variant={{sm:'subtitle',md:'h6'}} color={'#fff'}>{description}</Typography> */}


</Box>
</Box>
<Box px={2} py={{md:1,xs:5}} alignItems={'center'} justifyContent={'center'}>

<Videos videos={videos} direction="column"/>
</Box>
       </Stack>

        </Box>
  )
}

export default VideoDetails