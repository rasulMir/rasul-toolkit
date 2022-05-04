import React from 'react';

import { Typography, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import { addToCart } from '../redux/storeSlice';
import { useAppDispatch } from '../redux/hooks';

interface Props {
	id : string,
	img : string,
	name : string,
	price : number
};

export default function Items({ id, img, name, price }: Props) {
	const dispatch = useAppDispatch();
	return (
		<Card>
      <CardMedia
        component="img"
        alt="item image"
        height="140"
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          { name }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          { price }$
        </Typography>
      </CardContent>
      <CardActions>
        <Button
					size="small"
					onClick={() => dispatch(addToCart(id))}
					>
					Add To Cart
				</Button>
      </CardActions>
    </Card>
	)
}