import React from 'react'
import { Box,Typography,CardMedia,CardContent } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import Link from 'next/link'
import { demoProfilePicture } from '@/utils/constants'
const ChannelCard = ({channelDetail,marginTop}) => {
  return (
   <Box sx={{boxShadow:'none',borderRadius:'20px ',display:'flex',justifyContent:'center',alignItems:'center',width:{xs:'356px',md:'320px',height:'326px', margin:'auto',marginTop:marginTop}}}>
<Link href={`/channel/${channelDetail?.id?.channelId}`}>
<CardContent sx={{display:'flex',flexDirection:'column',
justifyContent:'center',textAlign:'center',color:'#fff'}}>
<CardMedia sx={{mb:2,borderRadius:'50%',width:'180px',height:'180px',border:'1px solif #e3e3e3'}} image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}/>
<Typography variant='h6'>
{channelDetail?.snippet?.title}
</Typography>
{channelDetail?.statistics?.subscriberCount &&
<Typography>
  {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscriber
</Typography>
}
</CardContent>
</Link>
   </Box>
  )
}

export default ChannelCard