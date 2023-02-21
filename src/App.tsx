import { useEffect, useRef } from 'react';
import { Provider } from 'react-redux';
import {
	BrowserRouter as Router, Route, Routes
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import store from '@/store/store';
import BackToTop from './components/BackToTop';
import Ecommerce from './views/index';

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
		<Provider store={store}>
			<Main />
			<ToastContainer autoClose={2000} />
			<BackToTop ref={backToTopRef}/>
		</Provider>
  )
}

export default App
