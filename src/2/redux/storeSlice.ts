import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ICard {
	id : string,
	name : string,
	price : number,
	amount : number,
	img : string,
}

export interface IInitialState {
	storeData : ICard[]
}

const initalState: IInitialState = {
	storeData : [
		{
			id : '1',
			name : 'Lamborgini Veneno',
			price : 500000,
			amount : 0,
			img: 'https://kartinkin.net/uploads/posts/2022-03/1646738066_73-kartinkin-net-p-kartinki-lamba-81.jpg',
		},
		{
			id : '2',
			name : 'MacBook Air 2018',
			price : 3000,
			amount : 0,
			img: 'https://cdn.vox-cdn.com/thumbor/UgncL6Qn6eeidNe1yR8JlNTJxhk=/0x0:2040x1360/1200x800/filters:focal(755x509:1081x835)/cdn.vox-cdn.com/uploads/chorus_image/image/64914702/vpavic_190711_3549_0014.0.jpg',
		},
		{
			id : '3',
			name : "Samsung Universe 9",
			price : 1250,
			amount : 0,
			img: "https://dummyjson.com/image/i/products/3/1.jpg",
		},
		{
			id : '4',
			name : "iPhone X",
			price : 899,
			amount : 0,
			img: "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
		}
	]
}

const storeSlice = createSlice({
	name : 'store',
	initialState : initalState,
	reducers : {
		addToCart(state, { payload }: PayloadAction<string>) {
			state.storeData = state.storeData.map((i: ICard) => {
				if(i.id === payload) {
					i.amount++;
				}
				return i;
			});
		},

		subtraction(state, { payload }: PayloadAction<string>) {
			state.storeData = state.storeData.map((i: ICard) => {
				if(i.id === payload) {
					if (i.amount <= 0) return i;
					i.amount--;
				}
				return i;
			});
		},

		deleteItem(state, { payload }: PayloadAction<string>) {
			state.storeData = state.storeData.map((i: ICard) => {
				if(i.id === payload) {
					i.amount = 0;
				}
				return i;
			});
		},

	}
});

export const { addToCart, deleteItem, subtraction } = storeSlice.actions;
export default storeSlice.reducer;