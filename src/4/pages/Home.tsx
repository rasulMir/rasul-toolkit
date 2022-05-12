
import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderAppBar from '../components/HeaderAppBar';

interface Props {}

export default function Home({}: Props) {
	return (
		<>
			<HeaderAppBar/>
			<Outlet/>
		</>
	)
};