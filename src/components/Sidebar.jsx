import {Stack} from '@mui/material';
import {categories} from '../utils/constants.js';


const Sidebar = ({selectedCategory,setSelectedCategory}) => (
		<Stack direction="row" sx={{overflowY:'auto', height:{sx:'auto', md:'95%'},
		flexDirection:{md:'column'},
		background:'#008080',
		borderBottom: '1px solid lightgrey'
	}}
		>
		{categories.map((category)=>(
			<button className="category-btn"
			onClick = {() => setSelectedCategory(category.name)}
			style = {{
				background: category.name === selectedCategory && '#FC1503', color: 'white'
			}}
			>
				<span>{category.icon}</span>
				<span>{category.name}</span>
			</button>
			
			))}
		</Stack>
		
	)


export default Sidebar