import React from 'react';

import { Link } from 'react-router-dom';
import { Box, Typography, ButtonGroup, Button } from '@mui/material';


const box = {
	display : 'flex',
	justifyContent : 'space-between',
	alignItems : 'center',
}

interface Props {}

export default function SignLinks({}: Props) {
	return (
		<ButtonGroup variant="text" aria-label="text button group" color='inherit'>
			<Button>
				<Link to='/signup'>Sign Up</Link>
			</Button>
			<Button>
				<Link to='/signin'>Sign In</Link>
			</Button>
		</ButtonGroup>
	)
}