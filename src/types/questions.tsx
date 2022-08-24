export interface Question {
	category: string
	type: string
	difficulty: string
	question: string
	correct_answer: string
	incorrect_answers: string[]
}

export interface Answer {
  id: number
  answer: string
}

export interface QuestionForGame extends Question {
	id: number
	answers: Answer[]
}

export interface QuestionsResponse {
	responseCode: number
	results: Question[]
}
