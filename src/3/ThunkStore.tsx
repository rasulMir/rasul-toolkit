import React from 'react';
import  { Box, Container } from '@mui/material';
import FormSearch from './components/FormSearch';
import CardList from './components/CardList';

const container = {
	padding : '40px 0',
};

interface Props {}

export default function ThunkStore({}: Props) {
	return (
		<Container maxWidth='md' sx={container}>
			<FormSearch />
			<CardList/>
		</Container>
	);
}