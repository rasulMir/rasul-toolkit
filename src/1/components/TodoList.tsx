import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { IItem, complete, deleteItem, editItems } from '../redux/toDoSlice';

import { List, ListItem, ListItemIcon, Checkbox, IconButton, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {
	store : IItem[]
}

export default function TodoList({ store }: Props) {
	const dispatch = useDispatch();

	const list = useMemo(() => {
		return store.map((item: IItem) => (
			<ListItem
				key={item.id}
			>
				<ListItemIcon
					sx={{ minWidth : 'auto' }}
					onClick={() => dispatch(complete(item.id))}
				>
					<Checkbox
						edge="start"
						checked={item.isComplete}
						tabIndex={-1}
						disableRipple
					/>
				</ListItemIcon>
				<TextField
					onInput={(e : React.FocusEvent<HTMLInputElement>) => {
						dispatch(editItems({ id : item.id, txt: e.target.value.trim() }));
					}}
					value={item.text}
					sx={{ textDecoration : item.isComplete ? 'line-through' : 'none' }}
					id="standard-basic"
					fullWidth
					label={item.text}
					variant="standard"/>
				<IconButton
					edge="end"
					aria-label="garbage"
					onClick={() => dispatch(deleteItem(item.id))}>
					<DeleteIcon />
				</IconButton>
			</ListItem>
		));
	}, [store]);

	return (
		<List sx={{ width : '100%' }}>
      { list }
    </List>
	)
}