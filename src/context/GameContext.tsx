import * as React from 'react'
import { Game } from '../types/game'

type GameContextType = {
	game: Game
	setGame: React.Dispatch<React.SetStateAction<Game>>
}

export const GameContext = React.createContext<GameContextType>({} as GameContextType)

type Props = {
	children: React.ReactNode
}

const initialValues: Game = {
	questions: [],
	questionQty: 0,
	scoreCounter: 0,
	actualQuestion: 0,
	history: [],
}

export default function GameProvider(props: Props) {
	const [game, setGame] = React.useState(initialValues)

	return <GameContext.Provider value={{ game, setGame }}>{props.children}</GameContext.Provider>
}
