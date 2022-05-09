import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import SignLinks from './SignLinks';
import { useAppSelector } from '../../hooks';

const div = {
	margin : '10px',
	display: 'flex',
	justifyContent : 'center',
};

const Greetings: React.FC = () => {
	const { currentUser } = useAppSelector((state: any) => state.bigStore);

	return (
		<div style={{margin: '0 0 15px 0'}}>
			<Typography variant='h3' textAlign='center'>
				Welcome To Our Store
			</Typography>
			{
				currentUser ? <></> :
				<div style={div}>
					<SignLinks/>
				</div>
			}
		</div>
	);
}

export default Greetings;