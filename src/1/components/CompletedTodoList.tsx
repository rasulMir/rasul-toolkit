import { Box } from '@mui/system';
import React from 'react';
import { useDispatch } from 'react-redux';
import { clearAllCompletedItems, IItem } from '../redux/toDoSlice';

import TodoList from './TodoList';
import TopAction from './TopAction';

interface Props {
	color : string,
	store : IItem[],
}

export default function CompletedTodoList({ color, store }: Props) {

	const box = {
		background : color,
		padding : '10px',
		margin : '0 0 10px 0',
		borderRadius : '5px'
	}

	const filteredList = store.filter((i: IItem) => i.isComplete);
	const dispatch = useDispatch();
	if(!filteredList.length) {
		return <></>
	}
	return (
		<Box sx={box}>
			<TopAction 
				title='выполнено'
				onclick={() => dispatch(clearAllCompletedItems())}
				btnTitle='очистить'
			/>
			<TodoList store={filteredList} />
		</Box>
	)
}