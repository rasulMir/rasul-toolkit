import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ToDo from './1/ToDo';
import Cart from './2/components/Cart';
import Products from './2/components/Products';
import Content from './4/components/Content';
import Store from './2/Store';
import ThunkStore from './3/ThunkStore';
import Home from './4/pages/Home';
import SignIn from './4/pages/SignIn';
import SignUp from './4/pages/SignUp';
import NavLink from './NavLink';
import UserCart from './4/components/UserCart';

function App() {
  return (
    <Routes>
			<Route path='/' element={<NavLink/>} />

			<Route path='todo' element={<ToDo/>} />

			<Route path='storeapp' element={<Store/>}>
				<Route index element={<Products/>}/>
				<Route path='cart' element={<Cart/>}/>
			</Route>

			<Route path='thunkapp' element={<ThunkStore/>} />

			<Route path='bigapp' element={<Home/>}>
				<Route index element={<Content/>} />
				<Route path='cart' element={<UserCart/>}/>
			</Route>
			<Route path='signup' element={<SignUp/>} />
			<Route path='signin' element={<SignIn/>} />
		</Routes>
  );
}
export default App;