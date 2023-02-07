import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Layout from '@/layout'
import { useEffect } from 'react'

const App = () => {
	useEffect(() => {
		document.body.classList.add('pt-0', 'md:pt-44', 'xl:pt-48');
	}, [])
  return (
		<Router>
			<div className='app w-full'>
				<Layout />
				{/* <ul className='flex-center'>
					<li className='flex-center bg-blue-400 px-3 py-3 text-white rounded hover:bg-blue-500 mr-3'>
						<Link to="/">Back Home</Link>
					</li>
					<li className='flex-center bg-violet-400 px-3 py-3 text-white rounded hover:bg-violet-500'>
						<Link to="todo-list">Go TodoList</Link>
					</li>
				</ul>
				<div className='w-full align-center text-center'>
					<h1 className='text-[48px] text-bold'>Hello World</h1>
					<Routes>
						<Route path="/count" element={<Counter />} />
						<Route path="/todo-list" element={<TodoList />} />
					</Routes>
				</div> */}
			</div>
		</Router>
  )
}

export default App
