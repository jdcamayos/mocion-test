import * as React from 'react'
// MUI Styles
import Box from '@mui/material/Box'
// Others
import useGame from '../hooks/useGame'
import GreetingSection from '../components/welcome/GreetingSection'
import DescriptionSection from '../components/welcome/DescriptionSection'
import StartGameSection from '../components/welcome/StartGameSection'

export default function Welcome() {
	const { game, restartGame } = useGame()

	React.useEffect(() => {
		if (game.history.length > 0) {
			restartGame()
		}
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
				padding: '48px 16px 8px 16px',
			}}
		>
			<GreetingSection />
			<DescriptionSection />
			<StartGameSection />
		</Box>
	)
}
