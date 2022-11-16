import {useState, useEffect} from 'react';
import {Box, Typography} from '@mui/material';
import { useParams } from 'react-router-dom';

import { Videos} from './index.js';
import {fetchFromAPI} from '../utils/fetchFromAPI';
const SearchFeed = () => {
	const [videos, setVideos] = useState([]);
    const {searchTerm} = useParams(); //It let you access the parameters of the current route.
	useEffect(()=>{
		fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
    }, [searchTerm]);
	return (
        <Box sx={{ background: '#02626A', pl: 6}}>
            <Typography variant='h4' fontWeight='bold' mb={2} ml={2} pt={2} sx={{color:'lightgray'}}>
               Results for: <span style={{color:'#07C7DB'}}>{searchTerm}</span> videos
            </Typography>
            <Videos videos ={videos} />
        </Box>
	)
}

export default SearchFeed