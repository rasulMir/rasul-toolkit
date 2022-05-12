import React from 'react';

import { useAppDispatch } from '../../hooks';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { IconButton } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import { delFromCart, minusCart, plusCart } from '../redux/bigStoreSlice';

import { ICartItem } from '../types';


const list = { width: '100%', bgcolor: 'grey' };

interface Props {
	cart: ICartItem[],
};

export default function CartList({ cart }: Props) {
	const dispatch = useAppDispatch();
	return (
		<List sx={list}>
			{
				cart.map((i: ICartItem) => (
					<ListItem key={i.id}
						alignItems="center" dense={true} 
						divider={true}
						secondaryAction={
							<IconButton edge="end" aria-label="delete Item" 
								onClick={() => dispatch(delFromCart(i.id))}
								>
								<DeleteForeverIcon/>
							</IconButton>
						}>
						<ListItemAvatar>
							<Avatar alt="item image" src={i.thumbnail} sizes='lg' />
						</ListItemAvatar>
						<ListItemText
							sx={{ flex: '0 0 25%', overflow: 'hidden' }}
							primary={i.title}
							secondary={
								<>
									<Typography
										sx={{ display: 'inline' }}
										component="span"
										variant="body2"
										color="text.primary"
									>
										Price: {i.price}$
									</Typography>
								</>
							}
						/>
						<IconButton onClick={() => dispatch(plusCart(i.id))}>
							<AddCircleOutlineIcon/>
						</IconButton>
						<ListItemText
							sx={{ flex: '0 1 10%', overflow: 'hidden' }}
							primary={`Amount: ${i.amount}`}
							secondary={
								<>
									<Typography
										sx={{ display: 'inline' }}
										component="span"
										variant="body2"
										color="text.primary"
									>
										Total Price: { i.amount * i.price }$
									</Typography>
								</>
							}/>
						<IconButton onClick={() => dispatch(minusCart(i.id))}>
							<RemoveCircleIcon/>
						</IconButton>

						<Typography sx={{flex: '1 0 30%'}}> {i.description} </Typography>
					</ListItem>
				))
			}
		</List>
	)
}