import React from 'react';
import { Typography, Box } from '@mui/material';
import { useAppSelector } from '../../hooks';
import { ICard } from '../redux/storeSlice';

const box = {
	padding : '20px 0',
	display : 'flex',
	justifyContent : 'space-between',
	alignItems : 'center',
}

interface Props {}

export default function TotalPrice({}: Props) {

	const storeData = useAppSelector((state: any) => state.storeApp.storeData);
	let totalPrice = storeData.reduce((acc : number, i : ICard) => acc + (i.amount * i.price), 0);
	return (
		<Box sx={box}>
			<Typography variant='body1' component='span'>
				ОБЩАЯ ЦЕНА:
			</Typography>
			<Typography variant='h4' component='span'>
				{ totalPrice }$
			</Typography>
		</Box>
	)
}