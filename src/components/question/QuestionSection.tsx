import * as React from 'react'
// MUI Styles
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
// Utils
import { parseText } from '../../utils/parseText'

type Props = {
	questionId: number
	question: string
	questionQty: number
}

export default function QuestionSection(props: Props) {
	const { questionId, question, questionQty } = props

	return (
		<Box component='section'>
			<Typography
				component='h1'
				sx={{
					fontWeight: '700',
					fontSize: 26,
					textAlign: 'center',
					margin: '1rem 0',
					color: 'background.default',
				}}
			>
				Question {questionId + 1} of {questionQty}
			</Typography>
			<Paper
				elevation={4}
				sx={{
          padding: 2,
          minHeight: '50vh',
          maxWidth: { xs: '90vw', sm: '85vw', md: 500 },
          display: 'grid',
          placeContent: 'center',
          backgroundColor: 'primary.main'
        }}
			>
				<Typography
					component='p'
					sx={{
						color: 'background.default',
            textAlign: "center",
						fontSize: { xs: 22, sm: 24, md: 26, lg: 28 },
					}}
				>
					{parseText(question)}
				</Typography>
			</Paper>
			<Typography
				component='h4'
				sx={{
					fontWeight: '700',
					fontSize: 26,
					textAlign: 'center',
					margin: '1rem 0',
					color: 'background.default',
				}}
			>
				This is...
			</Typography>
		</Box>
	)
}
