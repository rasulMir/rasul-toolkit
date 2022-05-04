import { Container, Grid } from '@mui/material';
import React from 'react';
import { useAppSelector } from '../redux/hooks';
import { ICard } from '../redux/storeSlice';
import Items from './Items';

interface Props {}

export default function Products({}: Props) {
	const storeData = useAppSelector( (store: any) => store.storeApp.storeData );
	return (
		<Container maxWidth='md' sx={{padding : '15px 0'}}>
			<Grid container rowSpacing={2} columnSpacing={2}>
				{
					storeData.map((i: ICard) => (
						<Grid item key={i.id} xs={4}>
							<Items {...i}/>
						</Grid>
					))
				}
			</Grid>
		</Container>
	)
}