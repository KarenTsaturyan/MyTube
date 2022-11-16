import { Stack } from '@mui/material';
import {Link } from 'react-router-dom';
import {logo} from '../utils/constants.js';
import SearchBar from './SearchBar.jsx';

const Navbar = () =>(
		<Stack direction="row" alignItems="center" p={2} sx={{
		position: 'sticky', 
		background: 'radial-gradient( circle farthest-corner at 10% 20%,  rgba(0,152,155,1) 0.1%, rgba(0,94,120,1) 94.2% )',
		top:0
	}}
		>
			<Link to="" style={{
			display:'flex', 
			alignItem:'center'
			}}>
				<img src={logo} alt="logo" height={45}/>
			</Link>
			<SearchBar />
		</Stack>
	)

export default Navbar