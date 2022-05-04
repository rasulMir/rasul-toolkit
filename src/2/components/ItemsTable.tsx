import React from 'react';
import { TableHead, TableRow, TableCell, IconButton, TableBody, Table, Container, Avatar, Typography, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { ICard, deleteItem, subtraction, addToCart } from '../redux/storeSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

type Props = {};

export default function ItemsTable({}: Props) {
	const dispatch = useAppDispatch();
	const storeData = useAppSelector((state: any) => state.storeApp.storeData);
	return (
		<Table sx={{width : '100%'}}>
			<TableHead>
				<TableRow>
					<TableCell align="left">НАЗВАНИЕ</TableCell>
					<TableCell align="left">ФОТО</TableCell>
					<TableCell align="left">ЦЕНА</TableCell>
					<TableCell align="left">КОЛИЧЕСТВО</TableCell>
					<TableCell align="left">ОБЩАЯ ЦЕНА</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{
					storeData.map((i : ICard) => (
						<TableRow key={i.id}>
							<TableCell> {i.name} </TableCell>
							<TableCell size='small'>
								<IconButton size='large' color='inherit' onClick={() => dispatch(deleteItem(i.id))}>
									<DeleteIcon/>
								</IconButton>
							</TableCell>
							<TableCell>
								<Avatar
									variant='square'
									alt="items image"
									src={i.img}
									sx={{ width: 150, height: 100 }}
								/>
							</TableCell>
							<TableCell>
								{ i.price }
							</TableCell>
							<TableCell>
								<Button  variant='contained' color='error' onClick={() => dispatch(subtraction(i.id))}>
									-
								</Button>
								<Typography variant='body1' component='span' sx={{ padding : '0 5px' }}>
									{ i.amount }
								</Typography>
								<Button variant='contained' color='success'  onClick={() => dispatch(addToCart(i.id))}>
									+
								</Button>
							</TableCell>
							<TableCell>
								{ i.amount * i.price }
							</TableCell>
						</TableRow>
					))
				}
			</TableBody>
		</Table>
	)
}