import { QuestionForGame } from './questions'

export interface History {
	id: number
	isCorrect: boolean
  question: string
}

export interface Game {
	questions: QuestionForGame[]
	questionQty: number
	scoreCounter: number
	actualQuestion: number
	history: History[]
}
