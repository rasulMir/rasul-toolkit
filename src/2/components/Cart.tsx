import React from 'react';
import { useAppSelector } from '../../hooks';

import { Container, Divider, Typography } from '@mui/material';
import ItemsTable from './ItemsTable';
import { ICard } from '../redux/storeSlice';
import TotalPrice from './TotalPrice';

interface Props {}

export default function Cart({}: Props) {
	

	return (
		<Container maxWidth='md'>
			<ItemsTable/>
			<Divider/>
			<TotalPrice/>
		</Container>
	)
}
