import * as React from 'react'
import { Link } from 'react-router-dom'
import useGame from '../hooks/useGame'

export default function Welcome() {
	const { loading, game, fetchQuestions } = useGame()
	return (
		<div>
			<h1>
				Welcome to the <br /> Trivia Challenge!
			</h1>
			<h3>You will be presented with 10 True or False questions.</h3>
			<h3>Can you score 100%?</h3>
			{loading && 'Loading'}
			{game.questions.length > 0 && <Link to='/questions/0'>Begin</Link>}
			{game.questions.length === 0 && loading === false && (
				<>
					<p>Ups!, something goes wrong loading questions</p>
					<button onClick={() => fetchQuestions()}>Re load</button>
				</>
			)}
		</div>
	)
}
