import { Box, Typography, Button } from '@mui/material';
import React from 'react';

interface Props {
	title : string,
	onclick : () => void,
	btnTitle : string
}

const box = {
	display : 'flex',
	justifyContent : 'space-between',
	alignItems : 'center',
	margin : '0 0 10px 0',
}

const typo = {
	flex: '1 0 70%',
	color : '#1976DB',
	textTransform : 'uppercase',
	fontSize : '1.5em'
}

export default function TopAction({ title, onclick, btnTitle}: Props) {
	return (
		<Box sx={box}>
			<Typography sx={typo}> { title } </Typography>
			<Button
				sx={{flex: '0 1 30%'}}
				variant="text"
				onClick={onclick}
			> { btnTitle } </Button>
		</Box>
	)
}