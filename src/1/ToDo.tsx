import { Box } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import BackMainPage from '../BackMainPage';
import CompletedTodoList from './components/CompletedTodoList';
import UncompletedTodoList from './components/UncompletedTodoList';

const box = {
	width: '500px',
	margin : '5px auto'
}

interface Props {}

export default function ToDo({}: Props) {
	const store = useSelector((state : any) => state.toDo.todos);
	return (
		<>
			<BackMainPage/>
			<Box sx={box}>
				<UncompletedTodoList color='#C8C8C8' store={store}/>
				<CompletedTodoList color='#293471' store={store}/>
			</Box>
		</>
	)
}