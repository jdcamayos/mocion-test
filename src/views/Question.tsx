import * as React from 'react'
import { useParams } from 'react-router-dom'
import useGame from '../hooks/useGame'
import { QuestionForGame } from '../types/questions'
import { parseText } from '../utils/parseText'

export default function Question() {
	const { questionId } = useParams()
	const { game, sendAnswer } = useGame()
	const [question, setQuestion] = React.useState<QuestionForGame | null>(null)

	React.useEffect(() => {
		if (questionId && game.questions) {
			setQuestion(game.questions[parseInt(questionId)])
		}
	}, [questionId, game.questions])

	if (!questionId) return null

	if (!question) return null

	return (
		<div>
			<h4>Question {+questionId + 1}</h4>
			<div>
				<h4>{question.category}</h4>
				<p>{parseText(question.question)}</p>
				{question.answers
					.sort((a, b) => b.answer.charCodeAt(0) - a.answer.charCodeAt(0))
					.map(a => (
						<button key={a.id} onClick={() => sendAnswer(question.id, a.answer)}>
							{a.answer}
						</button>
					))}
			</div>
		</div>
	)
}
