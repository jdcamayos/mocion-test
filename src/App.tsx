import * as React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// Views
import Question from './views/Question'
import Results from './views/Results'
import Welcome from './views/Welcome'
// Context
import GameProvider from './context/GameContext'
// Components
import Layout from './components/layout/Layout'

function App() {
	return (
		<Layout>
			<GameProvider>
				<Router>
					<Routes>
						<Route path='/' element={<Welcome />} />
						<Route path='/questions/:questionId' element={<Question />} />
						<Route path='/result' element={<Results />} />
					</Routes>
				</Router>
			</GameProvider>
		</Layout>
	)
}

export default App
