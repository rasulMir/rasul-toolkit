import React from 'react';
import { Outlet } from 'react-router-dom';
import BackMainPage from '../BackMainPage';
import Header from './components/Header';

interface Props {}

export default function Store({}: Props) {
	return (
		<>
			<Header/>
			<Outlet/>
			<BackMainPage/>
		</>
	)
}