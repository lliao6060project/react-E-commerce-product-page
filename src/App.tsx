import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useEffect } from 'react'
import Counter from './components/Counter'
import TodoList from './views/todo-list'
import Ecommerce from './views/e-commerce'

const App = () => {
	useEffect(() => {
		document.body.classList.add('pt-[120px]', 'xl:pt-48');
	}, [])
  return (
		<Router>
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
		</Router>
  )
}

export default App
