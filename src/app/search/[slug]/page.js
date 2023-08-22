"use client"

import React, { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import Videos from '@/components/Videos'
import { fetchFromAPI } from '@/utils/fetchFromAPI'
const SearchFeed = ({params}) => {
   const searchTerm=params.slug
    const [videos, setvideos] = useState([])
    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
            .then((data) => { setvideos(data.items) })
    }, [searchTerm])

    

    return (
        <Box p={2} sx={{ overflowY: 'auto', height: '92vh', flex: 2,backgroundColor:'#000' }} >
            <Typography variant='h4' fontWeight={'bold'} mb={2} sx={{ color: 'white' }}>
             Search Result for: <span style={{ color: '#F31503' }}>{searchTerm.split("%20").toString().replace(/,/g, ' ')}</span> videos
            </Typography>
            <Videos videos={videos} />
        </Box>
    )
}

export default SearchFeed