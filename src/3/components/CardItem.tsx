import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import { deleteItemServer } from '../redux/searchSlice';
import { useAppDispatch } from '../../hooks';

interface Props {
	id : number,
	thumbnail: string,
	title : string,
	description : string,
	price : number,
}

export default function CardItem({ thumbnail, title, description, price, id }: Props) {
	const dispatch = useAppDispatch();
	return (
		<Grid item xs={12} md={4} sm={12} xl={3}>
			<Card sx={{ width : '100%' }} color='black'>
				<CardMedia
					component="img"
					height="100"
					image={thumbnail}
					alt="item img"
				/>
				<CardContent>
					<Typography gutterBottom variant="body1" component="div">
						{title}
					</Typography>
					<Typography variant="body2" color="inherit">
						{description}
					</Typography>
					<Typography gutterBottom variant="h5" component="div">
						{price}$
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small" onClick={() => dispatch(deleteItemServer(id))}>Delete</Button>
					<Button size="small">Learn More</Button>
				</CardActions>
			</Card>
		</Grid>
	)
}