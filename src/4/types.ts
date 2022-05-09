
export interface IApi {
	products: IItem[],
	total: number,
	skip: number,
	limit: number
	}

export interface IUser {
	name: string,
	password : string,
	mail : string,
}

export interface ICartItem {
	amount: number,
	thumbnail: string,
	price: number,
	description: string,
	id: number,
	category: string,
	title: string,
}

export interface IState {
	loading : boolean,
	orders : [],
	cart : ICartItem[],
	currentUser : false | IUser,
	users : IUser[],
	items: IItem[],
	searchLoading: boolean,
};

export interface IItem {
	id: number,
	title: string,
	description: string,
	price: number,
	thumbnail: string,
	discountPercentage: number,
	rating: number,
	stock: number,
	brand: string,
	category: string,
	images: string[],
};