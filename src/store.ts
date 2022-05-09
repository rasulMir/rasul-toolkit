import { configureStore } from '@reduxjs/toolkit';
import todo from './1/redux/toDoSlice';
import storeApp from './2/redux/storeSlice';
import searchAsync from './3/redux/searchSlice';
import { bigStore } from './4/redux/bigStoreSlice';

const store = configureStore({
	reducer: {
		toDo : todo,
		storeApp,
		searchAsync,
		bigStore,
	}
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;