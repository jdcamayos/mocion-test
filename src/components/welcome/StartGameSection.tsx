import * as React from 'react'
// MUI Styles
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
// Components
import PlayButton from '../misc/PlayButton'
// Hooks
import useGame from '../../hooks/useGame'

export default function StartGameSection() {
	const { loading, game, fetchQuestions } = useGame()

	const Loading = () => <CircularProgress color='error' />

	const LoadFailed = () => (
		<>
			<Button sx={{ textTransform: 'none', fontSize: 18 }} color='warning' variant='contained' fullWidth onClick={() => fetchQuestions()}>
				Re load
			</Button>
			<Typography
				component='p'
				sx={{
					marginTop: 2,
					fontSize: 18,
					textAlign: 'center',
					color: 'background.default',
					fontWeight: '400'
				}}
			>
				Ups!, something goes wrong loading questions
			</Typography>
		</>
	)

	const LoadSuccessful = () => (
		<PlayButton sx={{ marginBottom: 5 }} to='/questions/0'>
			Begin
		</PlayButton>
	)
	return (
		<Box
			component='section'
			sx={{
				marginTop: 6,
        width: '100%',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
			}}
		>
			{/* // Loading */}
			{loading && Loading()}
			{/* Load Failed */}
			{!loading && game.questions.length === 0 && LoadFailed()}
			{/* Load Successful */}
			{!loading && game.questions.length > 0 && LoadSuccessful()}
		</Box>
	)
}
