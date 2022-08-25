import * as React from 'react'
import { useNavigate } from 'react-router-dom'
// MUI Styles
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
// Components
import PlayButton from '../components/misc/PlayButton'
import QuestionHistorySection from '../components/results/QuestionHistorySection'
// Hooks
import useGame from '../hooks/useGame'

export default function Results() {
	const { game } = useGame()
	const navigate = useNavigate()

	React.useEffect(() => {
		if (game.history.length < 10 && game.scoreCounter === 0) navigate('/')
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<Box
			component='main'
			sx={{
				minHeight: '100vh',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				padding: '1rem 0',
				gap: 2,
			}}
		>
			<Typography
				component='h1'
				sx={{
					textAlign: 'center',
					fontSize: 28,
					fontWeight: '700',
					color: 'background.default',
				}}
			>
				Your score
				<br />
				{game.scoreCounter} / {game.questionQty}
			</Typography>
			<QuestionHistorySection
				game={game}
			/>
			<PlayButton sx={{ marginTop: 1 }} to='/'>
				Play Again?
			</PlayButton>
		</Box>
	)
}
