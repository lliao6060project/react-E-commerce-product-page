import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import cartStore from '@/store/cart/store';
import Ecommerce from './views/index'
import BackToTop from './components/BackToTop';

const Main = () => {
	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={<Ecommerce />}
				/>
			</Routes>
		</Router>
	)
}

const App = () => {
	const backToTopRef = useRef(null);
	useEffect(() => {
		document.body.classList.add('pt-[120px]', 'lg:pt-48');
	}, [])
  return (
		<Provider store={cartStore}>
			<Main />
			<ToastContainer autoClose={2000} />
			<BackToTop ref={backToTopRef}/>
		</Provider>
  )
}

export default App
