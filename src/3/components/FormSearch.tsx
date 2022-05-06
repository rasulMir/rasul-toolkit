import { Box, TextField, Button } from '@mui/material';
import React, { FormEvent, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { searchInp } from '../redux/searchSlice';

const box = {
	display : 'flex',
	justifyContent : 'stretch',
	alignItems : 'flex-end',
	mb : '25px'
};

const txtField = {
	flex : '1 0',
	mr: '25px'
};

interface Props {}

export default function FormSearch({}: Props) {
	const [ params, setParams ] = useState<string>('');
	const dispatch = useAppDispatch();
	const handleClick = (e: React.FormEvent<HTMLButtonElement>) => {
		e.preventDefault();
		dispatch(searchInp(params));
	}

	return (
		<Box sx={box} component='form'>
			<TextField
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => setParams(e.target.value)}
				value={params}
				id="outlined-basic"
				label="Search Items"
				variant="standard"
				name='field'
				sx={txtField}/>
			<Button
			 	onClick={handleClick}
				variant='outlined'
				color='success'
				type='submit'
			>
				Search
			</Button>
		</Box>
	)
}