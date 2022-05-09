import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { useAppDispatch } from '../../hooks';
import { fetchItems, searchInp } from '../redux/bigStoreSlice';

const box = {
	display: 'flex',
	justifyContent: 'flex-start',
	alignItems: 'center',
	mb: '15px',
};

interface Props {};

export default function Search({}: Props) {

	const dispatch = useAppDispatch();
	const [ txt, setTxt ] = useState<string>('');

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => setTxt(e.target.value);

	const handleSubmit = (e: SyntheticEvent): void => {
		e.preventDefault();
		dispatch(searchInp(txt));
	};

	return (
		<Box 
			sx={box}
			component='form'
			onSubmit={handleSubmit}
		>
			<TextField
				label='Search Items'
				size='small'
				sx={{ flexGrow: 1, mr: '15px' }}
				value={txt}
				onChange={handleChange}
			/>
			<Button
				variant='contained'
				type='submit'
				color='success'
			>
				Search
			</Button>
		</Box>
	)
}