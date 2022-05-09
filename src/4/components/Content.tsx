import React, { useEffect } from 'react';

import { Container, LinearProgress, Box, Alert } from '@mui/material';
import Greetings from './Greetings';
import Products from './Products';
import Search from './Search';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchItems } from '../redux/bigStoreSlice';
import CartLink from './CartLink';

const container = {
	margin : '20px auto',
	diplay : 'flex',
	justifyContent : 'center',
	alignItems : 'center',
};

interface Props {};

export default function Content({}: Props) {

	const { loading, items, searchLoading, cart, currentUser } = useAppSelector((state: any) => state.bigStore);
	const dispatch = useAppDispatch();

	useEffect(() => { dispatch(fetchItems()) }, []);

	const progressBar = (
    <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>
  );

	if (loading) {
		return progressBar;
	}

	return (
		<>
			<Container maxWidth='lg' sx={container}>
				<Greetings/>
				<Search/>
				{
					searchLoading ? progressBar :
					( <Products items={items} /> )
				}
				{
					currentUser ? <CartLink badgeContent={cart.length}/> : <></>
				}
			</Container>
		</>
	)
}