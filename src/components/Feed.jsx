import {useState, useEffect} from 'react';
import {Box, Stack} from '@mui/material';
import {Sidebar, Videos} from './index.js';
import {fetchFromAPI} from '../utils/fetchFromAPI';
const Feed = () => {
	const [selectedCategory, setSelectedCategory] = useState('New');
	const [videos, setVideos] = useState([]);
	useEffect(()=>{
		fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);
	return (
		<Stack sx={{flexDirection: {sx:'column', md:'row'}, background: '#008080'}}>
			<Box sx={{height:{sx:'auto', md:'92vh'}, borderRight:'1px solid lightgrey' }}>
				<Sidebar 
				selectedCategory={selectedCategory}
				setSelectedCategory={setSelectedCategory}
				 />
			</Box>
			<Box><Videos videos ={videos} /></Box>	
		</Stack>
	)
}

export default Feed