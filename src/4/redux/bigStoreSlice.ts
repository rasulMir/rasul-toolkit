import { createAsyncThunk, PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IState, IUser, IItem } from '../types';

const logError = (state: IState, { payload }: PayloadAction<Error>): void => {
	console.log(payload.message);
}

export const fetchItems = createAsyncThunk(
	'bigstore/fetchItems',
	async function name(_, { rejectWithValue }) {
		try {
			const response = await fetch('https://dummyjson.com/products?limit=30');
			if (!response.ok) {
				return new Error('server down');
			}
			const data = await response.json();

			return data.products;

		} catch (error) {
			return rejectWithValue(error);
		} 
	}
);

export const searchInp = createAsyncThunk(
	'search/searchInp',
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

const initialState: IState = {
	loading : true,
	orders : [],
	cart : [],
	currentUser : false,
	users : [{
		name : 'rasul',
		mail: '1@gmail.com',
		password : '123',
	}],
	items: [],
	searchLoading: false,
};

const bigStoreSlice = createSlice({
	name : 'bigStore',
	initialState,
	reducers : {
		addUser(state, { payload }: PayloadAction<IUser>) {
			state.users.push(payload);
		},

		checkUser(state, { payload }: PayloadAction<IUser>) {

			let isUser = state.users.find( i => (
				i.mail === payload.mail && 
				i.name === payload.name && 
				i.password === payload.password
			));

			if (isUser) {
				state.currentUser = payload;
			}
			else {
				state.currentUser = false;
			}
		},

		exitLogin( state ) {
			state.currentUser = false;
		},

		addToCart(state, { payload }: PayloadAction<number>) {
			const item: IItem | undefined = state.items.find(i => i.id === payload);

			if (item) {
				state.cart.push({
					amount : 1,
					thumbnail: item.thumbnail,
					price: item.price,
					description: item.description,
					id: item.id,
					category: item.category,
					title: item.title,
				});
			}
		},

		delFromCart(state, { payload }: PayloadAction<number>) {
			state.cart = state.cart.filter(i => {
				if (i.id === payload) {
					i.amount = 0;
					return false;
				}
				return true;
			});
		},

		plusCart(state, { payload }: PayloadAction<number>) {
			state.cart.forEach(i => {
				if (i.id === payload) {
					i.amount++;
				}
			});
		},
		minusCart(state, { payload }: PayloadAction<number>) {
			state.cart.forEach(i => {
				if (i.id === payload) {
					i.amount = (i.amount === 1) ? 1 : i.amount - 1;
				}
			});
		},

	},

	extraReducers : {
		[`${fetchItems.pending}`]: (state: IState) => {
			state.loading = true;
		},
		[`${fetchItems.fulfilled}`]: (state: IState, { payload }: PayloadAction<IItem[]>) => {
				state.loading = false;
				state.items = payload;
		},
		[`${fetchItems.rejected}`]: logError,


		[`${searchInp.pending}`]: (state: IState) => {
			state.searchLoading = true;
		},
		[`${searchInp.fulfilled}`]: (state: IState, { payload }: PayloadAction<IItem[]>) => {
			state.searchLoading = false;
			state.items = payload;
		},
		[`${searchInp.rejected}`]: logError,
		
	}

});


export const { addUser, checkUser, exitLogin, addToCart, delFromCart, plusCart, minusCart } = bigStoreSlice.actions;
export const bigStore = bigStoreSlice.reducer;