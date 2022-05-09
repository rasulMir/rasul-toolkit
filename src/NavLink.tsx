import { Box, ButtonGroup, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';

const box = {
	maxWidth : '1000px',
	margin : '0 auto',
	padding : '10px',
	display : 'flex',
	justifyContent : 'space-between',
	alignItems : 'center',
	flexWrap : 'wrap',
	'& > button' : { mb : '10px' }
}

interface Props {};

export default function NavLink({}: Props) {
	return (
		<Box sx={box}>

			<Button variant='contained' color='success'>
				<Link to='todo'> ReduxToolkit ToDo </Link>
			</Button>

			<Button variant='contained' color='success'>
				<Link to='storeapp'> ReduxToolkit Store </Link>
			</Button>

			<Button variant='contained' color='success'>
				<Link to='thunkapp'> ReduxToolkit Thunk Store </Link>
			</Button>
			
			<Button variant='contained' color='success'>
				<Link to='bigapp'> ReduxToolkit BigStore </Link>
			</Button>

		</Box>
	);
};