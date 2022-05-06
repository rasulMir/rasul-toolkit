import { configureStore } from '@reduxjs/toolkit';
import todo from './1/redux/toDoSlice';
import storeApp from './2/redux/storeSlice';
import searchAsync from './3/redux/searchSlice';

const store = configureStore({
	reducer: {
		toDo : todo,
		storeApp,
		searchAsync,
	}
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;