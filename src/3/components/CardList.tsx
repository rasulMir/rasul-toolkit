import React, { useEffect, useState } from 'react';
import  { Grid, Card, Typography, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import { fetchItems, IItem } from '../redux/searchSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import CardItem from './CardItem';

interface Props {}

export default function CardList({}: Props) {

	const { items, status, error } = useAppSelector((state: any) => state.searchAsync);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchItems());
	}, []);

	const loading = <Typography component='span' variant='h2'>Please Wait Loading...</Typography>;

	return (
		<Grid 
			container
			spacing={1}
		>
			{
				status === 'loading' ? loading :
					items.map((i: IItem) => (
						<CardItem 
							key={i.id}
							id={i.id}
							thumbnail={i.thumbnail}
							title={i.title} 
							description={i.description}
							price={i.price}/>
					))
			}
		
		</Grid>
	)
}