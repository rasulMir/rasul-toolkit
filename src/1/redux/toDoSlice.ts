import { createSlice } from '@reduxjs/toolkit';

export interface IItem {
	id : string,
	text : string,
	isComplete : boolean
}

interface IState {
	todos : IItem[]
}

const initial: IState = {
	todos : [
		{
			id : '1',
			text : 'uncompleted',
			isComplete : false
		},
		{
			id : '2',
			text : 'completed',
			isComplete : true
		}
	]
}

const todoSlice = createSlice({
	name : 'todo',
	initialState : initial,

	reducers : {

		add(state) {
			state.todos.push({
				id: Date.now().toString(),
				text: '',
				isComplete : false,
			})
		},

		complete(state, { payload }) {
			state.todos.forEach(i => {
				if(i.id === payload) i.isComplete = !i.isComplete;
			})
		},

		deleteItem(state, { payload }) {
			state.todos = state.todos.filter(i => i.id !== payload);
		},

		editItems(state, { payload }) {
			state.todos = state.todos.map(i => {
				if (i.id === payload.id) {
					i.text = payload.txt;
				}

				return i;
			});
		},

		clearAllCompletedItems(state) {
			state.todos = state.todos.filter(i => !i.isComplete);
		}
	}
});

export const { add, complete, deleteItem, editItems, clearAllCompletedItems } = todoSlice.actions;

export default todoSlice.reducer;