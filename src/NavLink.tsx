import { Box, ButtonGroup, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';

const box = {
	width : '600px',
	margin : '50px auto'
}

interface Props {}

export default function NavLink({}: Props) {
	return (
		<Box sx={box}>
			<ButtonGroup variant="contained" aria-label="outlined primary button group">
				<Button>
					<Link to='todo'> ReduxToolkit ToDo </Link>
				</Button>
				<Button>
					<Link to='storeapp'> ReduxToolkit Store </Link>
				</Button>
				<Button>
					<Link to='thunkapp'> ReduxToolkit Thunk Store </Link>
				</Button>
			</ButtonGroup>
		</Box>
	)
}