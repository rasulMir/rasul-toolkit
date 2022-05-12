import React from 'react';
import { Typography, Box, Button } from '@mui/material';
const box = {
	padding: '20px',
	display : 'flex',
	alignItems : 'center',
	justifyContent: 'space-around',
};
interface Props {
	totalPrice: number,
	handleBuy: () => void,
};

export default function CartBttm({totalPrice, handleBuy}: Props) {
	return (
		<Box sx={box}>
			<div>
				<Typography variant='body1' component='span' sx={{ mr: '10px' }}>
					Total Price:
				</Typography>
				<Typography variant='h5' component='span'>
					${totalPrice}
				</Typography>
			</div>
			<Button
				variant='contained'
				color='success'
				size='large'
				onClick={handleBuy}
				>
					Buy 
			</Button>
		</Box>
	)
};