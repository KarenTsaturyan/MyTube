import React from 'react';
import {Stack, Box} from '@mui/material';
import {VideCard, ChannelCard, Loader} from './'
const Videos = ({videos, direction}) => {
	if(!videos?.length) return <Loader />;
	return (
		<Stack direction={direction || "row"} flexWrap="wrap" gap={2} justifyContent="start">
			{videos.map((item, idx)=>(
				<Box key={idx}>
				{item.id.videoId && <VideCard video={item} />}
				{item.id.channelId && <ChannelCard channelDetail={item} />}
				</Box>
			))}
		</Stack>
	)
}

export default Videos