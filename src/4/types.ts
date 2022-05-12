
export interface IApi {
	products: IItem[],
	total: number,
	skip: number,
<<<<<<< HEAD
	limit: number,
};
=======
	limit: number
	}
>>>>>>> 53c5a26283fe3779a45d595c5682983820a3bb60

export interface IUser {
	name: string,
	password : string,
	mail : string,
<<<<<<< HEAD
};
=======
}
>>>>>>> 53c5a26283fe3779a45d595c5682983820a3bb60

export interface ICartItem {
	amount: number,
	thumbnail: string,
	price: number,
	description: string,
	id: number,
	category: string,
	title: string,
<<<<<<< HEAD
};

export interface IOrders {
	user: IUser | false,
	items: ICartItem[],
	orderPrice: number,
	orderState: 'processed' | 'delivered' | 'rejected',
};

export interface IState {
	loading : boolean,
	orders : IOrders[],
=======
}

export interface IState {
	loading : boolean,
	orders : [],
>>>>>>> 53c5a26283fe3779a45d595c5682983820a3bb60
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