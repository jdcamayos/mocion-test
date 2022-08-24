import * as React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GameProvider from './context/GameContext'
import Question from './views/Question'
import Results from './views/Results'
import Welcome from './views/Welcome'

function App() {
	return (
		<GameProvider>
			<Router>
				<Routes>
					<Route path='/' element={<Welcome />} />
					<Route path='/questions/:questionId' element={<Question />} />
					<Route path='/result' element={<Results />} />
				</Routes>
			</Router>
		</GameProvider>
	)
}

export default App
