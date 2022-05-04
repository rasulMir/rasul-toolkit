import React from 'react';
import { Outlet } from 'react-router-dom';
import BackMainPage from '../BackMainPage';
import Header from './components/Header';
import { useAppSelector } from './redux/hooks';

interface Props {}

export default function Store({}: Props) {
	const store = useAppSelector(state => state.storeApp);
	console.log(store);
	return (
		<>
			<Header/>
			<Outlet/>
			<BackMainPage/>
		</>
	)
}