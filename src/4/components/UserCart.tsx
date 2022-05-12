import {  useMemo, useState } from 'react';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, IconButton, Box } from '@mui/material';
import { ICartItem } from '../types';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { buyItems } from '../redux/bigStoreSlice';
import AlertDialog from './AlertDialog';
import CartList from './CartList';
import CartBttm from './CartBttm';



export default function UserCart() {

	const { cart } = useAppSelector((state: any) => state.bigStore);
	const dispatch = useAppDispatch();
	const [open, setOpen] = useState<boolean>(false);

	const totalPrice:number = useMemo(() => cart.reduce((acc: number, i: ICartItem) => acc + (i.amount * i.price), 0), [cart]);
	
	const handleBuy = (): void => {
		dispatch(buyItems(totalPrice));
		setOpen(true);
	};

	if (!cart.length && !open) {
		return <Typography variant='h4' sx={{textAlign: 'center'}}> Empty </Typography>;
	}

  return (
		<Container maxWidth='lg'>
			<CartList 
				cart={cart}
			/>
			<CartBttm
				totalPrice={totalPrice}
				handleBuy={handleBuy}
			/>
			<AlertDialog
				active={open}
				onClose={() => setOpen(false)}
			/>
		</Container>
  );
}
