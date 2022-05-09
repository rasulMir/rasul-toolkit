
import { useState } from 'react';

import { Snackbar, Alert } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SignLinks from './SignLinks';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addToCart, delFromCart } from '../redux/bigStoreSlice';


interface Props {
	id: number,
	title: string,
	description: string,
	price: number,
	category: string,
	thumbnail: string,
};

export default function ItemCard({
	thumbnail,
	price,
	description,
	id,
	category,
	title,
}: Props) {

	const { currentUser } = useAppSelector((state: any) => state.bigStore);
	const dispatch = useAppDispatch();
	const [isAdd, setIsAdd] = useState<boolean>(false);
	const [isDel, setIsDel] = useState<boolean>(false);

	const add = (): void => {
		dispatch(addToCart(id));
		setIsAdd(true);
	}

	const del = (): void => {
		dispatch(delFromCart(id));
		setIsDel(true);
	}

  return (<>
    <Card sx={{ width: '100%' }}>
      <CardMedia
        component="img"
        alt="item image"
        height="140"
        image={thumbnail}
      />
      <CardContent>
        <Typography gutterBottom variant="body1" component="div">{ title }</Typography>
        <Typography gutterBottom variant="h5" component="div">${ price }</Typography>
        <Typography variant="body2" color="text.secondary">{ description }</Typography>
        <Typography  variant="body2" textAlign='right' component="div">Category: { category }</Typography>
      </CardContent>
			
			<CardActions>
			{
				currentUser ? 
				(	<>
						<Button size="small" onClick={add}>
							Add To Cart 
							<AddShoppingCartIcon sx={{ml : '8px'}}/>
						</Button>
						<Button size="small" color='error'  onClick={del}>
							Delete From Cart
							<DeleteForeverIcon sx={{ml : '8px'}} />
						</Button>
					</>) : <SignLinks/>
			}
			</CardActions>
    </Card>
		<Snackbar open={isAdd} autoHideDuration={2000} onClose={() => setIsAdd(false)}>
			<Alert onClose={() => setIsAdd(false)} severity="success" sx={{ minWidth: '100px' }} variant="filled">
				Item Successfully Added
			</Alert>
		</Snackbar>
		<Snackbar open={isDel} autoHideDuration={2000} onClose={() => setIsDel(false)}>
			<Alert onClose={() => setIsDel(false)} severity="error" sx={{ minWidth: '100px' }} variant="filled">
				Item Deleted
			</Alert>
		</Snackbar>
	</>);
}
