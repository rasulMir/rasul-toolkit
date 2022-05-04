import React from 'react';
import { useAppSelector } from '../redux/hooks';

import { Container, Divider, Typography } from '@mui/material';
import ItemsTable from './ItemsTable';
import { ICard } from '../redux/storeSlice';

interface Props {}

export default function Cart({}: Props) {
	
	const storeData = useAppSelector((state: any) => state.storeApp.storeData);
	return (
		<Container maxWidth='md'>
			<ItemsTable/>
			<Divider/>
			<Typography
				variant='body2'
				component='span'
			>
				ОБЩАЯ ЦЕНА { storeData.reduce((acc : number, i : ICard) => acc + (i.amount * i.price), 0) }
			</Typography>
		</Container>
	)
}
