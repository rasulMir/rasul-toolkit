import React from 'react';
import { Button, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const btn = { 
	alignItems : 'center'
}

const box = {
	display : 'flex',
	justifyContent : 'center',
	alignItems : 'center',
	m : '10px 0'
}

interface Props {}

export default function BackMainPage({}: Props) {
	const navigator = useNavigate();
	return (
		<Box sx={box}>
			<Button
				onClick={() => navigator('/')}
				variant='outlined'
				color='success'
				sx={btn}
			>
				Back To Main Page
			</Button>
		</Box>
	)
}