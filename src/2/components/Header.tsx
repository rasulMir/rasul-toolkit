import React, { useMemo } from 'react';
import { useAppSelector } from '../../hooks';

import { Link } from 'react-router-dom';
import { AppBar, Badge, Container, IconButton, Toolbar, Typography, Box } from '@mui/material';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import { ICard } from '../redux/storeSlice';

interface Props {}

export default function Header({}: Props) {

	const storeData = useAppSelector(state => state.storeApp.storeData);
	const amount: number = storeData.reduce((acc: number, i: ICard) => acc + i.amount, 0);

	return (
		<AppBar position='static' >
			<Container maxWidth='md'>
				<Toolbar disableGutters>
					<Link to='/storeapp'>
						<Typography
							variant="h6"
							noWrap
							component="div"
							sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
						>
							PRODUCTS
						</Typography>
					</Link>
					<Link to='cart'>
						<IconButton size="large" aria-label="show items in the cart" color="inherit">
							<Badge badgeContent={amount} color='error'>
								<ShoppingCartCheckoutOutlinedIcon/>
							</Badge>
						</IconButton>
					</Link>
				</Toolbar>
			</Container>
		</AppBar>
	)
}