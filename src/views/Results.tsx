import * as React from 'react'
import useGame from '../hooks/useGame'
import { parseText } from '../utils/parseText'

export default function Results() {
	const { game, restartGame } = useGame()
	return (
		<div>
			<h1>
				You scored <br /> {game.scoreCounter} / 10
			</h1>
			<ul>
				{game.history.map(q => (
					<li key={q.id}>
						<span>{q.isCorrect ? 'Si' : 'No'}</span>
						<h3>{parseText(q.question)}</h3>
					</li>
				))}
			</ul>
			<button onClick={() => restartGame()}>Play Again?</button>
		</div>
	)
}
