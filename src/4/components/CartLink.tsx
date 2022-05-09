import React from 'react';

import { useNavigate, Link } from 'react-router-dom';
import { Box, IconButton, Badge, Tooltip } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const box = {
	position: 'fixed',
	top: '300px',
	right: '50px',
};

const iconBtn = {
	display: 'block',
	border: '1px solid grey',
	borderRadius: '50%',
	padding: '10px',
};

interface Props {
	badgeContent: number
};

export default function CartLink({ badgeContent }: Props) {

	const navigate = useNavigate();

	return (
		<Box sx={box}>
			<Tooltip title='Open Cart'>
				<Link to='cart' style={iconBtn}>
					<Badge badgeContent={badgeContent} color="success">
						<ShoppingCartCheckoutIcon fontSize='large' color='action'/>
					</Badge>
				</Link>
			</Tooltip>
		</Box>
	)
}