import { QuestionsResponse } from '../types/questions'

export const getQuestions = async (): Promise<QuestionsResponse> => {
	const result = await fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
	const data = result.json()
	return data
}
