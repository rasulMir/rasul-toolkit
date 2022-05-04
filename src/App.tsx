import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ToDo from './1/ToDo';
import Cart from './2/components/Cart';
import Products from './2/components/Products';
import Store from './2/Store';
import NavLink from './NavLink';

function App() {
  return (
    <Routes>
			<Route path='/' element={<NavLink/>} />
			<Route path='todo' element={<ToDo/>} />
			<Route path='storeapp' element={<Store/>}>
				<Route index element={<Products/>}/>
				<Route path='cart' element={<Cart/>}/>
			</Route>
		</Routes>
  );
}
export default App;