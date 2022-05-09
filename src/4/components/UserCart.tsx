import {  useMemo } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Container, IconButton, Box } from '@mui/material';
import { ICartItem } from '../types';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { delFromCart, minusCart, plusCart } from '../redux/bigStoreSlice';

const list = { width: '100%', bgcolor: 'grey' };


export default function UserCart() {

	const { cart } = useAppSelector((state: any) => state.bigStore);
	const dispatch = useAppDispatch();

	const totalPrice:number = useMemo(() => cart.reduce((acc: number, i: ICartItem) => acc + (i.amount * i.price), 0), [cart]);

	if (!cart.length) {
		return <Typography variant='h4' sx={{textAlign: 'center'}}> Empty </Typography>;
	}

  return (
		<Container maxWidth='lg'>
			<List sx={list}>
				{
					cart.map((i: ICartItem) => (
						<ListItem 
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
											Total Price: { i.amount * i.price }
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
			<Box sx={{
				padding: '20px',
				display : 'flex',
				alignItems : 'center',
				justifyContent: 'flex-start',
			}}>
				<Typography variant='body1' component='div' sx={{ mr: '10px' }}>
					Total Price:
				</Typography>
				<Typography variant='h5' component='div'>
					${totalPrice}
				</Typography>
			</Box>
		</Container>
  );
}
