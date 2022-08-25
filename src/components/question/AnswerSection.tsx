import * as React from 'react'
// MUI Styles
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
// Components
import TrueFalseButton from './TrueFalseButton'
// Types
import { QuestionForGame } from '../../types/questions'

type Props = {
	question: QuestionForGame
	sendAnswer: (id: number, question: string) => void
}

export default function AnswerSection(props: Props) {
	const { question, sendAnswer } = props
	return (
		<Grid container>
			{question.answers
				.sort((a, b) => b.answer.charCodeAt(0) - a.answer.charCodeAt(0))
				.map(a => (
					<Grid item xs={6} key={a.id} sx={{ display: 'grid', placeContent: 'center' }}>
						{a.answer === 'True' || a.answer === 'False' ? (
							<TrueFalseButton variant={a.answer} onClick={() => sendAnswer(question.id, a.answer)} />
						) : (
							<Button variant='contained' fullWidth key={a.id} onClick={() => sendAnswer(question.id, a.answer)}>
								{a.answer}
							</Button>
						)}
					</Grid>
				))}
		</Grid>
	)
}
