import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IItem {
	id: number,
	title: string,
	description: string,
	price: number,
	discountPercentage: number,
	rating: number,
	stock: number,
	brand: string,
	category: string,
	thumbnail: string,
	images: string[],
}



export const fetchItems = createAsyncThunk(
	'search/fetchItems',
	async function(_, { rejectWithValue }) {
		try {
			const response = await fetch('https://dummyjson.com/products?limit=15&skip=15');
			
			if (!response.ok) {
					throw new Error('Server Error!');
			}

			const data = await response.json();

			return data.products;
		} catch (error) {
				return rejectWithValue(error);
		}
	}
);

export const searchInp = createAsyncThunk(
	'search/fetchItems',
	async function(txt: string, { rejectWithValue }) {
		try {
			const response = await fetch(`https://dummyjson.com/products/search?q=${txt}`);
			
			if (!response.ok) {
					throw new Error('Server Error!');
			}

			const data = await response.json();

			return data.products;
		} catch (error) {
				return rejectWithValue(error);
		}
	}
);

export const deleteItemServer = createAsyncThunk(
	'search/deleteItem',
	async function (id: number, { rejectWithValue, dispatch, getState }) {
		try {
			const response = await fetch(`https://dummyjson.com/products/${id}`, {
				method: 'DELETE',
			});

			if (!response.ok) {
					throw new Error('Can\'t delete task. Server error.');
			}
			dispatch(deleteItem(id));
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

const setError = (state: IInitialState, action: PayloadAction<Error>) => {
	state.status = 'rejected';
	state.error = action.payload.message;
}

export interface IInitialState {
	items : IItem[],
	status : null | 'rejected' | 'loading' | 'resolved',
	error : null | string
}

const initialState: IInitialState = {
	items : [],
	status : null,
	error : null,
}

const searchItems = createSlice({
	name : 'searchItems',
	initialState,
	reducers : {
		deleteItem(state , { payload }: PayloadAction<number>) {
			state.items = state.items.filter((i : IItem) => (i.id !== payload));
		}
	},
	extraReducers : {
		[`${fetchItems.pending}`]: (state: IInitialState) => {
			state.status = 'loading';
			state.error = null;
		},
		[`${fetchItems.fulfilled}`]: (state: IInitialState, { payload }: PayloadAction<IItem[]>) => {
				state.status = 'resolved';
				state.items = payload;
		},
		[`${searchInp.pending}`]: (state: IInitialState) => {
			state.status = 'loading';
			state.error = null;
		},
		[`${searchInp.fulfilled}`]: (state: IInitialState, { payload }: PayloadAction<IItem[]>) => {
				state.status = 'resolved';
				state.items = payload;
		},

		[`${fetchItems.rejected}`]: setError,
		[`${deleteItemServer.rejected}`] : setError,
		[`${searchInp.rejected}`] : setError,
	}
});

const { deleteItem } = searchItems.actions;
export default searchItems.reducer;