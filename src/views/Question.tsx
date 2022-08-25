import * as React from 'react'
import { useParams } from 'react-router-dom'
// MUI Styles
import Box from '@mui/material/Box'
// Components
import CategorySection from '../components/question/CategorySection'
import QuestionSection from '../components/question/QuestionSection'
import AnswerSection from '../components/question/AnswerSection'
// Hooks
import useGame from '../hooks/useGame'
// Types
import { QuestionForGame } from '../types/questions'

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
		<Box
			component='main'
			sx={{
				minHeight: '100vh',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				padding: '16px 0',
				gap: 2,
			}}
		>
			<Box>
				<CategorySection>
					{question.category}
				</CategorySection>
				<QuestionSection
					questionId={+questionId}
					question={question.question}
					questionQty={game.questionQty}
				/>
				<AnswerSection
					question={question}
					sendAnswer={sendAnswer}
				/>
			</Box>
		</Box>
	)
}
