import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { GameContext } from '../context/GameContext'
import { getQuestions } from '../services/questions'

export default function useGame() {
	const context = React.useContext(GameContext)
	const { game, setGame } = context
	const [loading, setLoading] = React.useState(false)
	const navigate = useNavigate()

	if (context === undefined) throw new Error('This hook only must be used inside GameProvider')

	React.useEffect(() => {
		if (game.questions.length === 0) {
			fetchQuestions()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const fetchQuestions = async () => {
		try {
			setLoading(true)
			const { results } = await getQuestions()
			setGame(prev => ({
				...prev,
				questions: results.map((q, i) => ({
					...q,
					id: i,
					answers: [
						{ answer: q.correct_answer, id: 0 },
						...q.incorrect_answers.map((a, i) => ({ answer: a, id: i + 1 })),
					],
				})),
				questionQty: results.length,
			}))
			setLoading(false)
		} catch (error) {
			setLoading(false)
		}
	}

	const sendAnswer = (id: number, res: string) => {
		const isCorrect = game.questions[id].correct_answer === res
		const question = game.questions[id].question
		console.log(res)

		if (isCorrect) {
			answerOk(id, question, isCorrect)
		} else {
			answerNotOk(id, question, isCorrect)
		}

		if (id + 1 < game.questionQty) {
			navigate(`/questions/${id + 1}`)
		} else {
			navigate('/result')
		}
	}

	const answerOk = (id: number, question: string, isCorrect: boolean) => {
		setGame(prev => ({
			...prev,
			scoreCounter: prev.scoreCounter < prev.questionQty ? prev.scoreCounter + 1 : prev.scoreCounter,
			history: [...prev.history, { id, isCorrect, question }],
			actualQuestion: prev.actualQuestion + 1,
		}))
	}

	const answerNotOk = (id: number, question: string, isCorrect: boolean) => {
		setGame(prev => ({
			...prev,
			history: [...prev.history, { id, isCorrect, question }],
			actualQuestion: prev.actualQuestion + 1,
		}))
	}

	const restartGame = () => {
		setGame(prev => ({
			...prev,
			scoreCounter: 0,
			actualQuestion: 0,
			history: [],
		}))
		navigate('/')
	}

	return { game, loading, sendAnswer, restartGame, fetchQuestions }
}
