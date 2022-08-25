import * as React from 'react'
// Views
import Question from './views/Question'
import Results from './views/Results'
import Welcome from './views/Welcome'
// Others
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import GameProvider from './context/GameContext'

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
