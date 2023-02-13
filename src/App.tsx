import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { Provider } from 'react-redux';
import store from '@/store/store';

import TodoList from './views/todo-list'
import Ecommerce from './views/e-commerce'

const App = () => {
	useEffect(() => {
		document.body.classList.add('pt-[120px]', 'lg:pt-48');
	}, [])
  return (
		<Provider store={store}>
			{/* Router */}
			<div className='app w-full'>
				<Ecommerce />
				{/* <ul className='flex-center'>
					<li className='flex-center bg-blue-400 px-3 py-3 text-white rounded hover:bg-blue-500 mr-3'>
						<Link to="/">Back Home</Link>
					</li>
					<li className='flex-center bg-violet-400 px-3 py-3 text-white rounded hover:bg-violet-500'>
						<Link to="todo-list">Go TodoList</Link>
					</li>
					<li className='flex-center bg-red-400 px-3 py-3 text-white rounded hover:bg-red-500'>
						<Link to="e-commerce">Go Ecommerce</Link>
					</li>
				</ul>
				<div className='w-full align-center text-center'>
					<h1 className='text-[48px] text-bold'>Hello World</h1>
					<Routes>
						<Route path="/count" element={<Counter />} />
						<Route path="/todo-list" element={<TodoList />} />
						<Route path="/e-commerce" element={<Ecommerce />} />
					</Routes>
				</div> */}
			</div>
		</Provider>
  )
}

export default App
