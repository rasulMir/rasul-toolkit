import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import ItemCard from './ItemCard';
import { IItem } from '../types';

interface Props {
	items : IItem[],
};

export default function Products({ items }: Props) {

	return (
		<Grid container spacing={3}>
			{
				items && items.map((i: IItem) => (
					<Grid item xs={12} sm={6} md={4} key={i.id}>
						<ItemCard {...i} />
					</Grid>
				))
			}
		</Grid>
	)
}