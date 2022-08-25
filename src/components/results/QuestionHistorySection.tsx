import * as React from 'react'
// MUI Styles
import List from '@mui/material/List'
import Paper from '@mui/material/Paper'
// Types
import { Game } from '../../types/game'
import HistoryItem from './HistoryItem'

type Props = {
	game: Game
}

export default function QuestionHistorySection(props: Props) {
	const { game } = props
	return (
		<List
			sx={{
        width: '100%',
        maxHeight: '65vh',
        overflowY: 'scroll',
        backgroundColor: 'primary.main'
      }}
			component={Paper}
			elevation={6}
		>
			{game.history.map(history => (
				<HistoryItem
          key={history.id}
          history={history}
          historyLength={game.history.length}
        />
			))}
		</List>
	)
}
